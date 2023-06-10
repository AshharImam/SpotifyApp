import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const TrackCard = ({id, name, image, artists, popularity, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onPress(id, name)}
      style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View>
        <Text style={styles.title}>{name}</Text>
        <Text>{artists?.map(e => e?.name).join(', ')}</Text>
        <Text>Popularity: {popularity}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TrackCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  image: {
    height: 70,
    width: 70,
    marginRight: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
