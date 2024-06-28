import React from "react";
import styled, { css } from "styled-components";

const Circle = styled.div`
    width: 5rem;
    height: 5rem;
    background: ${props => props.color||'black'};
    border-radius: 50%;
    border-color: pink;
    border-width: 5px;
    border-style: solid;
    margin: 0 auto;
    margin-top: 2rem;
    align-items: center;
    ${props =>
        props.huge &&
        css`
            width: 10rem;
            height: 10rem;
        `
    }
`;

export default Circle;