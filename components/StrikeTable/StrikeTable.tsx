import { NextPage } from 'next'
import { Strike } from '../../models'

interface Props {
  strikes: Strike[]
}

interface RowPros {
  strike: Strike
}

const StrikeTableRow: NextPage<RowPros> = ({ strike }) => {
  const formatDate = (date: string): string => {
    return new Date(date).toISOString().slice(0, 10)
  }

  return (
    <tr>
      <td>{strike.ticker}</td>
      <td>{formatDate(strike.tradeDate)}</td>
      <td>{formatDate(strike.quoteDate)}</td>
      <td>{strike.spotPrice}</td>
      <td>{strike.stockPrice}</td>
      <td>{strike.strike}</td>
    </tr>
  )
}

const StrikeTable: NextPage<Props> = ({ strikes }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Ticker</th>
          <th>Trade Date</th>
          <th>Quote Date</th>
          <th>Spot Price</th>
          <th>Stock Price</th>
          <th>Strike</th>
        </tr>
      </thead>
      <tbody>
        {strikes.map(strike => <StrikeTableRow strike={strike} />)}
      </tbody>
    </table>
  )
}

export default StrikeTable
