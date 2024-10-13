import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPhotos } from '../api/unsplash';

export const usePhotos = () => {
  return useInfiniteQuery({
    queryKey: ['photos'],
    queryFn: ({ pageParam = 1 }) => fetchPhotos(pageParam),
    getNextPageParam: (_lastPage, allPages) => allPages.length + 1,
    initialPageParam: 1,
  });
};
