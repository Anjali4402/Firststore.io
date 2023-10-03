import { useState } from 'react'
import './App.css'
import FirststoreHomePage from './component/FirststoreHomePage'
import MainBackgroud from './component/MainBackgroud'
import CardItems from './component/CardItems'
import ChooseRicoz from './component/ChooseRicoz'
import Courses from './component/Courses'
import GetInTouch from './component/GetInTouch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FirststoreHomePage/>
      <MainBackgroud/>
      <CardItems/>
      <ChooseRicoz/>
      <Courses/>
      <GetInTouch/>

    </>
  )
}

export default App
