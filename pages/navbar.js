import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

const NavigationBar = () => {
  return (
    <Menu style={{ backgroundColor: 'orange' }} className="myNavBar" stackable>
      <Menu.Item position="left">
        <a href="home">
          <Icon name="home" size="big" link></Icon>
        </a>
      </Menu.Item>
      <a>
        <Menu.Item
          name="About"
          link
          className="myMenuItem"
          disabled
        ></Menu.Item>
      </a>
      <a href="projects">
        <Menu.Item name="projects" link className="myMenuItem"></Menu.Item>
      </a>
      <a>
        <Menu.Item
          name="Contact"
          link
          disabled
          className="myMenuItem"
        ></Menu.Item>
      </a>
    </Menu>
  );
};

export default NavigationBar;
