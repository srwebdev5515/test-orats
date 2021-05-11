import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

import { Strike } from '../models'
import { getStrikes } from '../utils/api'
import { StrikeTable } from '../components/StrikeTable'

const Home: NextPage = () => {
  const [ticker, setTicker] = useState<string>('')
  const [strikes, setStrikes] = useState<Strike[]>([])

  useEffect(() => {
    if (ticker) {
      getStrikes(ticker).then((strikes) => {
        setStrikes(strikes)
      }).catch((err) => {
        console.error(err)
      })
    }
  }, [ticker])

  const handleTickerChange = (event: React.FormEvent<HTMLInputElement>) => {
    setTicker(event.currentTarget.value)
  }

  return (
    <div className="container mt-5">
      <Head>
        <title>Orats Test</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
      </Head>

      <main>
        <div className="form-group">
          <input type="text" className="form-control" onChange={handleTickerChange} />
        </div>
        <div>
          <StrikeTable strikes={strikes} />
        </div>
      </main>
    </div>
  )
}

export default Home;
