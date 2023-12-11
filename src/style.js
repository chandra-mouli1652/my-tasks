import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`

export const TaskInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 35vw;
`
export const TaskDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 65vw;
`
export const Heading = styled.h1`
  font-size: 36px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`

export const LabelText = styled.label`
  font-size: 22px;
`

export const Input = styled.input`
  height: 22px;
  width: 94%;
`
export const Select = styled.select`
  height: 45px;
  width: 100%;
`
export const AddButton = styled.button`
  height: 45px;
  width: 150px;
`

export const TagsHeading = styled.h1`
  font-size: 22px;
`

export const NoTaskText = styled.p`
  font-size: 25px;
`

export const TagsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  width: 90%;
`

export const TagsButton = styled.button`
  font-size: 18px;
`

export const TagListItem = styled.li`
  list-style-type: type none;
`
export const TasksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 90%;
`
