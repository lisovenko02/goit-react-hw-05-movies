import { Link } from "react-router-dom"
import { ListImg, ListItem, ListTitle } from "./TrendingItemMovies.styled"

import placeholderLogo from 'img/poster-placeholder.svg'

export const TrendingItemMovies = ({id, title, poster, location}) => {
    
    return (
        <Link 
        to={(location.pathname === '/movies') ? `${id}` : `movies/${id}}`}
        state={{ from: location }}
        >
            <ListItem key={id}>
                <ListImg 
                src={(poster !== null) ? `https://image.tmdb.org/t/p/original${poster}` : placeholderLogo} 
                alt={title}
                loading="lazy"/>
                <ListTitle>{title}</ListTitle>
            </ListItem>
        </Link>
    )
}