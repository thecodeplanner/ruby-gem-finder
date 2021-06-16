import Header from './components/Header'
import Search from './components/Search'
import GemsList from './components/GemsList'
import SavedList from './components/SavedList'
import { useState, useEffect } from 'react'


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
      <Header />
      <Search setGems={setGems} />
      {gems ? <GemsList gems={gems} addList={addList} removeList={removeList}/> : null}
      {(list.length >= 1) ? <SavedList list={list} /> : null}
    </div>
  );
}

export default App;
