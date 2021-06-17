import { Container, Segment } from 'semantic-ui-react'


function Home() {
    return (
        <Segment  style={{ textAlign:'center', padding: '5em', margin: '10em', backgroundColor: 'white'  }}>
        <h1 className='home-title'> Welcome to Ruby Gem Finder! <i className='search icon'></i></h1>
        <p className='home-text'>Feel free to search and learn more about Ruby Gems! You can also save any of your gems and view them under 'Saved Gems'. </p>
        </Segment>
    )
}

export default Home;
