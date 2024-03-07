import * as S from './Filters.styles'

export const Popup = ({ data }) => {
  return (
    <S.FilterPopup>
      <S.PopupList>
        {data.map((element) => {
          return (
            <S.PopupText
              key={element}
              // onClick={() => handlerSetField(element)}
              // $activeFilter={artist && authorTrack.includes(artist)}
            >
              {element}
            </S.PopupText>
          )
        })}
      </S.PopupList>
    </S.FilterPopup>
  )
}
