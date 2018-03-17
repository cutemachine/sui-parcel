/* eslint-disable react/no-multi-comp */
import React from 'react'
import {
  Button,
  Icon,
  Container,
  Divider,
  Grid,
  Header,
  Segment,
  List
} from 'semantic-ui-react'
import { Link } from 'react-router'
import ResponsiveContainer from '../components/ResponsiveContainer'
import Footer from '../components/Footer'

const HomePage = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>Extensive Components Collection</Header>
            <p style={{ fontSize: '1.33em' }}>
              Semantic UI offers a great collection of various components: Button, Container, Divider, Flag, Header, Icon, Image, Input, Label, List, Loader, Rail, Reveal, Segment, Step …
              The list goes on.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Button style={{ marginBottom: '0.3em' }} color='red'>Red</Button>
            <Button style={{ marginBottom: '0.3em' }} color='orange'>Orange</Button>
            <Button style={{ marginBottom: '0.3em' }} color='yellow'>Yellow</Button>
            <Button style={{ marginBottom: '0.3em' }} color='olive'>Olive</Button>
            <Button style={{ marginBottom: '0.3em' }} color='green'>Green</Button>
            <Button style={{ marginBottom: '0.3em' }} color='teal'>Teal</Button>
            <Button style={{ marginBottom: '0.3em' }} color='blue'>Blue</Button>
            <Button style={{ marginBottom: '0.3em' }} color='violet'>Violet</Button>
            <Button style={{ marginBottom: '0.3em' }} color='purple'>Purple</Button>
            <Button style={{ marginBottom: '0.3em' }} color='pink'>Pink</Button>
            <Button style={{ marginBottom: '0.3em' }} color='brown'>Brown</Button>
            <Button style={{ marginBottom: '0.3em' }} color='grey'>Grey</Button>
            <Button style={{ marginBottom: '0.3em' }} color='black'>Black</Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge' as={Link} name='components' href='https://react.semantic-ui.com/introduction'>
              Components
              <Icon name='right arrow' />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', backgroundColor: '#5FBAB2', color: 'white', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em', color: 'white' }}>Semantic UI</Header>
            <p style={{ fontSize: '1.33em' }}>The official Semantic-UI-React integration</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', backgroundColor: '#263749', color: 'white', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em', color: 'white' }}>Parcel</Header>
            <p style={{ fontSize: '1.33em' }}>Blazing fast, zero configuration web application bundler</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>Technologies Used</Header>
        <List animated verticalAlign='middle' size='big'>
          <List.Item>
            <List.Content>
              Babel—Next generation JavaScript
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              React—A JavaScript library for building user interfaces
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              Semantic-UI React—The official Semantic-UI-React integration
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              Parcel—Blazing fast, zero configuration web application bundler
            </List.Content>
          </List.Item>
        </List>

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Make it your own</a>
        </Divider>

        <Header as='h3' style={{ fontSize: '2em' }}>Getting Started</Header>
        <p style={{ fontSize: '1.33em' }}>
          Just clone the project. Remove the old Git history.
          Then install the dependencies with <code>yarn</code>.
          When the installation has finished you can run the new app with <code>yarn start</code>.
        </p>
        <Button as={Link} href='https://github.com/cutemachine/sui-parcel' size='large'>
          <Icon name='github' /> GitHub
        </Button>
      </Container>
    </Segment>
    <Footer />
  </ResponsiveContainer>
)

export default HomePage
