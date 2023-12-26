// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  font-family: 'Roboto';
`
export const MainHeading = styled.h1`
  font-family: 'Roboto';
  color: #1e293b;
  font-size: 25px;
`

export const Paragraph = styled.p`
  color: #334155;
  font-size: 15px;
`
export const Image = styled.img`
  width: 300px;
  height: 200px;
`

export const Description = styled.p`
  align-self: center;
  color: #334155;
  font-size: 15px;
  width: 300px;
`

export const Button = styled.button`
  background-color: #1f81ff;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
`
