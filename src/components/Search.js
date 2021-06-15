import { useState } from 'react'

function Search() {
    const [gem, setGem] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        console.log(gem)
        fetch(`/api/v1/search.json?query=${gem}`)
            .then(res => res.json())
            .then(data => console.log(data))

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='search for gem'    
                    onChange={(e) => setGem(e.target.value)}            
                />
                <input 
                    type='submit'
                    value='find'
                />
            </form>
        </div>

    )
}

export default Search;