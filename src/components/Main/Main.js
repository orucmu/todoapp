import React from 'react';
import {View, Text} from 'react-native';
import styles from './Main.style';

const Main = props => {
  const filteredTodo = props.item.filter(todo => !todo.completed);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.todoCounter}>{filteredTodo.length}</Text>
      </View>
    </View>
  );
};

export default Main;
