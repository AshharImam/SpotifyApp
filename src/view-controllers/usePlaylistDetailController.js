const {useEffect, useState, useCallback, useRef} = require('react');
const {
  default: useTrackViewModel,
} = require('../view-models/useTrackViewModel');

const usePlaylistDetailController = id => {
  const {getTracks} = useTrackViewModel();
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const offset = useRef(0);
  const total = useRef(null);
  useEffect(() => {
    getPlaylistDetail();
  }, []);
  const getPlaylistDetail = useCallback(() => {
    if (isLoading || (total.current && offset.current == total.current)) {
      return;
    }
    setIsLoading(true);
    getTracks(id, offset.current)
      .then(response => {
        setTracks(e => e.concat(response.items));
        offset.current = response.offset + response.items.length;
        total.current = response.total;
      })
      .catch(error => {
        console.error(error);
        setIsError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [tracks, isLoading]);
  return {
    tracks,
    getPlaylistDetail,
    isLoading,
    isError,
  };
};

export default usePlaylistDetailController;
