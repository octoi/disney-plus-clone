import React from 'react';
import styled from 'styled-components';
import { selectUserName, selectUserPhoto } from '../features/user/userSlice';
import { useSelector } from 'react-redux';

export default function Header() {

    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            {userName ? (
                <>
                    <NavMenu>
                        <NavItem image="/images/home-icon.svg" title="HOME" />
                        <NavItem image="/images/search-icon.svg" title="SEARCH" />
                        <NavItem image="/images/watchlist-icon.svg" title="WATCHLIST" />
                        <NavItem image="/images/original-icon.svg" title="ORIGINALS" />
                        <NavItem image="/images/movie-icon.svg" title="MOVIES" />
                        <NavItem image="/images/series-icon.svg" title="SERIES" />
                    </NavMenu>
                    <UserImg src="https://avatars.githubusercontent.com/u/82007161?s=200&v=4" />
                </>
            ) : (
                <Login>Login</Login>
            )}

        </Nav>
    )
}

const NavItem = ({ title, image }) => (
    <a href="https://youtu.be/dQw4w9WgXcQ" style={{ color: "rgb(249, 249, 249)", textDecoration: "none" }}>
        <img src={image} alt={title} />
        <span>{title}</span>
    </a>
);

const Nav = styled.nav`
    height: 70px;
    background-color: #090B13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
    justify-content: space-between;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    @media (max-width: 850px){
        display: none;
    }

    a { 
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover{
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`

const Login = styled.div`
    cursor: pointer;
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgb(0, 0, 0, 0.6);
    transition: all 0.2s ease 0s;

    &:hover {
        background-color: #f9f9f9;
        color: black;
        border-color: transparent;
    }
`