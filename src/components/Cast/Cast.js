import { fetchMovieCast } from "api";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { List, ListImg, ListItem, Text, Title } from "./Cast.styled";

import placeholderAvatar from 'img/istockphoto-1167753373-612x612.jpg'

export default function Cast() {
    const [casts, setCasts] = useState([]);
    const { movieId } = useParams();
    
    useEffect(() => {
        async function getCast() {
            try {
                const castFetch = await fetchMovieCast(movieId);
                setCasts(castFetch.cast);
                
            } catch (error) {
                console.log(error)
            }
        }
        getCast()
    }, [movieId])


    
    return (
        <List>
            {casts && casts.length > 0 && casts.map(({character, name, profile_path, id}) => (
             <ListItem key={id}>
               {<ListImg 
                src={(profile_path !== null) 
                    ? 
                    `https://image.tmdb.org/t/p/original/${profile_path}` 
                    : 
                    placeholderAvatar} 
                alt={name}/>}
               <Title>{character}</Title>
               <Text>{name}</Text>     
            </ListItem>
            ))}
        </List>
    )
};