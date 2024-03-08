import axios from 'axios'
import { PASSWORD, BASE_URL, PER_PAGE } from '../utils/constants'
import md5 from 'blueimp-md5'
import { dateNow } from '../utils/formatDate'

const token = md5(`${PASSWORD}_${dateNow}`)
const authHeder = {
  headers: {
    'X-Auth': token,
  },
}

export async function getProducts({
  pageNumber,
  setPagesCount,
  filter,
  valueField,
}) {
  if (!filter) {
    const responseId = await axios.post(
      BASE_URL,
      {
        action: 'get_ids',
      },
      authHeder,
    )

    setPagesCount(Math.ceil(responseId.data.result.length / PER_PAGE))

    const responseIdList = await axios.post(
      BASE_URL,
      {
        action: 'get_ids',
        params: {
          offset: pageNumber,
          limit: PER_PAGE,
        },
      },
      authHeder,
    )

    const response = await axios.post(
      BASE_URL,
      {
        action: 'get_items',
        params: {
          ids: responseIdList.data.result,
        },
      },
      authHeder,
    )
    return response
  }

  if (filter === 'product' && valueField) {
    const responseProductList = await axios.post(
      BASE_URL,
      {
        action: 'filter',
        params: {
          product: valueField,
        },
      },
      authHeder,
    )
    setPagesCount(Math.ceil(responseProductList.data.result.length / PER_PAGE))

    const response = await axios.post(
      BASE_URL,
      {        
        action: 'get_items',
        params: {
          ids: responseProductList.data.result,
          offset: pageNumber,
          limit: PER_PAGE,
        },
      },
      authHeder,
    )

    return response
  }

  if (filter === 'price' && valueField) {
    const responsePriceList = await axios.post(
      BASE_URL,
      {
        action: 'filter',
        params: {
          price: valueField,
        },
      },
      authHeder,
    )
    setPagesCount(Math.ceil(responsePriceList.data.result.length / PER_PAGE))

    const response = await axios.post(
      BASE_URL,
      {
        action: 'get_items',
        params: {
          ids: responsePriceList.data.result,
          offset: pageNumber,
          limit: PER_PAGE,
        },
      },
      authHeder,
    )
    return response
  }

  if (filter === 'brand' && valueField) {
    const responseBrandList = await axios.post(
      BASE_URL,
      {
        action: 'filter',
        params: {
          brand: valueField,
        },
      },
      authHeder,
    )
    setPagesCount(Math.ceil(responseBrandList.data.result.length / PER_PAGE))

    const response = await axios.post(
      BASE_URL,
      {
        action: 'get_items',
        params: {
          ids: responseBrandList.data.result,
          offset: pageNumber,
          limit: PER_PAGE,
        },
      },
      authHeder,
    )
    return response
  }
}

export async function getFields({ filter }) {
  const response = await axios.post(
    BASE_URL,
    {
      action: 'get_fields',
      params: {
        field: filter,
      },
    },
    authHeder,
  )
  return response
}
