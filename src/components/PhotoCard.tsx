import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface PhotoCardProps {
    id: string;
    thumbnailUrl: string;
    author: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ id, thumbnailUrl, author }) => {
    const navigate = useNavigate();

    const handleClick = () => navigate(`/IA02-AWP/photos/${id}`);

    return (
        <Card
            onClick={handleClick}
            sx={{
                cursor: 'pointer',
                width: { xs: 280, sm: 300 },
                height: 450,
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
                },
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <CardMedia
                component="img"
                image={thumbnailUrl}
                sx={{
                    height: 300,
                    objectFit: 'cover',
                }}
            />
            <CardContent
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    backgroundColor: '#f5f5f5',
                }}
            >
                <Box>
                    <Typography variant="subtitle1" fontWeight="bold" noWrap>
                        {author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={1}>
                        Click to view details
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default PhotoCard;
