import { useCallback, useEffect, useState } from 'react'
import uniqBy from 'lodash/uniqBy'
import { getProducts } from '../../api/apiProduct'
import { Filters } from '../../components/filters/Filters'
import { Products } from '../../components/products/Products'
import * as S from './MainPage.styles'
import { Loader, Error } from '../../App.styles'
import { Pagination } from '../../components/pagination/Pagination'

export const MainPage = () => {
  
  const [productList, setProductList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [pagesCount, setPagesCount] = useState(0)

  const getDataProducts = async () => {
    await getProducts({ pageNumber, setPagesCount })
      .then((response) => {
        const dataProductList = uniqBy(response.data.result, 'id')
        setProductList(dataProductList)
      })
      .catch((er) => {
        if (er.response.status === 500) {
          setError('Сервис не доступен, попробуйте позже')
        }
        console.log(
          `API вернуло ошибку. Идентификатор ошибки ${er.response.status}`,
        )
      })
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    getDataProducts()
  }, [pageNumber])

  const handleNextPageClick = useCallback(() => {
    const current = pageNumber
    const next = current + 1
    const total = productList ? pagesCount : current

    setIsLoading(true)
    setPageNumber(next <= total ? next : current)
  }, [pageNumber, productList])

  const handlePrevPageClick = useCallback(() => {
    const current = pageNumber
    const prev = current - 1

    setIsLoading(true)
    setPageNumber(prev > 0 ? prev : current)
  }, [pageNumber])

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
      ) : error ? (
        <Error>{error}</Error>
      ) : (
        <>
          <Products productList={productList} />
          <Pagination
            onNextPageClick={handleNextPageClick}
            onPrevPageClick={handlePrevPageClick}
            disable={{
              left: pageNumber === 1,
              right: pageNumber === pagesCount,
            }}
            nav={{ current: pageNumber, total: pagesCount }}
          />
        </>
      )}
    </>
  )
}
