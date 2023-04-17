import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';

export const NavbarStyled = styled(Navbar)` 
/* background: linear-gradient(180deg, #d1f1d1 0%, #ffffff 100%) */
background: ${({ theme }) => theme.background_gradient};
`
export const NavStyled = styled(Nav)`
    & a {
        color: ${({ theme }) => theme.text}
    };
`