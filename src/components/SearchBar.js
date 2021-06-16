import { useState } from 'react'
import { Container, Form, Button, Icon } from 'semantic-ui-react'

function SearchBar({setGems, setSearch}) {
    // const [search, setSearch] = useState('')

    // function handleSubmit(e) {
    //     e.preventDefault()


    //     // fetch(`/api/v1/search.json?query=${search}`)
    //     //     .then(res => res.json())
    //     //     .then(gemData => {
    //     //         if (gemData.length === 0) {
    //     //             alert(`${search} was not found. Please try again`)
    //     //             e.target.reset()
    //     //         }setGems(gemData)
    //     //     })
    // }


    return (
        <Container style={{ margin: '3em' }}>
           
            <Form align='center'>
                <Form.Field >
                    <label id='label'>Search for Ruby Gem</label>
                <input 
                    type='text'
                    placeholder='search for gem'    
                    onChange={(e) => setSearch(e.target.value)}            
                />
                </Form.Field>
                {/* <Button type='submit'> Find </Button> */}
            </Form>
        </Container>

    )
    
}

export default SearchBar;