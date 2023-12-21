import { fetchMovieReviews } from "api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { List, ListItem, Text, Title } from "./Reviews.styled";

export default function Reviews(){
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        async function getReviews() {
            try {
                const reviewsFetch = await fetchMovieReviews(movieId);
                setReviews(reviewsFetch.results); 
            } catch (error) {
                console.log(error)
            }
        }
        getReviews()
    }, [movieId])

    return (
        <List>
            {reviews && reviews.length > 0 && reviews.map(({author, content, id}) => (
                <ListItem key={id}>
                    <Title>Author: {author}</Title>
                    <Text>{content}</Text>
                </ListItem>
            ))}
        </List>
    )
}