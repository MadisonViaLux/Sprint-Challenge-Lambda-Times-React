import styled, { css } from "styled-components";


export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
`;

export const SpanStyleDate = styled.span`
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;

    margin-left: 25px;
    flex: 1;
`;


export const SpanStyleTemp = styled.span`
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;

    text-align: right;
    margin-right: 25px;
    flex: 1;
`;


export const H1Header = styled.h1`
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
`;


















export const TopBarStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    position: fixed;
    height: 44px;
    background-color: #333;
`;


export const ContainerStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;
`;


export const ContainLeftStyled = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
`;


export const ContainLeftSpanStyled = styled.span`
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
`;


export const ContainCenterStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;
    &:hover{
        text-decoration: underline;
    }
`;


export const ContainCenterSpanStyled = styled.span`
    cursor: pointer;
    margin-right: 5%;
`;


export const ContainCenterSpanStyledLast = styled.span`
    margin-right: 0;
`;


export const ContainRightStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    font-weight: bold;
`;


export const ContainRightSpanStyled = styled.span`
    cursor: pointer;
`;