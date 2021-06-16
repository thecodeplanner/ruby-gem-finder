import {Container, Icon, Menu} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
        <Container textAlign='center' style={{ margin: '3em' }}>
            <h1>Ruby Gem Finder <Icon name='gem outline'/></h1>
       </Container>
       <Menu pointing secondary>
           <NavLink to='/' exact>
                <Menu.Item name='home'/>
            </NavLink>
            <NavLink to='/search' exact >
                <Menu.Item name='search'/>
            </NavLink>
            <NavLink to='/saved' exact >
                <Menu.Item name='saved gems'/>
            </NavLink>
       </Menu>
       </>
    )
}

export default Header;