import React from 'react';
import { StyleSheet, View, FlatList, Image, TouchableOpacity, Text } from 'react-native';
import { AntDesign,FontAwesome } from '@expo/vector-icons';

const data = [
  {
    id: '1',
    username: 'john_doe',
    imageSource: require('../../assets/people1.png'),
    likes: 1234,
    comments: 56,
  },
  {
    id: '2',
    username: 'jane_smith',
    imageSource: require('../../assets/people2.png'),
    likes: 5678,
    comments: 89,
  },
  {
    id: '3',
    username: 'Rushin',
    imageSource: require('../../assets/people3.png'),
    likes: 453,
    comments: 67,
  },
  // Add more post objects here
];

const Feed = () => {
  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <Text style={styles.username}>{item.username}</Text>
      </View>
      <Image source={item.imageSource} style={styles.image} />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.iconContainer}>
        <AntDesign name="heart" size={24} color="#D70040" style={styles.icon} />
          <Text style={styles.iconText}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome name="comment-o" size={24} color="#3BA7DC" style={styles.icon_comment} />
          <Text style={styles.iconText}>{item.comments}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  postContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  header: {
    padding: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
  icon_comment:{
marginLeft:10,
marginRight: 5
  },
  iconText: {
    fontSize: 16,
  },
});

export default Feed;
