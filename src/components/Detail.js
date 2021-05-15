import { useState, useEffect } from 'react';
import styled from 'styled-components';
import rawMovieData from '../utils/data.json';
import { useParams } from 'react-router-dom';

export default function Detail() {
    const [movie, setMovie] = useState();
    const { movie: movieId } = useParams();


    useEffect(() => {
        setMovie(rawMovieData.movies[movieId])
    }, [movie])

    return (
        <Container>
            <Background>
                <img src={movie?.backgroundImg} alt={movie?.title} />
            </Background>
            <ImageTitle>
                <img src={movie?.titleImg} alt={movie?.title} />
            </ImageTitle>
            <Content>
                <Controls>
                    <PlayBtn>
                        <img src="/images/play-icon-black.png" alt="play" />
                        <span>PLAY</span>
                    </PlayBtn>
                    <TrailerBtn>
                        <img src="/images/play-icon-white.png" alt="trailer" />
                        <span>TRAILER</span>
                    </TrailerBtn>
                    <AddBtn>
                        <span>+</span>
                    </AddBtn>
                    <GroupWatchBtn>
                        <img src="/images/group-icon.png" alt="watch together" />
                    </GroupWatchBtn>
                </Controls>
                <SubTitle>{movie?.subTitle}</SubTitle>
                <Description>{movie?.description}</Description>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Content = styled.div`
    max-width: 874px;
`

const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    margin-bottom: 30px;    

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayBtn = styled.button`
    cursor: pointer;
    border-radius: 4px;
    padding: 0px 24px;
    margin-right: 22px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgb(249, 249, 249);
    border: none;
    outline: none;
    letter-spacing: 1.8px;

    &:hover {
        background: rgb(198, 198, 198);
    }
`;
const TrailerBtn = styled(PlayBtn)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`;

const AddBtn = styled.button`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background: rgba(0, 0, 0, 0.3);
    cursor: pointer;

    span {
        font-size: 30px;
        color: white;
    }
`;

const GroupWatchBtn = styled(AddBtn)`
    background: black;
`;

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`;

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;
`;

