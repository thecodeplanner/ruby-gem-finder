import { useState } from 'react'
import { Container, Form, Button, Icon } from 'semantic-ui-react'

function SearchBar({setSearch}) {

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
            </Form>
        </Container>

    )
    
}

export default SearchBar;