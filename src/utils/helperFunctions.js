import EncryptedStorage from 'react-native-encrypted-storage';

export default {
  setAccessToken: async data => {
    await EncryptedStorage.setItem('access_token', JSON.stringify(data));
  },
  getAccessToken: async () => {
    const token = await EncryptedStorage.getItem('access_token');
    return JSON.parse(token);
  },
};
