import { Segment, Button, Statistic } from 'semantic-ui-react'

function GemItem({gem, addList, list}) {

    //check to see if gem is in saved list or not
    const checkSaved = list.find(item => item.gem_uri === gem.gem_uri)

    function handleSave() {
        addList(gem)
    }
 
    return (
        <Segment style={{ padding: '3em', backgroundColor: '#FFF8D9' }}>
            <h1 className='gem-name'>{gem.name} {gem.version}</h1>
            <Statistic size='tiny' label='Downloads' value={gem.downloads.toLocaleString()}/>
            <p className='gem-info'>{gem.info}</p>
            <p className='gem-info'>Creator(s): {gem.authors}</p>
            {checkSaved ? <Button basic size='small' color='red' disabled >saved</Button> : <Button onClick={handleSave} size='small' color='red'>save</Button>}
        </Segment>
    )
}

export default GemItem;

