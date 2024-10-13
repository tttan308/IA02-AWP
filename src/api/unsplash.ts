import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

export const fetchPhotos = async (page: number) => {
  console.log(`Fetching page ${page}`);
  const response = await axios.get(`${API_URL}/photos`, {
    params: {
      page,
      per_page: 10,
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });

  return response.data;
};

export const fetchPhotoDetails = async (id: string) => {
  console.log(`Fetching photo details for ${id}`);
  const response = await axios.get(`${API_URL}/photos/${id}`, {
    headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
  });
  return response.data;
};
