import React from 'react';
import {
  Route,
  Switch as RouterSwitch,
  Link as RouterLink,
} from 'react-router-dom';
import { rootPath } from './App';
import { Row, Container, Col } from '@rakuten-rex/grid/Grid';
import H1 from '@rakuten-rex/typography/H1';
import H2 from '@rakuten-rex/typography/H2';

export default function Home() {
  const pages = [
    'Button',
    'Checkbox',
    'FormGroup',
    'Grid',
    'Panel',
    'Password',
    'RadioButton',
    'Select',
    'Stepper',
    'Switch',
    'TextField',
    'Textarea',
    'Track',
    'Typography',
  ];

  return (
    <RouterSwitch>
      <Route exact path={rootPath}>
        <Container>
          <Row key="breadcrumbs">
            <Col>
              <RouterLink to={rootPath} className="rex">
                Home
              </RouterLink>
            </Col>
          </Row>
          <Row key="title">
            <Col>
              <H1 gutterBottom>
                ReX Front-end Components Library{' '}
                <small>React Code Samples</small>
              </H1>
            </Col>
          </Row>
          <Row key="index">
            <Col>
              <H2 gutterBottom>Forms</H2>
              <ul>
                {pages.map((pageName) => {
                  return (
                    <li key={`page-${pageName}`}>
                      <RouterLink to={`${rootPath}/${pageName}`}>
                        {pageName}
                      </RouterLink>
                    </li>
                  );
                })}
              </ul>
            </Col>
          </Row>
        </Container>
      </Route>
    </RouterSwitch>
  );
}
