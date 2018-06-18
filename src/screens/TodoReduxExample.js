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
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';

const TouchableElement = Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback;

class TodoReduxExample extends React.Component {
  static navigationOptions = {
    title: 'TodoReduxExample',
  };

  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  onAddTodo = title => {
    this.props.addTodo({
      key: uuid(),
      title,
      completed: false,
    });
  };

  onRemoveTodo = key => {
    const { todos } = this.props;
    const index = todos.findIndex(todo => todo.key === key);
    if (index < 0) {
      return;
    }

    this.props.removeTodo(index);
  };

  onChangeStatus = key => {
    const { todos } = this.props;
    const index = todos.findIndex(todo => todo.key === key);

    if (index < 0) {
      return;
    }

    this.props.toggleStatus(index);
  };

  onChangeFilter = filter => {
    this.props.setFilter(filter);
  };

  renderEmpty() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>There are no todos</Text>
      </View>
    );
  }

  renderList() {
    const { todos, filter } = this.props;

    return (
      <ScrollView
        ref={c => {
          this.listRef = c;
        }}
      >
        {todos
          .filter(
            todo =>
              filter === 'all' ||
              (filter === 'completed' && todo.completed) ||
              (filter === 'active') === !todo.completed
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
    const { title } = this.state;
    const { filter, todos } = this.props;

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
              style={{ fontWeight: filter === 'all' ? 'bold' : 'normal', marginHorizontal: 10 }}
              onPress={() => this.onChangeFilter('all')}
            >
              All
            </Text>
            <Text
              style={{
                fontWeight: filter === 'completed' ? 'bold' : 'normal',
                marginHorizontal: 10,
              }}
              onPress={() => this.onChangeFilter('completed')}
            >
              Completed
            </Text>
            <Text
              style={{ fontWeight: filter === 'active' ? 'bold' : 'normal', marginHorizontal: 10 }}
              onPress={() => this.onChangeFilter('active')}
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

const mapStateToProps = ({ todo: { filter, todos } }) => {
  return {
    filter,
    todos,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoReduxExample);
