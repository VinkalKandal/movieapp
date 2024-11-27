import { debounce, Stack, Typography, IconButton, styled } from '@mui/material';
import { ArrowBack, Search as SearchIcon } from '@mui/icons-material';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../components/Search';
import { ContentInfo, PageInfo } from '../models/MoviePage';
import { getMoviePage } from '../services/MovieData';
import MovieContainer from '../components/MovieContainer';

const HeaderContainer = styled(Stack)(({ theme }) => ({
  zIndex: 1,
  width: '100%',
  height: '80px',
  background: 'linear-gradient(#171717, 90%, transparent)',
  alignItems: 'center',
  display: 'flex',
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(2),
  position: 'fixed',
}));

const TitleTypography = styled(Typography)(() => ({
  fontSize: '1.5rem',
  color: '#ffffff',
  textAlign: 'left',
  fontFamily: 'Titillium Web',
}));

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  marginLeft: 'auto !important',
  paddingRight: theme.spacing(2),
}));

const Details = () => {
  const [movieDetails, setMovieDetails] = useState<PageInfo | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState<ContentInfo[]>([]);

  const toggleSearch = () => {
    if (showSearch && movieDetails) {
      setFilteredData(movieDetails['content-items'].content);
    }
    setShowSearch((prev) => !prev);
  };

  const fetchMovies = async () => {
    if (page <= 3) {
      const data = await getMoviePage(page);
      setMovieDetails((prev) => {
        const updatedContent = prev
          ? [...prev['content-items'].content, ...data['content-items'].content]
          : data['content-items'].content;
        setFilteredData(updatedContent);
        return {
          ...data,
          'content-items': { content: updatedContent },
        };
      });
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  const handleScroll = useCallback(
    debounce(() => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 150) {
        setPage((prevPage) => prevPage + 1);
      }
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      {!showSearch ? (
        <Stack direction="column" spacing={2}>
          <HeaderContainer direction="row" spacing={2}>
            <IconButton size="large" onClick={() => navigate('/')}>
              <ArrowBack sx={{ color: '#FFFFFF' }} />
            </IconButton>
            <TitleTypography variant="body1">
              {movieDetails?.title || ''}
            </TitleTypography>
            <CustomIconButton onClick={toggleSearch}>
              <SearchIcon sx={{ color: '#FFFFFF', fontSize: '30px' }} />
            </CustomIconButton>
          </HeaderContainer>
        </Stack>
      ) : (
        <Search
          mainData={movieDetails?.['content-items'].content || []}
          onSearch={setFilteredData}
          hideSearch={toggleSearch}
        />
      )}
      <MovieContainer movieDetails={filteredData} />
      {showSearch && filteredData.length === 0 && (
        <Typography variant="h6" color="#ffffff" align="center">
          No Movie Found
        </Typography>
      )}
    </>
  );
};

export default Details;
