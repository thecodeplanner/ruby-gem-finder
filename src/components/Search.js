import { useState } from 'react'

function Search({setGems}) {
    const [search, setSearch] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/api/v1/search.json?query=${search}`)
            .then(res => res.json())
            .then(gemData => handleData(gemData))

            function handleData(gemData) {
                if (gemData.message ==='Not Found') {
                    alert(`${search} was not found. Please try again.`)
                    e.target.reset()
                }else {
                    setGems(gemData)
                    e.target.reset()
                }
            }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='search for gem'    
                    onChange={(e) => setSearch(e.target.value)}            
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