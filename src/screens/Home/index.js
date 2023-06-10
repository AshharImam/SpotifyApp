import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import PlaylistCard from '../../components/PlaylistCard';
import useHomeController from '../../view-controllers/useHomeController';

const Home = () => {
  const {playlists, onPlaylistPress, isLoading, isError} = useHomeController();
  const renderPlaylist = ({item}) => {
    const {
      id,
      name,
      images: [image],
      tracks: {total},
    } = item;
    return (
      <PlaylistCard
        onPress={onPlaylistPress}
        id={id}
        name={name}
        image={image?.url}
        total={total}
      />
    );
  };
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
        data={playlists}
        renderItem={renderPlaylist}
        keyExtractor={e => e.id}
        refreshing={isLoading}
        onRefresh={() => {}}
        ItemSeparatorComponent={renderItemSeparator}
        contentContainerStyle={{paddingBottom: 16}}
      />
    </View>
  );
};

export default Home;
