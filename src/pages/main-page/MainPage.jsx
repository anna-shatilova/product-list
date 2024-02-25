import { useEffect, useState } from 'react'
import uniqBy from 'lodash/uniqBy'
import { getProducts } from '../../api/apiProduct'
import { Filters } from '../../components/filters/Filters'
import { Products } from '../../components/products/Products'
import * as S from './MainPage.styles'
import { Loader } from '../../App.styles'
import { Pagination } from '../../components/pagination/Pagination'

export const MainPage = () => {
  const [productList, setProductList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getDataProducts = async () => {
    await getProducts()
      //
      .then((response) => {
        const dataProductList = uniqBy(response.data.result, 'id')
        setProductList(dataProductList)
      })
      .catch((er) => {
        console.log(
          `API вернуло ошибку. Идентификатор ошибки ${er.response.status}`,
        )
      })
    .finally(() => setIsLoading(false))
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
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Products productList={productList} />
          <Pagination />
        </>
      )}
    </>
  )
}
