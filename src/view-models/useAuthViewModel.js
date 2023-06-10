import axios from 'axios';
import qs from 'qs';
import {ClientId, ClientSecret} from '@env';
const useAuthViewModel = () => {
  const getToken = async () => {
    try {
      let data = qs.stringify({
        grant_type: 'client_credentials',
        client_id: ClientId,
        client_secret: ClientSecret,
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://accounts.spotify.com/api/token',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data,
      };
      const response = await axios.request(config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    getToken,
  };
};

export default useAuthViewModel;
