
import { List, NavLinks, PinnedHeader } from "./Header.styled"

export const Header = () => {
    return (
    <PinnedHeader>
        <List>
            <li>
                <NavLinks to='/'>
                    Home
                </NavLinks>
            </li>
            <li>
                <NavLinks to='/movies'>
                    Movies
                </NavLinks>
            </li>
        </List>
    </PinnedHeader>)
}