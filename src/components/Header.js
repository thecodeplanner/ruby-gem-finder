import {Container, Icon} from 'semantic-ui-react'

function Header() {
    return (
        <Container textAlign='center' style={{ marginTop: '3em' }}>
            <h1>Ruby Gem Finder <Icon name='gem outline'/></h1>
       </Container>
    )
}

export default Header;