import styled from 'styled-components';     

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: 20px;
    margin: 0;
    padding: 20px 0;
    background-color: rgb(19, 20, 21);
    list-style: none;
`;

export const ListItem = styled.li`
    width: 178px;
    padding: 5px;
    text-align: center;
    background-color: #ffd800;
    border-radius: 4px;
`;

export const ListImg = styled.img`
    width: 170px;
    height: 255px;
    object-fit: cover;
    margin-left: auto;
    margin-right: auto;
    border-radius: 4px;
    margin-bottom: 10px;
`;

export const Title = styled.h2`
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    margin-bottom: 10px;
`;

export const Text = styled.p`
    font-size: 16px;
    margin: 0;
    margin-bottom: 10px;
`