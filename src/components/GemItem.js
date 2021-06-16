import { useState } from 'react'
import { Segment, Button } from 'semantic-ui-react'

function GemItem({gem, addList, removeList}) {
    const [save, setSave] = useState(false)

    function handleSave() {
        addList(gem)
        setSave(true)
    }

    // used gem_uri as identifier so that we can filter and handle the remove function from app component
    function handleUnsave() {
        removeList(gem.gem_uri)
        setSave(false)
    }
    // console.log(save)
    return (
        <Segment>
            <h1>{gem.name} {gem.version}</h1>
            <p>Downloads: {gem.downloads}</p>
            <p>{gem.info}</p>
            <p>Creator(s): {gem.authors}</p>
            {save ? <Button size='small' basic color='pink' onClick={handleUnsave}>unsave</Button> : <Button size='small' color='pink' onClick={handleSave}>save</Button>}
        </Segment>
    )
}

export default GemItem;