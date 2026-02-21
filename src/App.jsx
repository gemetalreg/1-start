import Header from './header/Header'
import Paragraph from './paragraph/Paragraph'
import Button from './button/Button' 
import Search from './search/Search'
import './App.css'
import SearchFilmLine from './SearchFilmLine/SearchFilmLine'

function App() {

  return (
    <>
    <Header />
    <Paragraph />

  <SearchFilmLine>
      <Search />
      <Button />

  </SearchFilmLine>

    </>
  )
}

export default App
