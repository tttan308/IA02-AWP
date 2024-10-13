import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { usePhotoDetails } from '../hooks/usePhotoDetails';
import { Box, Typography, CircularProgress, Avatar, Divider, Stack, Paper, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Icon cho nút Back

const PhotoDetails = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate(); // Khởi tạo hook useNavigate
    const { data, isLoading, isError } = usePhotoDetails(id!);

    if (isLoading) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <CircularProgress size={60} thickness={5} />
            </Box>
        );
    }

    if (isError) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <Typography variant="h5" color="error">
                    Failed to load photo details. Please try again.
                </Typography>
            </Box>
        );
    }

    return (
        <Paper
            elevation={3}
            sx={{
                maxWidth: 900,
                margin: '40px auto',
                padding: 4,
                borderRadius: 3,
                backgroundColor: '#f5f5f5',
            }}
        >
            <Button
                startIcon={<ArrowBackIcon />}
                variant="outlined"
                sx={{ marginBottom: 2 }}
                onClick={() => navigate(-1)}
            >
                Back
            </Button>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    borderRadius: 3,
                    marginBottom: 3,
                    maxHeight: '60vh',
                }}
            >
                <img
                    src={data.urls.full}
                    alt={data.alt_description || 'No Title'}
                    style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '80vh',
                        objectFit: 'contain',
                        borderRadius: 8,
                        transition: 'transform 0.3s',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
            </Box>

            <Stack spacing={2}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    {data.alt_description || 'Untitled'}
                </Typography>

                <Divider />

                <Box display="flex" alignItems="center" gap={2}>
                    <Avatar src={data.user.profile_image.medium} alt={data.user.name} />
                    <Typography variant="subtitle1" color="text.secondary">
                        by {data.user.name}
                    </Typography>
                </Box>

                <Typography variant="body1" sx={{ marginTop: 2 }}>
                    {data.description || 'No description available.'}
                </Typography>
            </Stack>
        </Paper>
    );
};

export default PhotoDetails;
