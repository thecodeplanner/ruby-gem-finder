import GemItem from './GemItem'

function GemsList({gems, addList}) {

    let gemItems = gems.map((gem) => {
        return ( 
            <GemItem key={gem.gem_uri} gem={gem} addList={addList}/>
        )
    })
    return (
        <div>
            <h1>Here are all the gems we found from your search:</h1>
            {gemItems}
        </div>
    )
}

export default GemsList;