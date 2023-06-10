import {View, Text, Image, ActivityIndicator} from 'react-native';
import React from 'react';
import useTrackDetailController from '../../view-controllers/useTrackDetailController';
import styles from './styles';

const TrackDetail = ({route}) => {
  const {id} = route.params;
  const {trackDetail, isLoading} = useTrackDetailController(id);
  if (isLoading) {
    return <ActivityIndicator size={'small'} style={{alignSelf: 'center'}} />;
  }
  const date = new Date(trackDetail?.duration_ms);
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri:
            trackDetail?.album?.images?.length &&
            trackDetail?.album?.images[0]?.url,
        }}
      />
      <View style={styles.lowerContainer}>
        <Text style={styles.title}>{trackDetail?.name}</Text>
        <Text>Album: {trackDetail?.album?.name}</Text>

        <Text>
          Artists: {trackDetail?.album?.artists?.map(e => e.name).join(', ')}
        </Text>
        <Text>
          Duration: {date.getMinutes()}m:{date.getSeconds()}s
        </Text>
      </View>
    </View>
  );
};

export default TrackDetail;
