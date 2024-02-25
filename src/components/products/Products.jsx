import * as S from './Products.styles'

export const Products = ({ productList }) => {
  return (
    <S.ProductsList>
      {productList?.map((product) => (
        <S.Product key={product.id}>
          <S.ProductTitle>{product.product}</S.ProductTitle>
          <S.ProductPrice>{product.price}</S.ProductPrice>
          <S.ProductBrand>{product.brand}</S.ProductBrand>
          <S.ProductId>{product.id}</S.ProductId>
        </S.Product>
      ))}
    </S.ProductsList>
  )
}
