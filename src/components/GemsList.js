import GemItem from './GemItem'
import { Container } from 'semantic-ui-react'

function GemsList({gems, addList, list, removeList}) {

    const gemItems = gems.map((gem) => {
        return ( 
            <GemItem key={gem.gem_uri} gem={gem} addList={addList} list={list} removeList={removeList}/>
        )
    })
    return (
        <Container text>
            {{gems} ? <h1 className='find-text'>Here's what we dug up! Check out the gems we've mined from your search!</h1> : null}
            {gemItems}
        </Container>
    )
}

export default GemsList;