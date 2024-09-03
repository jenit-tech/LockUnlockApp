// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  font-family: Roboto;
  background-image: linear-gradient(#161617, #0b0c1e, #3c2940);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
`

export const LockImage = styled.img`
  width: 120px;
`

export const Paragraph = styled.p`
  font-family: Roboto;
  color: #e2e8f0;
  font-size: 20px;
  margin: 20px 0 100px;
  text-align: center;
`

export const Button = styled.button`
  background-color: #06b6d4;
  color: white;
  font-size: 15px;
  padding: 10px 17px;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  border: none;
`
