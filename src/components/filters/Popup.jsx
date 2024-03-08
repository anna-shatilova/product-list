import * as S from './Filters.styles'

export const Popup = ({ data, setValueField, setActiveFilter }) => {
  const handleActiveFilter = (element) => {
    setValueField(element)
    setActiveFilter(null)
  }
  return (
    <S.FilterPopup>
      <S.PopupList>
        {data.map((element) => {
          return (
            <S.PopupText
              key={element}
              onClick={() => handleActiveFilter(element)}
            >
              {element}
            </S.PopupText>
          )
        })}
      </S.PopupList>
    </S.FilterPopup>
  )
}
