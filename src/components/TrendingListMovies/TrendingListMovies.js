import { TrendingItemMovies } from "components/TrendingItemMovies/TrendingItemMovies";
import { Container, List } from "./TrendingListMovies.styled";
import { useLocation } from "react-router-dom";

export const TrendingListMovies = ({items}) => {
    const location = useLocation();
    return (
    <Container>
        <List>
            {items.map(({id, title, poster_path}) => (
                <TrendingItemMovies 
                    id={id}
                    poster={poster_path}
                    title={title}
                    location={location}
                ></TrendingItemMovies>
            ))}
        </List>
    </Container>
    );
};