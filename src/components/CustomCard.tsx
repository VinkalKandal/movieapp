import { Box, Typography, styled } from '@mui/material';
import { FC } from 'react';
import MissingPoster from '../assets/placeholder_for_missing_posters.png';

type CardProps = {
  title: string;
  posterImage: string;
};

const StyledCardContainer = styled(Box)(() => ({
  width: '100%',
  position: 'relative',
  paddingTop: '150%',
  overflow: 'hidden',
}));

const StyledImage = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const CustomCard: FC<CardProps> = ({ title, posterImage }) => {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = MissingPoster;
  };

  return (
    <>
      <StyledCardContainer>
        <StyledImage
          src={`https://test.create.diagnal.com/images/${posterImage}`}
          alt={title}
          onError={handleImageError}
        />
      </StyledCardContainer>
      <Typography
        fontFamily="Titillium Web"
        color="#FFFFFF"
        textAlign="left"
        sx={{ mt: 1, mb: 1 }}
      >
        {title}
      </Typography>
    </>
  );
};

export default CustomCard;
