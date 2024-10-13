import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface PhotoCardProps {
    id: string;
    thumbnailUrl: string;
    author: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ id, thumbnailUrl, author }) => {
    const navigate = useNavigate();

    const handleClick = () => navigate(`/photos/${id}`);

    return (
        <Card
            onClick={handleClick}
            sx={{
                cursor: 'pointer',
                width: 300,
                height: 500,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <CardMedia
                component="img"
                image={thumbnailUrl}
                sx={{
                    height: 400,
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
                }}
            >
                <Typography variant="subtitle1" noWrap>
                    {author}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PhotoCard;
