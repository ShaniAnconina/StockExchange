import axios from 'axios'

export const traderService = {
  query,
}

async function query() {
  try {
    let traders = await axios.get(`//localhost:8000/get_trader_names`)
    return traders.data
  } catch (err) {
    throw err
  }
}