import { useState } from 'react'
import { Segment, Button } from 'semantic-ui-react'

function GemItem({gem, addList, list}) {

    //check to see if gem is in saved list or not
    const checkSaved = list.find(item => item.gem_uri === gem.gem_uri)

    function handleSave() {
        addList(gem)
    }
 
    return (
        <Segment>
            <h1>{gem.name} {gem.version}</h1>
            <p>Downloads: {gem.downloads}</p>
            <p>{gem.info}</p>
            <p>Creator(s): {gem.authors}</p>
            {checkSaved ? <Button basic size='tiny' color='pink' disabled >saved</Button> : <Button onClick={handleSave} size='tiny' color='pink'>save</Button>}
        </Segment>
    )
}

export default GemItem;

