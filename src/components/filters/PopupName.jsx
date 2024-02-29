import * as S from './Filters.styles'

export const PopupName = () =>
  // { data, authorTrack, setAuthorTrack }
  {
    //   const handlerSetAuthors = (author) => {
    //     const index = authorTrack.indexOf(author)
    //     if (index !== -1) {
    //       setAuthorTrack(authorTrack.toSpliced(index, 1))
    //     } else {
    //       setAuthorTrack([...authorTrack, author])
    //     }
    //   }

    //   // Функция для фильтрации повторяющихся авторов и сортировки их по алфавиту
    //   const uniq = (value, index, array) => array.indexOf(value) === index

    //   const artists = data
    //     .map(({ author }) => author ?? 'Неизвестный исполнитель')
    //     .filter((i) => i)
    //     .filter(uniq)
    //     .sort()

    return (
      <S.FilterPopup >
        <S.PopupList>
          {/* {artists.map((artist) => { */}
          {/* return ( */}
          <S.PopupText
          // key={artist}
          // onClick={() => handlerSetAuthors(artist)}
          // $activeFilter={artist && authorTrack.includes(artist)}
          >
            {/* {artist} */}
          </S.PopupText>
          {/* )
        })} */}
        </S.PopupList>
      </S.FilterPopup>
    )
  }
