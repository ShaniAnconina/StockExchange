import axios from 'axios'
import { httpService } from './http.service'

const BASE_URL = 'trader/'

export const traderService = {
  query,
  buyShare,
}

async function query() {
  try {
    let traders = await httpService.get('get_trader_names')
    return traders
  } catch (err) {
    throw err
  }
}

async function buyShare({ trader_id, share_id, amount, price_per_share, is_sell }) { //amount is the count off shares && price_per_share is the price per one share
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