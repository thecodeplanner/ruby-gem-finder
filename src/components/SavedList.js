import GemItem from './GemItem'
import { Container } from 'semantic-ui-react'


function SavedList({ addList, list, removeList}) {

    let savedGems = list.map((gem) => {
        return (
            <GemItem key={gem.gem_uri} gem={gem} addList={addList} list={list} removeList={removeList}/>        )
    })
    return (
        <Container text >
            <h1 className='find-text'>Number of Saved Gem(s): {list.length}</h1>
            {savedGems}
        </Container>
    )
}

export default SavedList;