import { useState } from 'react'

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
        <div>
            <h1>{gem.name} {gem.version}</h1>
            <p>{gem.info}</p>
            <p>Downloads: {gem.downloads}</p>
            <p>Creator(s): {gem.authors}</p>
            {save ? <button onClick={handleUnsave}>unsave</button> : <button onClick={handleSave}>save</button>}
        </div>

    )
}

export default GemItem;