import React from 'react';
import styled from 'styled-components';
import WLogo from '../../assets/logos/w-logo.png';

const Content = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffd1dc;
    width: 100%;
    height: 100%;

`
// purple: #363C74
// gold: #E8D3A2


const Home = (props) => {
    return(
        <Content>
            <img src={WLogo} alt='logo'/>
        </Content>
    )
}

export default Home;