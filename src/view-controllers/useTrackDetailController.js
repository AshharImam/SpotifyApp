import {useEffect, useState} from 'react';

const {
  default: useTrackViewModel,
} = require('../view-models/useTrackViewModel');

const useTrackDetailController = id => {
  const {getTrackDetail} = useTrackViewModel();
  const [trackDetail, setTrackDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  useEffect(() => {
    getTrackDetail(id)
      .then(response => {
        setTrackDetail(response);
      })
      .catch(error => {
        console.error(error);
        setIsError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return {
    trackDetail,
    isLoading,
  };
};

export default useTrackDetailController;
