import styled from 'styled-components'

export const BoldButton = styled.button`
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
  border: none;
  color: ${props => (props.bold ? '#faff00' : '#f1f5f9')};
`

export const ItalicButton = styled.button`
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
  border: none;
  color: ${props => (props.italic ? '#faff00' : '#f1f5f9')};
`

export const UnderlineButton = styled.button`
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
  border: none;
  color: ${props => (props.underline ? '#faff00' : '#f1f5f9')};
`

export const ParagraphText = styled.textarea`
  background-color: transparent;
  width: 100%;
  height: 80%;
  color: #f1f5f9;
  border: none;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
`
