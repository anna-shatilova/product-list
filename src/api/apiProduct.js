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

export async function getProducts() {
  const responseIdList = await axios.post(
    BASE_URL,
    {
      action: 'get_ids',
      params: {
        offset: 1,
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

