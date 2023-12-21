import styled from 'styled-components';         


export const Container = styled.div`
    background-color: rgb(19, 20, 21);
    grid-gap: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    border-bottom-style: groove;
`;

export const Image = styled.img`
    width: 300px;
    height: 448px;
    object-fit: cover;
    border: 6px solid #313131;
    border-radius: 4px;
`;

export const MainTitle = styled.h1`
    font-size: 24px;
    margin: 0;
    margin-bottom: 20px;
    color: #fff;
`;

export const Text = styled.p`
    margin: 0;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
`;

export const Title = styled.h2`
    display: block;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 20px;
    font-size: 26px;
    font-weight: 400;
    line-height: 1.3;
    color: #fff;
`;

export const ListGenres = styled.ul`
  display: block;
  grid-gap: 20px;
  flex-wrap: wrap;
  margin: 0;
  padding-left: 20px;
`;

export const ItemGenres = styled.li`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
`;