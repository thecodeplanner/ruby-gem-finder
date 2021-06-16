import Header from './Header'
import Search from './Search'
import GemsList from './GemsList'
import SavedList from './SavedList'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useState, useEffect } from 'react'
// import { Segment, Container } from 'semantic-ui-react'

function App() {
  const [gems, setGems] = useState(null)
  const [list, setList] = useState([])

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
            <Search setGems={setGems} />
            {gems ? <GemsList gems={gems} addList={addList} list={list}/> : null}
          </Route>
          <Route exact path='/saved'>
            {(list.length >= 1) ? <SavedList list={list} removeList={removeList}/> : null}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
