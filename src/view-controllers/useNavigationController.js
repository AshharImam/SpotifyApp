import {useEffect, useState} from 'react';
import useAuthViewModel from '../view-models/useAuthViewModel';
import helper from '../utils/helperFunctions';
const useNavigationController = () => {
  const {getToken} = useAuthViewModel();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await getToken();
        await helper.setAccessToken(response);
        setAccessToken(accessToken);
      } catch (error) {
        console.error(error);
        setIsError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    isLoading,
    isError,
  };
};

export default useNavigationController;
