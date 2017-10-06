import styled from 'styled-components';
import { halisFont } from './constants';

const Button = styled.button`
  font-family: ${halisFont};
  background: ${props => props.primary ? 'black' : 'white'};
  color: ${props => props.primary ? 'white' : 'black'};
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: #000;
  margin: 10px auto;
  font-size: 16px;
  display: block;
`;

export default Button;
