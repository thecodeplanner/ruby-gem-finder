import SavedGem from './SavedGem'

function SavedList({list}) {

    let savedGems = list.map((gem) => {
        return (
            <SavedGem key={gem.gem_uri} gem={gem} />
        )
    })
    return (
        <div>
            <h1>Saved Gems:</h1>
            {savedGems}
        </div>
    )
}

export default SavedList;