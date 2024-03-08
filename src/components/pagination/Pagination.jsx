import { Button } from '../../App.styles'
import * as S from './Pagination.styles'

export const Pagination = ({
  onNextPageClick,
  onPrevPageClick,
  nav = null,
  disable,
}) => {
  const handleNextPageClick = () => {
    onNextPageClick()
  }
  const handlePrevPageClick = () => {
    onPrevPageClick()
  }

  return (
    <S.PaginationContainer>
      <Button
        type="button"
        onClick={handlePrevPageClick}
        disabled={disable.left}
      >
        {'<'}
      </Button>
      {nav && (
        <S.PageNumber>
          {nav.current} / {nav.total}
        </S.PageNumber>
      )}
      <Button
        type="button"
        onClick={handleNextPageClick}
        disabled={disable.right}
      >
        {'>'}
      </Button>
    </S.PaginationContainer>
  )
}
