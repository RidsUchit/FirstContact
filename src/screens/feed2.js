import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Post from './post';
const data = [
    {
      id: '1',
      username: 'john_doe',
      imageSource: require('../../assets/people1.png'),
      caption: 'This is an amazing photo!',
    },
    {
      id: '2',
      username: 'jane_smith',
      imageSource: require('../../assets/people2.png'),
      caption: 'Sunset vibes',
    },
    {
        id: '3',
        username: 'Richard Parekh',
        imageSource: require('../../assets/people3.png'),
        caption: 'Winter Fellow',
      },
    // Add more post objects here
  ];
  
  const Feed = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Post
              username={item.username}
              imageSource={item.imageSource}
              caption={item.caption}
              onPressLike={() => console.log('Like button pressed')}
            />
          )}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });
  
  export default Feed;