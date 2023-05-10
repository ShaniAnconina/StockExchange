import { httpService } from './http.service'

const BASE_URL = 'trader/'

export const traderService = {
  query,
}

async function query() {
  try {
    let traders = await httpService.get('get_trader_names')
    return traders
  } catch (err) {
    throw err
  }
}