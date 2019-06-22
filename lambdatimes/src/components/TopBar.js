import React from 'react';
import { TopBarStyled, ContainerStyled, ContainLeftStyled, 
  ContainLeftSpanStyled, ContainCenterStyled, 
  ContainCenterSpanStyled, ContainCenterSpanStyledLast, 
  ContainRightStyled, ContainRightSpanStyled } from '../CSS/StyledComponents'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarStyled>
      <ContainerStyled>

        <ContainLeftStyled>
          <ContainLeftSpanStyled>TOPICS</ContainLeftSpanStyled><ContainLeftSpanStyled>SEARCH</ContainLeftSpanStyled>
        </ContainLeftStyled>

        <ContainCenterStyled>
          <ContainCenterSpanStyled>GENERAL</ContainCenterSpanStyled>
          <ContainCenterSpanStyled>BROWNBAG</ContainCenterSpanStyled>
          <ContainCenterSpanStyled>RANDOM</ContainCenterSpanStyled>
          <ContainCenterSpanStyled>MUSIC</ContainCenterSpanStyled>
          <ContainCenterSpanStyledLast>ANNOUNCEMENTS</ContainCenterSpanStyledLast>
        </ContainCenterStyled>

        <ContainRightStyled>
          <ContainRightSpanStyled>LOG IN</ContainRightSpanStyled>
        </ContainRightStyled>

      </ContainerStyled>
    </TopBarStyled>
  )
}

export default TopBar;