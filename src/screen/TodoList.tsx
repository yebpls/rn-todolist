import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TodoItemInterface} from '../type/todo.type';
import {todoApi} from '../api/todo.api';

export default function TodoList() {
  const [todoList, setTodoList] = useState<TodoItemInterface[] | null>(null);

  const fetchTodo = async () => {
    const res = await todoApi.getTodoList();
    setTodoList(res.data);
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  const renderItem = () =>
    todoList &&
    todoList.map(item => (
      <Text key={item.id} style={style.todoItem}>
        {item.title}
      </Text>
    ));

  return (
    <ScrollView style={style.container}>
      <Text style={style.headerTitle}>Todo List</Text>
      {renderItem()}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {backgroundColor: '#eff2f3', padding: 20},
  headerTitle: {
    fontSize: 30,
    color: '#509cdc',
    marginBottom: 20,
  },
  todoItem: {
    color: 'black',
    fontSize: 16,
    padding: 16,
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: {width: 0, height: 3}, // iOS shadow
    shadowOpacity: 0.24, // iOS shadow
    shadowRadius: 8, // iOS shadow
  },
});
