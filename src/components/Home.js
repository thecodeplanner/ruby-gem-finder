import { Container } from 'semantic-ui-react'


function Home() {
    return (
        <Container textAlign='center' style={{ margin: '3em' }}>
        <h1> Welcome to Ruby Gem Finder!</h1>
        <p>Feel free to search and learn more about Ruby Gems! You can also save any of your gems and view them under 'Saved Gems'. </p>
        </Container>
    )
}

export default Home;