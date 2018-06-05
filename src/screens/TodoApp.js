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
  ScrollView,
  TextInput,
  Text,
  Button,
  Platform,
} from 'react-native';
import uuid from 'uuid/v1';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-navigation';

const TouchableElement = Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Todo App',
  };

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      status: 'all',
      todos: [
        { key: '1', title: 'Hello World', completed: false },
        { key: '2', title: 'Wow', completed: true },
        { key: '3', title: 'Malibu', completed: true },
        { key: '4', title: 'Fitz', completed: false },
        { key: '5', title: 'Tods', completed: true },
        { key: '6', title: 'Telegram', completed: false },
        { key: '7', title: 'Cup', completed: true },
        { key: '8', title: 'What the...', completed: true },
      ],
    };
  }

  onAddTodo = title => {
    this.setState(
      {
        title: '',
        todos: this.state.todos.concat({
          key: uuid(),
          title,
          completed: false,
        }),
      },
      () => {
        this.listRef.scrollToEnd();
      }
    );
  };

  onRemoveTodo = key => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.key === key);
    if (index < 0) {
      return;
    }

    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1)],
    });
  };

  onChangeStatus = key => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.key === key);

    if (index < 0) {
      return;
    }

    this.setState({
      todos: [
        ...todos.slice(0, index),
        { ...todos[index], completed: !todos[index].completed },
        ...todos.slice(index + 1),
      ],
    });
  };

  renderEmpty() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>There are no todos</Text>
      </View>
    );
  }

  renderList() {
    const { todos, status } = this.state;

    return (
      <ScrollView
        ref={c => {
          this.listRef = c;
        }}
      >
        {todos
          .filter(
            todo =>
              status === 'all' ||
              (status === 'completed' && todo.completed) ||
              (status === 'active') === !todo.completed
          )
          .map((todo, index) => {
            const backgroundColor = index % 2 === 1 ? 'lightgray' : 'white';
            const iconName = todo.completed
              ? 'checkbox-marked-circle'
              : 'checkbox-blank-circle-outline';
            return (
              <View key={todo.key} style={[styles.rowContainer, { backgroundColor }]}>
                <TouchableOpacity onPress={() => this.onChangeStatus(todo.key)}>
                  <Icon name={iconName} size={20} />
                </TouchableOpacity>
                <Text style={styles.title}>{todo.title}</Text>
                <Text onPress={() => this.onRemoveTodo(todo.key)}>삭제</Text>
              </View>
            );
          })}
      </ScrollView>
    );
  }

  render() {
    const { title, status, todos } = this.state;

    console.log(todos);
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
          {todos.length === 0 ? this.renderEmpty() : this.renderList()}
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
});
