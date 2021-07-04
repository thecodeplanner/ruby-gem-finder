import { Container, Icon, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Header() {
    const [activeItem, setActiveItem] = useState('')
    return (
        <div className='header'>
            <Container textAlign='center' style={{ padding: '3em' }}>
                <h1 className='title'>Ruby Gem Finder <Icon name='gem outline' /></h1>
            </Container>
            <Menu size='huge' >
                <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={() => setActiveItem('home')} />
                <Menu.Item as={Link} to='/search' name='search' active={activeItem === 'search'} onClick={() => setActiveItem('search')} />
                <Menu.Item as={Link} to='/saved' name='saved gems' active={activeItem === 'saved gems'} onClick={() => setActiveItem('saved gems')} />
            </Menu>
        </div>
    )
}

export default Header;