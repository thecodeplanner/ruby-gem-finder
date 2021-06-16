import Header from './Header'
import Search from './Search'
import GemsList from './GemsList'
import SavedList from './SavedList'
import { useState, useEffect } from 'react'
import { Segment, Grid } from 'semantic-ui-react'



function App() {
  const [gems, setGems] = useState(null)
  const [list, setList] = useState([])

  useEffect(() => {
    let data = localStorage.getItem('savedGems')
    if (data) {
      setList(JSON.parse(data))
    }
  }, [])

  // console.log(gems)
  // console.log(list)

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
    <div >
      <Segment>
        <Header />
        <Search setGems={setGems} />
      </Segment>
          {gems ? <GemsList gems={gems} addList={addList} list={list}/> : null}
      
          {(list.length >= 1) ? <SavedList list={list} removeList={removeList}/> : null}

    </div>
  );
}

export default App;
