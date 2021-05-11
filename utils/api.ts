import axios from 'axios'
import { Strike } from '../models'

export const getStrikes = (ticker: string): Promise<Strike[]> => {
  return axios.get(
    'https://api.orats.io/datav2/strikes.json',
    {
      params: {
        token: 'demo',
        ticker: ticker
      }
    }
  ).then((res) => res.data.data)
}
