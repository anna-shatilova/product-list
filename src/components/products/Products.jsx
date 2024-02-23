import * as S from './Products.styles'

export const Products = () => {
  const productsData = [
    {
      brand: null,
      id: '1789ecf3-f81c-4f49-ada2-83804dcc74b0',
      price: 16700,
      product: 'Золотое кольцо с бриллиантами',
    },
    {
      brand: null,
      id: '2789ecf3-f81c-4f49-ada2-83804dcc74b0',
      price: 16700.0,
      product: 'Золотое кольцо с бриллиантами',
    },
    {
      brand: null,
      id: '3789ecf3-f81c-4f49-ada2-83804dcc74b0',
      price: 16700.0,
      product: 'Золотое кольцо с бриллиантами',
    },
    {
      brand: 'Silver',
      id: '4789ecf3-f81c-4f49-ada2-83804dcc74b0',
      price: 16700.0,
      product: 'Золотое кольцо с бриллиантами',
    },
    {
      brand: 'Socolov',
      id: '5789ecf3-f81c-4f49-ada2-83804dcc74b0',
      price: 16700.0,
      product: 'Золотое кольцо с бриллиантами',
    },
    {
      brand: 'Sunlight',
      id: '6789ecf3-f81c-4f49-ada2-83804dcc74b0',
      price: 16700.0,
      product: 'Золотое кольцо с бриллиантами',
    },
  ]

  return (
    <S.ProductsList>
      {productsData.map((product) => (
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
