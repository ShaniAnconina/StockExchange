import axios from 'axios'
import { httpService } from './http.service'

const BASE_URL = 'share/'

export const shareService = {
  query,
  get,
  // save,
  // remove,
  // getDefaultFilter,
  // getEmptyShare,
  // addToWishlist,
  // getFeatures,
  // getSharesByUser
}


async function query() {
  try {
    let shares = await httpService.get('all_share_details')
    // let shares = await axios({
    //   url: `//localhost:8000/all_share_details`,
    //   method: 'GET',
    //   data: null,
    //   params: {}
    // })
    return shares
  } catch (err) {
    throw err
  }
}

async function get(shareId) {
  const share = await axios({
    url: `//localhost:8000/share_details`,
    method: 'GET',
    data: null,
    params: { share_id: shareId }
  })
  console.log('share:', share)
  return share.data
}
