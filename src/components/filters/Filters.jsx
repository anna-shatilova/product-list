import { useState } from 'react'
import * as S from './Filters.styles'
import { Popup } from './Popup'
import { getFields } from '../../api/apiProduct'

export const Filters = ({ setFilter, setValueField }) => {
  const [fieldPopup, setFieldPopup] = useState([])
  const [activeFilter, setActiveFilter] = useState()

  const handleFilter = async (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter)
    setFilter(filter)
    await getFields({ filter })
      .then((response) => {
        let dataFieldPopup
        const uniq = (value, index, array) => array.indexOf(value) === index

        const dataFieldPopupFilter = response.data.result
          .map((field) => field ?? null)
          .filter((i) => i)
          .filter(uniq)

        if (filter === 'price') {
          dataFieldPopup = dataFieldPopupFilter.sort(
            (a, b) => Date.parse(a) - Date.parse(b),
          )
        } else {
          dataFieldPopup = dataFieldPopupFilter.sort()
        }

        setFieldPopup(dataFieldPopup)
      })
      .catch((er) => {
        console.log(er)
      })
  }

  return (
    <S.FilterContainer>
      <S.FilterTitle>Фильтровать по:</S.FilterTitle>
      <S.FilterButton
        aria-hidden="true"
        key="product"
        $activeButton={activeFilter === 'product'}
        onClick={() => handleFilter('product')}
      >
        названию
      </S.FilterButton>

      <S.FilterButton
        aria-hidden="true"
        key="price"
        $activeButton={activeFilter === 'price'}
        onClick={() => handleFilter('price')}
      >
        цене
      </S.FilterButton>

      <S.FilterButton
        aria-hidden="true"
        key="brand"
        $activeButton={activeFilter === 'brand'}
        onClick={() => handleFilter('brand')}
      >
        бренду
      </S.FilterButton>

      {activeFilter && (
        <Popup
          data={fieldPopup}
          setValueField={setValueField}
          setActiveFilter={setActiveFilter}
        />
      )}
    </S.FilterContainer>
  )
}
