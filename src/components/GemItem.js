function GemItem({name, info, downloads, author}) {
    return (
        <div>
            <h1>{name}</h1>
            <p>Description: {info}</p>
            <p># of Downloads: {downloads}</p>
            <p>Creator(s): {author}</p>
        </div>

    )
}

export default GemItem;