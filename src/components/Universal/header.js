import React from 'react';
import styled from 'styled-components';
import WLogo from '../../assets/logos/w-logo.png';

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-content:center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #363C74;
    //font stuff
    font-family: sans-serif;
    font-weight:600;
    font-size: 18px;
    color:#FFFFFF;

`

const Logo = styled.img`
    height: 34.45px;
`

const Header = (props) => {
    return (
    <Content>
        <p>Let's go dawgs!</p>
        <Logo src={WLogo}></Logo>
    </Content>)
}

export default Header;