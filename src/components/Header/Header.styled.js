import styled from 'styled-components';
import {  NavLink } from "react-router-dom"


export const PinnedHeader = styled.header`
    display: flex;
    align-items: center;
    margin: 0;
    background-color: #313131;
    border-bottom: 2px solid grey;
    justify-content: end;

    > nav {
        display: flex;
  }
`
export const List = styled.ul`
    display: flex;
    list-style: none;
    gap:20px;
    

`

export const NavLinks = styled(NavLink)`
    padding: 4px 16px;
    border-radius: 4px;
    text-decoration: none;
    color: #777;
    font-weight: 500;

    /* &.active {
        color: darkblue;
        background-color: yellow;
        border: 2px solid darkblue;
  } */
`