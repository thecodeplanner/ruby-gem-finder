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
      <Grid columns={2}>
        <Grid.Column>
          {gems ? <GemsList gems={gems} addList={addList} removeList={removeList}/> : null}
      </Grid.Column>
      <Grid.Column>
          {(list.length >= 1) ? <SavedList list={list} /> : null}
      </Grid.Column>
      </Grid>
   
    </div>
  );
}

export default App;
