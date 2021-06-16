import { Container, Segment } from 'semantic-ui-react'


function Home() {
    return (
        <Container  style={{ textAlign:'center', padding: '5em', backgroundColor: 'white'  }}>
        <h1 className='home-title'> Welcome to Ruby Gem Finder!</h1>
        <p className='home-text'>Feel free to search and learn more about Ruby Gems! You can also save any of your gems and view them under 'Saved Gems'. </p>
        </Container>
    )
}

export default Home;
