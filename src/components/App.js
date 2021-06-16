import Header from './Header'
import Search from './SearchBar'
import GemsList from './GemsList'
import SavedList from './SavedList'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  const [gems, setGems] = useState(null)
  const [list, setList] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(`/api/v1/search.json?query=${search}`)
        .then(res => res.json())
        .then(gemData => {
          if (gemData.length === 0) {
            alert(`${search} was not found. Please try again`)
          }setGems(gemData)
        })
        }, [search])

  useEffect(() => {
    let data = localStorage.getItem('savedGems')
    if (data) {
      setList(JSON.parse(data))
    }
  }, [])


  function addList(addedGem) {
    const newSavedList = [...list, addedGem]
    setList(newSavedList)
    localStorage.setItem('savedGems', JSON.stringify(newSavedList))
  }

// create a function to remove a saved gem from the list by filtering through an identifier
  function removeList(removedGem) {
    const filteredList = list.filter(gem => {
      return (gem.gem_uri !== removedGem)
    })
    // console.log(filteredList)
    setList(filteredList)
    localStorage.setItem('savedGems', JSON.stringify(filteredList))

  }

  return (
    <>
      <Router>
          <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/search'>
            <Search setSearch={setSearch} />
            {gems ? <GemsList gems={gems} addList={addList} list={list}/> : null}
          </Route>
          <Route exact path='/saved'>
            {(list.length >= 1) ? <SavedList list={list} removeList={removeList}/> :
            <h1 className='find-text'>You currently do not have any saved gems.</h1>}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
