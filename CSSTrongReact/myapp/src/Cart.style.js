import styled from 'styled-components'
import { Buttons } from './Cart'

export const Container = styled.div`
  max-width: 1500px;
  margin: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`

export const ContainerExtends = styled(Container)`
  max-width: 1800px;
`

//do thuộc tính hosting nên khi build function sẽ được đẩy lên trên cùng vì vậy có thể khai báo Buttons ngay trưỡc
export const StyledButtons = styled(Buttons)`
  display: flex;
  justify-content: center;
  background-color: ${(props) => (props.blue ? 'blue' : 'red')};
`
