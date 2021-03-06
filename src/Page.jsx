import React, { Suspense } from 'react';
import {
  Route,
  Switch as RouterSwitch,
  Link as RouterLink,
} from 'react-router-dom';
import { rootPath } from './App';
import { Row, Container, Col } from '@rakuten-rex/grid/Grid';
import H1 from '@rakuten-rex/typography/H1';

export default function Page(main, list) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterSwitch>
        {/* Main route */}
        <Route exact path={`${rootPath}/${main}`}>
          <Container>
            <Row key="breadcrumbs">
              <Col>
                <RouterLink to={rootPath}>Home</RouterLink>
                {` / `}
                {main}
              </Col>
            </Row>
            <Row key="title">
              <Col>
                <H1 gutterBottom>{main}</H1>
              </Col>
            </Row>
            <Row key="index">
              <Col>
                <ul>
                  {list.map(({ name, file }) => {
                    return (
                      <li key={`page-content-${file}`}>
                        <RouterLink to={`${rootPath}/${main}/${file}`}>
                          {name}
                        </RouterLink>
                      </li>
                    );
                  })}
                </ul>
              </Col>
            </Row>
          </Container>
        </Route>
        {/* Components variations routes */}
        {list.map(({ name, Component, maxWidth = '25%', file = 'Default' }) => {
          const width = parseInt(window.innerWidth) <= 425 ? '100%' : maxWidth;
          const githubUrl =
            'https://github.com/rakuten-rex/react-app-code-samples/blob/master/src';
          const githubLogo =
            'https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mark-github.svg';

          return (
            <Route path={`${rootPath}/${main}/${file}`} key={`route-${file}`}>
              <Container>
                <Row key="breadcrumbs">
                  <Col>
                    <RouterLink to={rootPath}>Home</RouterLink>
                    {` / `}
                    <RouterLink to={`${rootPath}/${main}`}>{main}</RouterLink>
                    {` / `}
                    {name}
                  </Col>
                </Row>
                <Row key="title">
                  <Col xs="10">
                    <H1 gutterBottom>{name}</H1>
                  </Col>
                  <Col xs="2">
                    <a
                      href={`${githubUrl}/${main}/${file}.jsx`}
                      style={{ float: 'right' }}
                    >
                      <img
                        src={githubLogo}
                        width="20"
                        title="Github Source Code"
                        alt="Github Source Code"
                      />
                    </a>
                  </Col>
                </Row>
                <div id="react-code-sample" style={{ width }}>
                  <Component />
                </div>
              </Container>
            </Route>
          );
        })}
      </RouterSwitch>
    </Suspense>
  );
}
