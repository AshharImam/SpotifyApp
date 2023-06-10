const {useState, useEffect} = require('react');
import {useNavigation} from '@react-navigation/native';
import useTrackViewModel from '../view-models/useTrackViewModel';

const useHomeController = () => {
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const {geFeaturedPlaylists} = useTrackViewModel();
  const navigation = useNavigation();
  useEffect(() => {
    getPlaylists();
  }, []);

  const getPlaylists = async () => {
    setIsLoading(true);
    geFeaturedPlaylists()
      .then(response => {
        setPlaylists(response.playlists.items);
      })
      .catch(error => {
        console.error(error);
        setIsError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const onPlaylistPress = (id, name, image) => {
    navigation.navigate('PlaylistDetail', {id, name, image});
  };
  return {
    playlists,
    isLoading,
    isError,
    onPlaylistPress,
  };
};

export default useHomeController;
