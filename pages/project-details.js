import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Segment, Grid, Divider, Image, Icon, Button } from 'semantic-ui-react';
import NavigationBar from './navbar';
const projectDetails = require('../data/project-details.json');
import Link from 'next/link';

const snakeTrial = 'snake';

const getDetailsProject = (mainProject) => {
  for (let proje of projectDetails) {
    if (proje.id == mainProject.id) {
      return proje;
    }
  }
  return mainProject;
};

const ProjectDetail = () => {
  const router = useRouter();
  const proje = getDetailsProject(router.query);

  return (
    <Segment style={{ backgroundColor: 'rgb(255,178,102)' }}>
      <NavigationBar></NavigationBar>
      <Grid columns={2} relaxed="very">
        <Grid.Column>
          <Image src={proje.imgPath} size="medium" centered />
        </Grid.Column>
        <Grid.Column
          className="myListClass"
          style={{ marginTop: '2.5rem', marginLeft: '-5rem' }}
        >
          <h1>{proje.projectName}</h1>
          <p>{proje.projectDescription}</p>
          <a href={proje.githubLink} target="_blank">
            <Button icon name="github" labelPosition="left" color="black">
              <Icon name="github" />
              Github
            </Button>
          </a>
          {proje.playable ? (
            <Link
              href={`http://localhost:3000/${proje.routeLink}/${proje.routeLink}.html`}
              target="_blank"
            >
              <Button icon name="play" labelPosition="left" color="green">
                <Icon name="play" />
                Try it!
              </Button>
              {/* </a> */}
            </Link>
          ) : null}
        </Grid.Column>
      </Grid>

      <Divider vertical hidden></Divider>
    </Segment>
  );
};

export default ProjectDetail;
