import { Segment, Button } from 'semantic-ui-react'


function SavedGem({gem, removeList}) {

    // used gem_uri as identifier so that we can filter and handle the remove function from app component
    function handleUnsave() {
        removeList(gem.gem_uri)
    }

    return (
        <Segment>
            <h1>{gem.name} {gem.version}</h1>
            <p>{gem.info}</p>
            <p>Downloads: {gem.downloads}</p>
            <p>Creator(s): {gem.authors}</p>
            <Button size='small' basic color='red' onClick={handleUnsave}>unsave</Button>
        </Segment>
    )
}

export default SavedGem;