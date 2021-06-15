import GemItem from './GemItem'

function GemsList({gems}) {

    let gemItems = gems.map((gem) => {
        return ( <GemItem key={gem.gem_uri} name={gem.name} info={gem.info} downloads={gem.downloads} author={gem.authors}/>)
    })
    return (
        <div>
            <h1>Here are all the gems we found from your search:</h1>
            {gemItems}
        </div>
    )
}

export default GemsList;