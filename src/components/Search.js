import { useState } from 'react'
import { Container, Form, Button } from 'semantic-ui-react'

function Search({setGems}) {
    const [search, setSearch] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/api/v1/search.json?query=${search}`)
            .then(res => res.json())
            .then(gemData => {
                if (gemData.length === 0) {
                    alert(`${search} was not found. Please try again`)
                    e.target.reset()
                }setGems(gemData)
            })
    }

    return (
        <Container style={{ marginTop: '3em' }}>
            <Form onSubmit={handleSubmit} align='center'>
                <Form.Field inline>
                <input 
                    type='text'
                    placeholder='search for gem'    
                    onChange={(e) => setSearch(e.target.value)}            
                />
                </Form.Field>
                <Button type='submit'> Find </Button>
            </Form>
        </Container>

    )
    
}

export default Search;