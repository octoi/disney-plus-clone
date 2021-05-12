import React from 'react'
import styled from 'styled-components';

export default function Header() {
    return (
        <Nav>
            <Logo src="" />
            <NavMenu>

            </NavMenu>
        </Nav>
    )
}

const Nav = styled.nav`
    height: 70px;
    background-color: #090B13;
`
const Logo = styled.img`
    width: 80px;
`
const NavMenu = styled.div`
    
`