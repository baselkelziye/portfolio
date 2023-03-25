import React from 'react';
import NavigationBar from './navbar';
import {
  Card,
  Image,
  Icon,
  Container,
  Divider,
  Segment,
  Grid,
  Message,
} from 'semantic-ui-react';

const HomePage = () => {
  return (
    <Segment style={{ backgroundColor: 'rgb(255,178,102)' }}>
      <NavigationBar></NavigationBar>
      <Grid columns={2} relaxed="very">
        <Grid.Column>
          <Card
            centered
            style={{ backgroundColor: 'inherit', boxShadow: 'none' }}
          >
            <Image
              src="images/newPersonalPic.png"
              size="medium"
              centered
              style={{ backgroundColor: 'inherit' }}
              // style={{ paddingTop: '-4rem' }}
            />

            <Card.Content textAlign="center">
              <a href="https://github.com/baselkelziye" target="_blank">
                <Icon
                  name="github"
                  size="big"
                  color="black"
                  style={{ marginRight: '3rem' }}
                ></Icon>
              </a>
              <a
                href="https://www.linkedin.com/in/basel-kelziye-080997197/"
                target="_blank"
              >
                <Icon
                  name="linkedin"
                  size="big"
                  color="blue"
                  style={{ marginRight: '3rem' }}
                ></Icon>
              </a>
              <a href="mailto:baselkelziye@gmail.com?subject=Job Offer ">
                <Icon name="mail" size="big" color="grey"></Icon>
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column
          className="myListClass"
          style={{ marginTop: '2.5rem', marginLeft: '-5rem' }}
        >
          <h1>Hi, I Am Basel</h1>
          <p>
            I was born in Syria in 2001, moved to Turkey in 2013 and currently
            doing an Exhange program in Esslingen/Germany.
          </p>
          <p>I am able to speak 4 languages:</p>
          <ul style={{ listStyle: 'none' }}>
            <li>C2 Arabic</li>
            <li>C2 Turkish</li>
            <li>C1 English</li>
            <li>A2 German</li>
          </ul>
          <p>
            I'm recently intrested in Web Development, Cryptography and
            Blockchain.
          </p>
        </Grid.Column>
      </Grid>

      <Divider vertical hidden></Divider>
    </Segment>
  );
};

export default HomePage;
