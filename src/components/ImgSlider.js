import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }

    return (
        <Carousel {...settings}>
            <CarouselItem image="/images/slider-badging.jpg" />
            <CarouselItem image="/images/slider-badag.jpg" />
            <CarouselItem image="/images/slider-scale.jpg" />
            <CarouselItem image="/images/slider-scales.jpg" />
        </Carousel>
    )
}


const CarouselItem = ({ image }) => (
    <Wrap>
        <img src={image} />
    </Wrap>
);

const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button {
        &:before{
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }
`

const Wrap = styled.div`
    cursor: grab;
    img {
        border: 2px solid transparent;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover {
            border: 3px solid rgba(249, 249, 349, 0.8);
        }
    }
`
