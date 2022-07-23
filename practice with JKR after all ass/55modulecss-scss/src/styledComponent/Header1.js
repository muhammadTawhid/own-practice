import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
font-size: 40px;
color: blue;
border: 1px solid gray;
`

const Container = styled.div`
padding: 4em;
background: papayawhip;
`

const Header1 = () => {
    return (
        <Container>
            <Title>This is styled component</Title>
        </Container>
    );
};

export default Header1;