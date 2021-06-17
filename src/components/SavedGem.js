import { Segment, Button, Statistic } from 'semantic-ui-react'

function SavedGem({gem, removeList}) {

    // used gem_uri as identifier so that we can filter and handle the remove function from app component
    function handleUnsave() {
        removeList(gem.gem_uri)
    }

    return (
        <Segment style={{ padding: '3em', backgroundColor: 'white' }}>
            <h1 className='gem-name'>{gem.name} {gem.version}</h1>
            <Statistic size='small' label='Downloads' value={gem.downloads.toLocaleString()}/>
            <p className='gem-info'>{gem.info}</p>
            <p className='gem-info'>Creator(s): {gem.authors}</p>
            <Button size='large' basic color='red' onClick={handleUnsave}>unsave</Button>
        </Segment>
    )
}

export default SavedGem;