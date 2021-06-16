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
            {{gems} ? <h1 className='find-text'>Here are all the gems we mined from your search:</h1> : null}
            {/* <h1 className='find-text'>Here are all the gems we found from your search:</h1> */}
            {gemItems}
        </Container>
    )
}

export default GemsList;