import SavedGem from './SavedGem'
import { Container } from 'semantic-ui-react'


function SavedList({list, removeList}) {

    let savedGems = list.map((gem) => {
        return (
            <SavedGem key={gem.gem_uri} gem={gem} removeList={removeList} />
        )
    })
    return (
        <Container text>
            <h1 className='find-text'>Number of Saved Gem(s): {list.length}</h1>
            {savedGems}
        </Container>
    )
}

export default SavedList;