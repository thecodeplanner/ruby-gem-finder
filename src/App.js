import Header from './components/Header'
import Search from './components/Search'
import GemsList from './components/GemsList'
import SavedList from './components/SavedList'
import { useState } from 'react'


function App() {
  const [gems, setGems] = useState(null)
  const [list, setList] = useState([])

  console.log(gems)
  console.log(list)

  function addList(addedGem) {
    setList([...list, addedGem])
  }

// create a function to remove a saved gem from the list by filtering through an identifier
  function removeList(removedGem) {
    const filteredList = list.filter(gem => {
      return (gem.gem_uri !== removedGem)
    })
    console.log(filteredList)
    setList(filteredList)

  }

  return (
    <div >
      <Header />
      <Search setGems={setGems} />
      {gems ? <GemsList gems={gems} addList={addList} removeList={removeList}/> : null}
      {(list.length >= 1) ? <SavedList list={list} /> : null}
    </div>
  );
}

export default App;
