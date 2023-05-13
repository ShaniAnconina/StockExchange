import axios from 'axios'

export const shareService = {
  query,
  get,
  tradeShare,
  deleteShare
}

async function query() {
  try {
    let shares = await axios.get(`//localhost:8000/all_share_details`)
    return shares.data
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
  return share.data
}

async function tradeShare(trader_id, share_id, amount, price_per_share, is_sell) {
  try {
    const request = await axios({
      url: `//localhost:8000/place_order`,
      method: 'POST',
      data: null,
      params: { trader_id, share_id, amount, price_per_share, is_sell }
    })
    return request
  } catch (err) {
    throw err
  }
}

async function deleteShare(trader_id, share_id) {
  try {
    const request = await axios({
      url: `//localhost:8000/delete_order`,
      method: 'DELETE',
      data: null,
      params: { trader_id, share_id }
    })
    return request
  } catch (err) {
    throw err
  }
}