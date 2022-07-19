import './App.scss'
import { Header } from './components/header/Header'
import { GridContainer } from './sections/gridContainer/GridContainer'
import { MainHeaders } from './sections/mainHeaders/MainHeaders'

function App() {

  return (
    <main className="App">
      <Header/>
      <MainHeaders/>
      <GridContainer/>
    </main>
  )
}

export default App
