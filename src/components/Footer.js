/* eslint-disable react/no-multi-comp */
import React from 'react'
import {
  Container,
  Grid,
  Header,
  List,
  Segment
} from 'semantic-ui-react'

const Footer = () => (
  <Segment inverted vertical style={{ padding: '5em 0em' }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='About' />
            <List link inverted>
              <List.Item as='a' href='https://steemit.com/@cutemachine'>@cutemachine</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Source' />
            <List link inverted>
              <List.Item as='a' href='https://github.com/cutemachine/sui-parcel'>GitHub</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as='h4' inverted>SUI Parcel</Header>
            <p>Launch your own React projects in no time with SUI Parcel.</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer
