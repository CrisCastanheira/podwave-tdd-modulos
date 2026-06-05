import axios from 'axios';

export const fetchPodcastSuggestions = async () => {
  const response = await axios.get(
    'https://api.podwave.com/suggestions'
  );

  return response.data;
};