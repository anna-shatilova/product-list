import axios from 'axios'
import { PASSWORD, BASE_URL, PER_PAGE } from '../utils/constants'
import md5 from 'blueimp-md5'
import { dateNow } from '../utils/formatDate'

export async function getProducts() {
  const token = md5(`${PASSWORD}_${dateNow}`)

  const response = await axios.post(
    BASE_URL,
    {
      action: 'get_ids',
      params: {
        offset: 1,
        limit: PER_PAGE,
      },
    },
    {
      headers: {
        'X-Auth': token,
      },
    },
  )

  return response
}
