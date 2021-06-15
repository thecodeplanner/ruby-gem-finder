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

  return (
    <div >
      <Header />
      <Search setGems={setGems} />
      {gems ? <GemsList gems={gems} addList={addList} /> : null}
      {(list.length >= 1) ? <SavedList list={list} /> : null}
    </div>
  );
}

export default App;
