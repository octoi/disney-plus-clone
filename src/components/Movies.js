import React from 'react';
import styled from 'styled-components';

export default function Movies() {
    return (
        <Container>
            <h4>Recommended For You</h4>
            <Content>
                <MovieComponent />
                <MovieComponent />
                <MovieComponent />
                <MovieComponent />
            </Content>
        </Container>
    )
}

const MovieComponent = ({ image }) => (
    <Wrap>
        <img src={image ? image : "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg"} />
    </Wrap>
);

const Container = styled.div``

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        transform: scale(1.05);
        border: 3px solid rgba(249, 249, 249, 0.8);
        cursor: pointer;
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }
`