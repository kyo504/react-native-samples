/**
 * @flow
 */
import React from 'react';
import {
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  FlatList,
  TextInput,
  Text,
  Button,
  Platform,
  AsyncStorage,
} from 'react-native';
import uuid from 'uuid/v1';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-navigation';

const TouchableElement = Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback;

export default class TodoApp extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Text style={{ marginHorizontal: 10 }} onPress={() => navigation.state.params.onClearAll()}>
        Clear All
      </Text>
    ),
  });

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      status: 'all',
      todos: [],
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ onClearAll: this.onClearAll });
    this.loadData();
  }

  /**
   * AsyncStorage를 clear하고 state도 reset한다.
   */
  onClearAll = async () => {
    try {
      await AsyncStorage.clear();
      this.setState({ todos: [] });
    } catch (e) {
      console.warn(e);
    }
  };

  /**
   * AsyncStorage로 부터 저장된 데이터를 읽은 다음 state에 담아놓는다.
   */
  async loadData() {
    try {
      const todos = [];
      const keys = await AsyncStorage.getAllKeys();

      for (const key of keys) {
        const item = await AsyncStorage.getItem(key);
        todos.push(JSON.parse(item));
      }

      this.setState({ todos });
    } catch (e) {
      console.warn(e);
    }
  }

  /**
   * AsyncStorage에 새로 만든 아이템을 추가하고, 성공하면 state에도 추가한다.
   */
  onAddTodo = async title => {
    try {
      const { todos } = this.state;
      const newTodo = {
        key: uuid(),
        title,
        completed: false,
      };
      console.log(newTodo, newTodo.key, JSON.stringify(newTodo));
      await AsyncStorage.setItem(newTodo.key, JSON.stringify(newTodo));
      const result = await AsyncStorage.getItem(newTodo.key);
      console.log(result);
      this.setState(
        {
          title: '',
          todos: todos.concat(newTodo),
        },
        () => {
          this.listRef.scrollToEnd();
        }
      );
    } catch (e) {
      console.log('Failed to set item', error);
    }
  };

  /**
   * AsyncStorage에서 key에 해당하는 데이터를 삭제하고 state에서 뺀다.
   */
  onRemoveTodo = async key => {
    try {
      const { todos } = this.state;
      const index = todos.findIndex(todo => todo.key === key);
      if (index >= 0) {
        await AsyncStorage.removeItem(key);
        this.setState({
          todos: [...todos.slice(0, index), ...todos.slice(index + 1)],
        });
      }
    } catch (e) {
      console.warn(e);
    }
  };

  /**
   * key에 대해서 변경된 사항을 merge한다
   */
  onChangeStatus = async key => {
    try {
      const { todos } = this.state;
      const index = todos.findIndex(todo => todo.key === key);

      if (index >= 0) {
        await AsyncStorage.mergeItem(key, JSON.stringify({ completed: !todos[index].completed }));
        this.setState({
          todos: [
            ...todos.slice(0, index),
            { ...todos[index], completed: !todos[index].completed },
            ...todos.slice(index + 1),
          ],
        });
      }
    } catch (e) {
      console.warn(e);
    }
  };

  renderRow = ({ item, index }) => {
    const iconName = item.completed ? 'checkbox-marked-circle' : 'checkbox-blank-circle-outline';
    return (
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={() => this.onChangeStatus(item.key)}>
          <Icon name={iconName} size={20} />
        </TouchableOpacity>
        <Text style={styles.title}>{item.title}</Text>
        <Text onPress={() => this.onRemoveTodo(item.key)}>삭제</Text>
      </View>
    );
  };

  renderSeperator = ({ item }) => {
    return <View style={styles.seperator} />;
  };

  renderList() {
    const { todos, status } = this.state;
    const filteredTodos = todos.filter(
      todo =>
        status === 'all' ||
        (status === 'completed' && todo.completed) ||
        (status === 'active') === !todo.completed
    );

    // Workaround before 0.56.x
    if (filteredTodos.length === 0) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>There are no todos</Text>
        </View>
      );
    }

    return (
      <FlatList
        ref={c => {
          this.listRef = c;
        }}
        keyExtractor={todo => todo.key}
        data={filteredTodos}
        renderItem={this.renderRow}
        ItemSeparatorComponent={this.renderSeperator}
        ListEmptyComponent={this.renderEmpty}
      />
    );
  }

  render() {
    const { title, status, todos } = this.state;

    return (
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'never', bottom: 'always' }}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          keyboardVerticalOffset={85}
        >
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={text => this.setState({ title: text })}
              placeholder="Add a new task"
            />
            <Button onPress={() => this.onAddTodo(title)} title="Add" />
          </View>
          <View style={styles.statusGroup}>
            <Text
              style={{ fontWeight: status === 'all' ? 'bold' : 'normal', marginHorizontal: 10 }}
              onPress={() => this.setState({ status: 'all' })}
            >
              All
            </Text>
            <Text
              style={{
                fontWeight: status === 'completed' ? 'bold' : 'normal',
                marginHorizontal: 10,
              }}
              onPress={() => this.setState({ status: 'completed' })}
            >
              Completed
            </Text>
            <Text
              style={{ fontWeight: status === 'active' ? 'bold' : 'normal', marginHorizontal: 10 }}
              onPress={() => this.setState({ status: 'active' })}
            >
              Active
            </Text>
          </View>
          {this.renderList()}
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 20,
    marginHorizontal: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: 20,
  },
  title: {
    flex: 1,
    marginLeft: 10,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 50,
    borderBottomColor: 'lightgray',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  statusGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: 'lightgray',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  seperator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'gray',
  },
});
