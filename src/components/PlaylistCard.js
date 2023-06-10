import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const PlaylistCard = ({id, name, image, total, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onPress(id, name, image)}
      style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View>
        <Text style={styles.title}>{name}</Text>
        <Text>No. of tracks: {total}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaylistCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  image: {
    height: 140,
    width: 140,
    marginRight: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
});
