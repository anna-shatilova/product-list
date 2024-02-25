import { useEffect } from 'react'
import { getProducts } from '../../api/apiProduct'
import { Filters } from '../../components/filters/Filters'
import { Products } from '../../components/products/Products'
// import { Pagination } from '../../components/pagination/Pagination'
import * as S from './MainPage.styles'

export const MainPage = () => {
  // const [error, setError] = useState(null)
  // const [isLoading, setIsLoading] = useState(true)
  // const [pageNumber, setPageNumber] = useState(0)
  // const [action, setAction] = useState('')

  const getDataProducts = async () => {
    await getProducts()
      .then((response) => {
        console.log(response.result)
      })
      .catch((er) => {
        console.log(er.response.status)
      })
  }

  useEffect(() => {
    getDataProducts()
  }, [])

  return (
    <>
      <S.MainTitle>Список товаров</S.MainTitle>
      <Filters />
      <S.MainContent>
        <S.ProductListTitle01>Название</S.ProductListTitle01>
        <S.ProductListTitle02>Цена</S.ProductListTitle02>
        <S.ProductListTitle03>Бренд</S.ProductListTitle03>
        <S.ProductListTitle04>ID</S.ProductListTitle04>
      </S.MainContent>
      <Products />
      {/* <Pagination /> */}
    </>
  )
}
