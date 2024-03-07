import { useState } from 'react'
import * as S from './Filters.styles'
import { Popup } from './Popup'

export const Filters = ({ fieldPopup, setFilter }) => {
  const [activeFilter, setActiveFilter] = useState()

  const handleActiveFilter = (filter) => {
    setActiveFilter(filter)
    setFilter(filter)
  }

  return (
    <S.FilterContainer>
      <S.FilterTitle>Фильтровать по:</S.FilterTitle>
      <S.FilterButton
        aria-hidden="true"
        key="product"
        $activeButton={activeFilter === 'product'}
        onClick={() => handleActiveFilter('product')}
      >
        названию
      </S.FilterButton>
      {activeFilter === 'product' && (
        <Popup data={fieldPopup} />
      )}

      <S.FilterButton
        aria-hidden="true"
        key="price"
        $activeButton={activeFilter === 'price'}
        onClick={() => handleActiveFilter('price')}
      >
        цене
      </S.FilterButton>
      {activeFilter === 'price' && <Popup data={fieldPopup} />}

      <S.FilterButton
        aria-hidden="true"
        key="brand"
        $activeButton={activeFilter === 'brand'}
        onClick={() => handleActiveFilter('brand')}
      >
        бренду
      </S.FilterButton>
      {activeFilter === 'brand' && <Popup data={fieldPopup} />}
    </S.FilterContainer>
  )
}
