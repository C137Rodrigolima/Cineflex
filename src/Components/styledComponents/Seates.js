import styled from 'styled-components';

const Seates = styled.div`
width: 26px;
height: 25px;

font-style: normal;
font-weight: normal;
font-size: 11px;
line-height: 13px;
text-align: center;
letter-spacing: 0.04em;

display: flex;
align-items: center;
justify-content: center;

border: 1px solid ${props => props.isAvailable === "selected"? "#1AAE9E" : props.isAvailable? "#808F9D" :  "#F7C52B"};
border-radius: 12px;

background-color: ${props => props.isAvailable === "selected"? "#8DD7CF" : props.isAvailable? "#C3CFD9":  "#FBE192"};
`;
export default Seates;