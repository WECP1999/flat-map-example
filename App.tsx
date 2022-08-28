import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Card from './components/card';
import { data } from './utils/constants/data';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList data={data} renderItem={({ item }) => <Card item={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 24,
  },
});
