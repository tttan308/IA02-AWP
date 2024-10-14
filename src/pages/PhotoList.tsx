import { Grid, CircularProgress, Box, Typography } from '@mui/material';
import PhotoCard from '../components/PhotoCard';
import { usePhotos } from '../hooks/usePhotos';
import InfiniteScroll from 'react-infinite-scroll-component';

const PhotoList = () => {
    const { data, fetchNextPage, hasNextPage } = usePhotos();

    console.log(data);
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
                dataLength={data?.pages.flat().length ?? 0}
                next={fetchNextPage}
                hasMore={!!hasNextPage}
                loader={
                    <Box display="flex" justifyContent="center">
                        <CircularProgress />
                    </Box>
                }
                style={{ overflow: 'hidden' }}
            >
                <Grid container spacing={3} justifyContent="center">
                    {data?.pages.flat().map((photo) => (
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
        </Box>
    );
};

export default PhotoList;
