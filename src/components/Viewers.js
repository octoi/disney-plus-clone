import React from 'react';
import styled from 'styled-components';

export default function Viewers() {
    return (
        <Container>
            <ViewerItem image="/images/viewers-disney.png" video="/videos/1564674844-disney.mp4" />
            <ViewerItem image="/images/viewers-pixar.png" video="/videos/1564676714-pixar.mp4" />
            <ViewerItem image="/images/viewers-marvel.png" video="/videos/1564676115-marvel.mp4" />
            <ViewerItem image="/images/viewers-starwars.png" video="/videos/1608229455-star-wars.mp4" />
            <ViewerItem image="/images/viewers-national.png" video="/videos/1564676296-national-geographic.mp4" />
        </Container>
    )
}

const ViewerItem = ({ image, video }) => (
    <Wrap>
        <img src={image} alt={image} />
        <video autoPlay={true} loop={true} playsInline={true}>
            <source src={video} type="video/mp4" />
        </video>
    </Wrap>
);

const Container = styled.div`
    margin-top: 30px;
    padding: 20px 0px 26px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
`

const Wrap = styled.div`
    border-radius: 10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    video {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0;
        opacity: 0;
        z-index: -1;
    }

    &:hover{
        transform: scale(1.05);
        border: 3px solid rgba(249, 249, 249, 0.8);
        cursor: pointer;
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;

        video {
            opacity: 1;
        }
    }
`
