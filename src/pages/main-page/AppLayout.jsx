import { Outlet } from 'react-router-dom'
import {
  Container,
  GlobalStyles,
  Header,
  MainContainer,
} from '../../App.styles'

export const AppLayout = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <MainContainer>
          <Outlet />
        </MainContainer>
      </Container>
    </>
  )
}
