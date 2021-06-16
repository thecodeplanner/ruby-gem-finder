import GemItem from './GemItem'
import { Container } from 'semantic-ui-react'

function GemsList({gems, addList, list}) {

    const gemItems = gems.map((gem) => {
        return ( 
            <GemItem key={gem.gem_uri} gem={gem} addList={addList} list={list}/>
        )
    })
    return (
        <Container text>
            <h1 className='home-title'>Here are all the gems we found from your search:</h1>
            {gemItems}
        </Container>
    )
}

export default GemsList;