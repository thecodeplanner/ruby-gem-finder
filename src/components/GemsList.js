import GemItem from './GemItem'
import { Container } from 'semantic-ui-react'

function GemsList({gems, addList, removeList}) {

    let gemItems = gems.map((gem) => {
        return ( 
            <GemItem key={gem.gem_uri} gem={gem} addList={addList} removeList={removeList}/>
        )
    })
    return (
        <Container text>
            <h1>Here are all the gems we found from your search:</h1>
            {gemItems}
        </Container>
    )
}

export default GemsList;