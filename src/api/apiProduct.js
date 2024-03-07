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
  // valueField,
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
  if (filter) {
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
  // if (filter && valueField) {
  //   const response = await axios.post(
  //     BASE_URL,
  //     {
  //       action: 'filter',
  //       params: {
  //         filter: valueField,
  //       },
  //     },
  //     authHeder,
  //   )
  //   return response
  // }

  // console.log(`first ${responseFields}`)
  // console.log(`second ${responseCurrentField}`)
  // const response = await axios.post(
  //   BASE_URL,
  //   {
  //     action: 'get_items',
  //     params: {
  //       ids: responseCurrentField.data.result,
  //     },
  //   },
  //   authHeder,
  // )
}

// export async function getProductsFilter() {
//   const [firstResponse, secondResponse] = await Promise.all([
//     axios.get('https://maps.googleapis.com/maps/api/geocode/json?&address=${this.props.p1}'),
//     axios.get('https://maps.googleapis.com/maps/api/geocode/json?&address=${this.props.p2}')
//   ]);

//   // Make third request using responses from the first two
//   const thirdResponse = await axios.get('https://maps.googleapis.com/maps/api/directions/json?origin=place_id:' + firstResponse.data.results.place_id + '&destination=place_id:' + secondResponse.data.results.place_id + '&key=' + 'API-KEY-HIDDEN');

// }
