import { Container, Image, ItemGenres, ListGenres, MainTitle, Text, Title } from "./MovieDetails.styled";

import placeholderLogo from 'img/poster-placeholder.svg'

export const MovieDetails = ({items: {overview, title, vote_average, poster_path, genres}}) => {
    
    return (
        <Container>
            <Image src={(poster_path !== null) ? `https://image.tmdb.org/t/p/original${poster_path}` : placeholderLogo} alt={title}/>
            <MainTitle>{title}</MainTitle>
            <Text>User Score: {(vote_average * 10).toFixed()}%</Text>
            {overview && <Title>Overview</Title>}
            <Text>{overview}</Text>
            <Title>Genres</Title>
            <ListGenres>
            {genres && genres.length > 0 && genres.map(({ id, name }) => {
                return <ItemGenres key={id}>{name}</ItemGenres>;
                })}
            </ListGenres>
        </Container>
    )
}