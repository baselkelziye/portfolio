import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Card, Image, Container, Segment } from 'semantic-ui-react';
import NavigationBar from './navbar';
const projectsJSON = require('../data/projects.json');

const render_projects = (projects) => {
  const router = useRouter();
  if (projects !== null) {
    return projects.map((proje) => {
      return (
        <Card
          onClick={() => {
            router.push({ pathname: 'project-details', query: proje });
          }}
          centered
          fluid={true}
          link
          style={{ height: '15rem', marginBottom: '5.5rem' }}
          key={proje.id}
        >
          <Card.Content style={{ backgroundColor: 'purple' }}>
            <Card.Header
              style={{
                color: 'orange',
                fontFamily: 'Arial',
                fontSize: '1rem',
              }}
              textAlign="center"
            >
              {proje.projectName}
            </Card.Header>
          </Card.Content>
          <Image
            src={proje.imgPath}
            style={{ height: '100%', width: '100%' }}
          />

          <Card.Description
            textAlign="center"
            style={{
              backgroundColor: 'purple',
              color: 'orange',
            }}
          >
            {proje.projectDescription}
          </Card.Description>
        </Card>
      );
    });
  }
};

const ProjectsPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(projectsJSON);
  }, []);

  return (
    <Segment style={{ backgroundColor: 'rgb(255,178,102)' }}>
      <NavigationBar></NavigationBar>

      <Container style={{ width: '25rem' }}>
        <Card.Group>{render_projects(data)}</Card.Group>
      </Container>
    </Segment>
  );
};

export default ProjectsPage;
