import React from 'react'
import Deck from '../components/Deck/Deck';
import { IPage } from '../types'

const Home: React.FunctionComponent<IPage> = props => {
    return <div style={{padding: '2rem'}}><Deck title="Deutch learning system" /></div>
}

export default Home;