import styled from 'styled-components';

const Footer = styled.div `
    width: 100%;
    height: 117px;
    position: fixed;
    bottom: 0;

    display: flex;
    align-items: center;

    background: #DFE6ED;
    border-top: 1px solid #9EADBA;

    .bloco-filme{
        width: 64px;
        height: 89px;
        margin: 0px 10px;

        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
    }
    img{
        width: 48px;
        height: 72px;
    }

    .footer-text {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 26px;
        line-height: 30px;
        display: flex;
        align-items: center;

        color: #293845;
    }
`;

export default Footer;