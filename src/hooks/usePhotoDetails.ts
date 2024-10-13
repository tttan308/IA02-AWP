import { useQuery } from '@tanstack/react-query';
import { fetchPhotoDetails } from '../api/unsplash';

export const usePhotoDetails = (id: string) => {
  return useQuery({
    queryKey: ['photo', id],
    queryFn: () => fetchPhotoDetails(id),
  });
};
