import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 14px;
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 15px;
  margin-top: 25px;
  background-color: ${props => props.color || '#2563eb'};
  
  &:hover {
    background-color: ${props => props.hoverColor || '#1e40af'};
  }
`;

const Button = (props) => {
  return (
    <StyledButton
      color={props.color}
      hoverColor={props.hoverColor}
      onClick={props.onClick}
    >
      {props.label}
    </StyledButton>
  );
};

export default Button;