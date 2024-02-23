import * as S from './Filters.styles'

export const Filters = () => {
  return (
    <S.FilterContainer>
      <S.FilterTitle>Фильтровать по:</S.FilterTitle>
      <S.FilterButton aria-hidden="true">названию</S.FilterButton>
      <S.FilterButton aria-hidden="true">цене</S.FilterButton>
      <S.FilterButton aria-hidden="true">бренду</S.FilterButton>
    </S.FilterContainer>
  )
}
