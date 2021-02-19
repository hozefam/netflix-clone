import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Pane,
  Inner,
  Title,
  SubTitle,
  Image,
  Item,
} from './styles/jumbotron';

const Jumbotron = ({ children, direction, ...restProps }) => (
  <Item {...restProps}>
    <Inner direction={direction}>{children}</Inner>
  </Item>
);

Jumbotron.Container = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

Jumbotron.Pane = ({ children, ...restProps }) => (
  <Pane {...restProps}>{children}</Pane>
);

Jumbotron.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Jumbotron.SubTitle = ({ children, ...restProps }) => (
  <SubTitle {...restProps}>{children}</SubTitle>
);

Jumbotron.Image = ({ ...restProps }) => <Image {...restProps} />;

Jumbotron.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.string,
};

Jumbotron.defaultProps = {
  direction: 'row',
};

Jumbotron.Container.propTypes = {
  children: PropTypes.node.isRequired,
};

Jumbotron.Pane.propTypes = {
  children: PropTypes.node.isRequired,
};

Jumbotron.Title.propTypes = {
  children: PropTypes.node.isRequired,
};

Jumbotron.SubTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Jumbotron;
