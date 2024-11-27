import { Grid2 } from '@mui/material'
import { FC } from 'react'
import { ContentInfo } from '../models/MoviePage'
import CustomCard from './CustomCard'

type Props = {
    movieDetails: ContentInfo[]
}
const MovieContainer: FC<Props> = ({ movieDetails }) => {

    return (
        <Grid2
            container
            spacing={2}
            sx={{
                paddingX: '1rem',
                marginTop: 10,
                overflow: 'hidden',
            }}
        >
            {movieDetails.map((movie: ContentInfo, i: number) => {
                const posterImage = movie['poster-image'];
                const title = movie.name;

                return (
                    <Grid2
                        key={`${i}_${title}_${posterImage}`}
                        size={4}
                    >
                        <CustomCard title={movie.name} posterImage={movie['poster-image']} />
                    </Grid2>
                );
            })}
        </Grid2>
    )
}

export default MovieContainer