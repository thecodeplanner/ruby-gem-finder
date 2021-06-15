function GemItem({gem, addList}) {

    function handleSave() {
        addList(gem)
    }

    return (
        <div>
            <h1>{gem.name} {gem.version}</h1>
            <p>{gem.info}</p>
            <p>Downloads: {gem.downloads}</p>
            <p>Creator(s): {gem.authors}</p>
            <button onClick={handleSave}>save</button>
        </div>

    )
}

export default GemItem;