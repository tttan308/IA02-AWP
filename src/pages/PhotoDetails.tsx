import { useParams } from 'react-router-dom';
import { usePhotoDetails } from '../hooks/usePhotoDetails';
import { Box, Typography, CircularProgress } from '@mui/material';

const PhotoDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading } = usePhotoDetails(id!);

    if (isLoading) return <CircularProgress />;

    return (
        <Box>
            <img src={data.urls.full} alt={data.alt_description} style={{ width: '100%' }} />
            <Typography variant="h4">{data.alt_description || 'No Title'}</Typography>
            <Typography variant="subtitle1">by {data.user.name}</Typography>
            <Typography variant="body1">{data.description || 'No description available.'}</Typography>
        </Box>
    );
};

export default PhotoDetails;
