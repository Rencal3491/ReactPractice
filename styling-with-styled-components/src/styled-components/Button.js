import React from "react";
import styled, { css } from "styled-components";
import {lighten, darken} from "polished";


const colorStyle = css`
  ${({theme, color}) => {
    // props.color는 StyledButton 컴포넌트에서 전달한 props.color값
    const selected = theme.palette[color]; 
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}
`;

const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem'
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem'
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem'
  }
}

const sizeStyles = css`
  ${({size}) => 
    css`
      height: ${sizes[size].height};
      font-size: ${sizes[size].fontSize};
    `}
`;

const outlineStyle = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      color: ${selected};
      background: none;
      border: 1px solid ${selected};
      &:hover {
        background: ${selected};
        color: white;
      }
    `;
  }}
`;

const fullHeightStyle = css`
  ${props =>
    props.fullHeight &&
    css`
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      
    `}
`;

const fullWidthStyle = css`
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      &:not(:first-child) {
        margin-left: 0;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        
      }
    `}
`;


const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  margin top: 0.5rem;

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${colorStyle}
  ${({ outline }) => !outline && colorStyle}
  ${({ outline }) => outline && outlineStyle}

  /* fullHeight */
  ${fullHeightStyle}

  /* fullWidth */
  ${fullWidthStyle}
  /* 기타 */
  &:not(:first-child) {
    margin-left: 1rem;

  }
`

function Button({children, color, size, outline,fullHeight,fullWidth, ...rest}){
  return <StyledButton 
            color={color} 
            size={size} 
            outline = {outline} 
            fullHeight = {fullHeight}
            fullWidth = {fullWidth}
            {...rest}>
                {children}</StyledButton>;
}

Button.defaultProps = {
  color: 'blue',
  size: 'medium'
};

export default Button;