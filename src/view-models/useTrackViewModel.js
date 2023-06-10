import axios from 'axios';
import helperFunctions from '../utils/helperFunctions';

const useTrackViewModel = () => {
  const geFeaturedPlaylists = async () => {
    try {
      const {access_token, token_type} = await helperFunctions.getAccessToken();
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.spotify.com/v1/browse/featured-playlists',
        headers: {
          Authorization: `${token_type} ${access_token}`,
        },
      };
      console.log(config);
      const response = await axios.request(config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  const getTracks = async (id, offset) => {
    try {
      const {access_token, token_type} = await helperFunctions.getAccessToken();
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://api.spotify.com/v1/playlists/${id}/tracks?offset=${offset}`,
        headers: {
          Authorization: `${token_type} ${access_token}`,
        },
      };
      console.log('URL', config.url);
      const response = await axios.request(config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  const getTrackDetail = async id => {
    try {
      const {access_token, token_type} = await helperFunctions.getAccessToken();
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://api.spotify.com/v1/tracks/${id}`,
        headers: {
          Authorization: `${token_type} ${access_token}`,
        },
      };
      const response = await axios.request(config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    geFeaturedPlaylists,
    getTracks,
    getTrackDetail,
  };
};

export default useTrackViewModel;
