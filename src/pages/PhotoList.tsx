import { Grid2, CircularProgress, Box } from '@mui/material';
import PhotoCard from '../components/PhotoCard';
import { usePhotos } from '../hooks/usePhotos';
import InfiniteScroll from 'react-infinite-scroll-component';

const PhotoList = () => {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = usePhotos();

    return (
        <InfiniteScroll
            dataLength={data?.pages.flat().length ?? 0}
            next={fetchNextPage}
            hasMore={!!hasNextPage}
            loader={<CircularProgress />}
        >
            <Grid2 container spacing={2} justifyContent="center">
                {data?.pages.flat().map((photo) => (
                    <Grid2 item key={photo.id}>
                        <PhotoCard
                            id={photo.id}
                            thumbnailUrl={photo.urls.thumb}
                            author={photo.user.username}
                        />
                    </Grid2>
                ))}
            </Grid2>

            {isFetchingNextPage && (
                <Box display="flex" justifyContent="center" mt={2}>
                    <CircularProgress />
                </Box>
            )}
        </InfiniteScroll>
    );
};

export default PhotoList;
