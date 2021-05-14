import React from 'react';
import styled from 'styled-components';

export default function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
            </CTA>
        </Container>
    )
}

const Container = styled.div`
    height: calc(100vh - 70px);
    /* padding: 0 calc(3.5vw + 5px); */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
        position: absolute;
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        content: "";
        background-image: url("/images/login-background.jpg");
        z-index: -1;
    }
`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 70%;
`;

const CTALogoOne = styled.img``;