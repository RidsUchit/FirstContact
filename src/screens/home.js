import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Feed from './feed';

const HomeScreen = () => {
  return (
     
     <View style={{ flex: 1 }}>
      <Feed />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
  },
});

export default HomeScreen;
