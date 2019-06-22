import React from 'react';
import { HeaderStyle, SpanStyleDate, SpanStyleTemp, H1Header } from '../CSS/StyledComponents'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {

  return (
    <HeaderStyle>
      <SpanStyleDate>SMARCH 32, 2018</SpanStyleDate>
      <H1Header>Lambda Times</H1Header>
      <SpanStyleTemp>98°</SpanStyleTemp>
    </HeaderStyle>
  )
}

export default Header