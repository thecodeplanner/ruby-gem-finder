import { Container, Icon, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Header() {
    const [activeItem, setActiveItem] = useState('')
    return (
        <div className='header'>
            <Container textAlign='center' style={{ padding: '3em'}}>
                <h1 className='title'>Ruby Gem Finder <Icon name='gem outline' /></h1>
            </Container>
            <Menu size='huge' >
                <NavLink to='/' exact>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={() => setActiveItem('home')} />
                </NavLink>
                <NavLink to='/search' exact >
                    <Menu.Item name='search' active={activeItem === 'search'} onClick={() => setActiveItem('search')} />
                </NavLink>
                <NavLink to='/saved' exact >
                    <Menu.Item name='saved gems' active={activeItem === 'saved gems'} onClick={() => setActiveItem('saved gems')} />
                </NavLink>
            </Menu>
        </div>
    )
}

export default Header;