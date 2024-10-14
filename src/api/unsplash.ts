import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

export const fetchPhotos = async (page: number) => {
  try {
    console.log(`Fetching page ${page}`);
    const response = await axios.get(`${API_URL}/photos`, {
      params: { page, per_page: 10 },
      headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching photos: ${error}`);
    throw new Error('Unable to fetch photos. Please try again later.');
  }
};

export const fetchPhotoDetails = async (id: string) => {
  try {
    console.log(`Fetching photo details for ${id}`);
    const response = await axios.get(`${API_URL}/photos/${id}`, {
      headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching photo details: ${error}`);
    throw new Error('Unable to fetch photo details. Please try again later.');
  }
};
