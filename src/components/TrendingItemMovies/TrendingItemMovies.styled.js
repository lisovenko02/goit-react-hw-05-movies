import styled from 'styled-components';

export const ListItem = styled.li`
    border-radius: 4px;
    background: #131415;
    padding: 2px;
    border: 4px solid black;
    width: 200px;
    height: 370px;
    text-align: center;
    color: darkblue;
    transition: transform 250ms linear;
    &:hover,
    &:focus {
        transform: scale(1.03);
    }
    `;

export const ListImg = styled.img`
    margin-left: auto;
    margin-right: auto;
    border-radius: 4px;
    margin-bottom: 10px;
    height: 294px;
    object-fit: cover;
    `

export const ListTitle = styled.p`
    font-size: 14px;
    text-transform: uppercase;
    color:#9f9f9f;
    margin-top: 0;
    margin-bottom: 5px;
`