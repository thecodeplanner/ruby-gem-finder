import { Segment, Button } from 'semantic-ui-react'


function SavedGem({gem}) {
    return (
        <Segment>
            <h1>{gem.name} {gem.version}</h1>
            <p>{gem.info}</p>
            <p>Downloads: {gem.downloads}</p>
            <p>Creator(s): {gem.authors}</p>
        </Segment>
    )
}

export default SavedGem;