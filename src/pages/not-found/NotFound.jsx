import { Link } from 'react-router-dom'
import { Button } from '../../App.styles'
import * as S from './NotFound.styles'

export const NotFound = () => {
  return (
    <S.NotFoundContent>
      <S.Img src={'/not-found.png'}></S.Img>
      <S.Title>404</S.Title>
      <S.TitleText>Страница не найдена</S.TitleText>
      <S.Text>
        Возможно, она была удалена <br /> или перенесена на другой адрес
      </S.Text>

      <Link to={`/`}>
        <Button>Вернуться на главную</Button>
      </Link>
    </S.NotFoundContent>
  )
}
