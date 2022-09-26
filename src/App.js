import React from 'react';
import {View, StyleSheet} from 'react-native';
import ToDoCard from './components/ToDoCard';

function App() {
  return (
    <View style={styles.container}>
      <ToDoCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
