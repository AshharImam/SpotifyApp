import {View, Text, FlatList, Image} from 'react-native';
import React, {useCallback} from 'react';
import styles from './styles';
import usePlaylistDetailController from '../../view-controllers/usePlaylistDetailController';
import TrackCard from '../../components/TrackCard';

const PlaylistDetail = ({route}) => {
  const {id, image, name} = route.params;
  const {tracks, getPlaylistDetail, isLoading, onTrackPress} =
    usePlaylistDetailController(id, name);
  const renderHeader = useCallback(() => {
    return <Image source={{uri: image}} style={styles.image} />;
  }, []);
  const renderItem = useCallback(({item}) => {
    const {
      id,
      name,
      album: {
        images: [, image],
      },
      artists,
      popularity,
    } = item.track;
    return (
      <TrackCard
        id={id}
        name={name}
        image={image.url}
        artists={artists}
        popularity={popularity}
        onPress={onTrackPress}
      />
    );
  }, []);
  const renderItemSeparator = useCallback(
    () => (
      <View
        style={{
          height: 8,
        }}
      />
    ),
    [],
  );
  return (
    <View>
      <FlatList
        data={tracks}
        ListHeaderComponent={renderHeader}
        renderItem={renderItem}
        keyExtractor={e => e.track.id}
        onEndReached={getPlaylistDetail}
        onRefresh={() => {}}
        refreshing={isLoading}
        ItemSeparatorComponent={renderItemSeparator}
        contentContainerStyle={{paddingBottom: 16}}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default PlaylistDetail;
