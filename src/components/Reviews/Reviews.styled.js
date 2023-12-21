import styled from 'styled-components'; 

export const List = styled.ul`
    margin: 0;
    list-style: none;
    gap: 20px;
    background-color: rgb(19, 20, 21);
    padding-top: 20px;
    padding-bottom: 20px;
`

export const ListItem = styled.li`
    padding: 15px;
    width:1200px;
    border: 2px solid lightblue;
    border-radius: 8px;
    transition: border 250ms linear;
    &:not(:last-child) {
        margin-bottom: 15px;
    }
    &:hover,
    &:focus {
        border: 2px solid darkblue;
    }
`

export const Title = styled.h2`
    margin: 0;
    margin-bottom: 10px;
    font-weight: bold;
    color: #fff;
`;

export const Text = styled.p`
    margin: 0;
    line-height: 1.2;
    font-size: 20px;
    color: #fff;
`