import { useState } from 'react'
import * as S from './Filters.styles'
import { PopupName } from './PopupName'
import { PopupPrice } from './PopupPrice'
import { PopupBrand } from './PopupBrand'

export const Filters = ({ setFilter }) => {
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
        <PopupName />

        // data={data}
        // authorTrack={authorTrack}
        // setAuthorTrack={setAuthorTrack}
      )}

      <S.FilterButton
        aria-hidden="true"
        key="price"
        $activeButton={activeFilter === 'price'}
        onClick={() => handleActiveFilter('price')}
      >
        цене
      </S.FilterButton>
      {activeFilter === 'price' && <PopupPrice />}

      <S.FilterButton
        aria-hidden="true"
        key="brand"
        $activeButton={activeFilter === 'brand'}
        onClick={() => handleActiveFilter('brand')}
      >
        бренду
      </S.FilterButton>
      {activeFilter === 'brand' && <PopupBrand />}
    </S.FilterContainer>
  )
}
