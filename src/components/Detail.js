import React from 'react';
import styled from 'styled-components';

export default function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B409C2A425D58C32D822EB633C7CAE3DC910DC2FC62D2B1807A0BB092C531E9A/scale?width=1440&aspectRatio=1.78&format=jpeg" />
            </Background>
            <ImageTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2041CE26663867FC4EF20377B8625BD629E619452E23BCDB1AB259DD475C2EA1/scale?width=1440&aspectRatio=1.78" />
            </ImageTitle>
            <Controls>
                <PlayBtn>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayBtn>
                <TrailerBtn>
                    <img src="/images/play-icon-white.png" />
                    <span>TRAILER</span>
                </TrailerBtn>
                <AddBtn>
                    <span>+</span>
                </AddBtn>
                <GroupWatchBtn>
                    <img src="/images/group-icon.png" />
                </GroupWatchBtn>
            </Controls>
            <SubTitle>
                2018 • 1h 58m • Science Fiction, Family, Animation, Action-Adventure
            </SubTitle>
            <Description>
                While Helen is called on to lead a campaign to bring back the Supers, Bob navigates the day-to-day heroics of “normal” life at home with Violet, Dash and Jack-Jack, whose superpowers are about to be discovered. Their mission is derailed, however, when a new villain emerges with a brilliant and dangerous plot that threatens everything. But with Frozone by their side, the Parrs can take on anything.
            </Description>
        </Container>
    )
}

const Container = styled.div`
    height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
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

const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;

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
`;