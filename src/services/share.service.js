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

// function getFeatures() {
//   return [
//     { id: 101, txt: 'Grammar & spelling' },
//     { id: 102, txt: 'Review & edit' },
//     { id: 103, txt: 'Off-page strategy' },
//     { id: 104, txt: 'Episode summary' },
//   ]
// }

async function query() {
  try {
    let shares = await httpService.get('all_share_details')
    return shares
  } catch (err) {
    throw err
  }
}

async function get(shareId) {
  // return httpService.get(share_details)
  const share = await axios({
    url: `//localhost:8000/share_details`,
    method: 'GET',
    data: null,
    params: { share_id: shareId }
  })
  console.log('share:', share)
  return share.data
}

// function getSharesByUser(userId) {
//   return httpService.get(`${BASE_URL}` + userId.toString())
// }

// function save(share) {
//   if (share._id) {
//     return httpService.put(BASE_URL + share._id, share)
//   } else {
//     return httpService.post(BASE_URL, share)
//   }
// }

// function remove(shareId) {
//   return httpService.delete(BASE_URL + shareId)
// }

// function getEmptyShare() {
//   return {
//     title: "",
//     description: "",
//     price: 0,
//     daysToMake: "",
//     tags: [],
//     owner: {
//       imgUrl: 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg',
//     },
//     likedByUsers: []
//   }
// }