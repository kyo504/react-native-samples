/**
 * @flow
 */
import React from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  SwipeableFlatList,
  KeyboardAvoidingView,
} from 'react-native';
import {
  TextInput,
  Text,
  Button,
  RadioButtonGroup,
  RadioButton,
  Checkbox,
} from 'react-native-paper';
const uuid = require('uuid/v1');

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
        this.listRef._flatListRef.scrollToEnd();
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

  renderTodo = ({ item, index }) => {
    const backgroundColor = index % 2 === 1 ? 'lightgray' : 'white';
    return (
      <View style={[styles.rowContainer, { backgroundColor }]}>
        <Checkbox checked={item.completed} onPress={() => this.onChangeStatus(item.key)} />
        <Text style={{ marginLeft: 10 }}>{item.title}</Text>
      </View>
    );
  };

  renderQuickActions = ({ item }: Object) => {
    return (
      <View style={styles.actionsContainer}>
        <TouchableHighlight
          style={[styles.actionButton, styles.actionButtonDestructive]}
          onPress={() => this.onRemoveTodo(item.key)}
        >
          <Text style={styles.actionButtonText}>Remove</Text>
        </TouchableHighlight>
      </View>
    );
  };

  render() {
    const { title, status, todos } = this.state;

    console.log(todos);
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={84}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
          <TextInput
            style={{ flex: 1, marginHorizontal: 10 }}
            value={title}
            onChangeText={text => this.setState({ title: text })}
            placeholder="Add a new task"
          />
          <Button primary raised onPress={() => this.onAddTodo(title)}>
            Add
          </Button>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            padding: 10,
            borderBottomColor: 'lightgray',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
        </View>
        <SwipeableFlatList
          ref={c => {
            this.listRef = c;
          }}
          style={{ flex: 1 }}
          data={todos.filter(
            todo =>
              status === 'all' ||
              (status === 'completed' && todo.completed) ||
              (status === 'active') === !todo.completed
          )}
          maxSwipeDistance={80}
          renderItem={this.renderTodo}
          renderQuickActions={this.renderQuickActions}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
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
  actionsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 60,
  },
  actionButton: {
    padding: 10,
    width: 80,
    backgroundColor: '#999999',
  },
  actionButtonDestructive: {
    backgroundColor: '#FF0000',
  },
  actionButtonText: {
    textAlign: 'center',
    color: 'white',
  },
});
