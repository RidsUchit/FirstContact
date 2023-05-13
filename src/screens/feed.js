import React from 'react';
import { StyleSheet, View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { AntDesign,FontAwesome } from '@expo/vector-icons';

const data = [
    {
      id: '1',
      username: 'john_doe',
      imageSource: require('../../assets/people1.png'),
      caption: 'This is an amazing photo!',
      likes: 1243,
      comments: 42,
    },
    {
      id: '2',
      username: 'jane_smith',
      imageSource: require('../../assets/people2.png'),
      caption: 'Sunset vibes',
      likes: 532,
      comments: 18,
    },
    {
        id: '3',
        username: 'Rushin',
        imageSource: require('../../assets/people3.png'),
        caption: 'Mountain Diaries',
        likes: 888,
        comments: 45,
      },
    // Add more post objects here
  ];

const Feed = () => {
  const renderPost = ({ item }) => {
    return (
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Image
            source={require('../../assets/avatar.png')}
            style={styles.avatar}
          />
          <Text style={styles.username}>{item.username}</Text>
        </View>
        <Image source={item.imageSource} style={styles.image} />
        <View style={styles.postFooter}>
        <Text style={styles.caption}>{item.caption}</Text>
        

          
          <View style={styles.interactions}>

          <TouchableOpacity style={styles.iconContainer}>
        <AntDesign name="heart" size={24} color="#D70040" style={styles.icon} />
          <Text style={styles.interaction}>{item.likes} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome name="comment-o" size={24} color="#3BA7DC" style={styles.icon_comment} />
          <Text style={styles.interaction}>{item.comments}</Text>
        </TouchableOpacity>

             
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderPost}
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
    marginBottom: 16,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
    marginLeft:8
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  postFooter: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  caption: {
    fontSize: 16,
    marginBottom: 8,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  interactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  interaction: {
    fontSize: 14,
    color: '#777',
  },
  icon: {
    marginRight: 5,
  },
  icon_comment:{
marginLeft:10,
marginRight: 5
  },
});

export default Feed;
