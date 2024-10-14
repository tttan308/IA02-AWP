import { Grid, CircularProgress, Box, Typography } from '@mui/material';
import PhotoCard from '../components/PhotoCard';
import { usePhotos } from '../hooks/usePhotos';
import InfiniteScroll from 'react-infinite-scroll-component';

const PhotoList = () => {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = usePhotos();

    const allPhotos = data?.pages.flat() ?? [];

    return (
        <Box sx={{ padding: 2 }}>
            <Typography
                variant="h4"
                component="h1"
                align="center"
                gutterBottom
                sx={{ fontWeight: 'bold', marginBottom: 4 }}
            >
                Unsplash Photo Gallery
            </Typography>

            <InfiniteScroll
                dataLength={allPhotos.length}
                next={fetchNextPage}
                hasMore={!!hasNextPage}
                loader={
                    <Box display="flex" justifyContent="center" sx={{ marginTop: 2 }}>
                        <CircularProgress />
                    </Box>
                }
                style={{ overflow: 'hidden' }}
            >
                <Grid container spacing={3} justifyContent="center">
                    {allPhotos.map((photo) => (
                        <Grid item key={photo.id}>
                            <PhotoCard
                                id={photo.id}
                                thumbnailUrl={photo.urls.thumb}
                                author={photo.user.name}
                            />
                        </Grid>
                    ))}
                </Grid>
            </InfiniteScroll>

            {!hasNextPage && !isFetchingNextPage && (
                <Typography
                    variant="h6"
                    align="center"
                    sx={{ marginTop: 4, color: 'gray' }}
                >
                    No more photos to load.
                </Typography>
            )}
        </Box>
    );
};

export default PhotoList;
