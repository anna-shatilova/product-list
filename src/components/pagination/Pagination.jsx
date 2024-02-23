import { Button } from '../../App.styles'
import * as S from './Pagination.styles'

export const Pagination = () => {
  return (
    <S.PaginationContainer>
      <Button type="button">{'<'}</Button>
      <S.PageNumber>1/ 10</S.PageNumber>
      <Button type="button">{'>'}</Button>
    </S.PaginationContainer>
  )
}
