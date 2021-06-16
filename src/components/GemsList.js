import GemItem from './GemItem'

function GemsList({gems, addList, removeList}) {

    let gemItems = gems.map((gem) => {
        return ( 
            <GemItem key={gem.gem_uri} gem={gem} addList={addList} removeList={removeList}/>
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