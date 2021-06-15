import Header from './components/Header'
import Search from './components/Search'
import GemsList from './components/GemsList'
import { useState } from 'react'


function App() {
  const [gems, setGems] = useState(null)
  console.log(gems)

  return (
    <div >
      <Header />
      <Search setGems={setGems} />
      {gems ? <GemsList gems={gems} /> : null}
    </div>
  );
}

export default App;
