import { httpService } from "./http.service"

const BASE_URL = 'trader/'

export const traderService = {
  query,
  get,
  save,
  remove,
  // getDefaultFilter,
  // getEmptyTrader,
  // addToWishlist,
  // getFeatures,
  getTradersByUser
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
    let traders = await httpService.get(BASE_URL)
    traders = getAvgRate(traders)
    return traders
  } catch (err) {
    throw err
  }
}

function get(traderId) {
  return httpService.get(BASE_URL + traderId)
}

function getTradersByUser(userId) {
  return httpService.get(`${BASE_URL}` + userId.toString())
}

function save(trader) {
  if (trader._id) {
    return httpService.put(BASE_URL + trader._id, trader)
  } else {
    return httpService.post(BASE_URL, trader)
  }
}

function remove(traderId) {
  return httpService.delete(BASE_URL + traderId)
}


// function getEmptyTrader() {
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