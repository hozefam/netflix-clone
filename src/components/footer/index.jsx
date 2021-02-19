import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from './styles/footer';

const Footer = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

Footer.Row = ({ children, ...restProps }) => (
  <Row {...restProps}>{children}</Row>
);

Footer.Column = ({ children, ...restProps }) => (
  <Column {...restProps}>{children}</Column>
);

Footer.Link = ({ children, ...restProps }) => (
  <Link {...restProps}>{children}</Link>
);

Footer.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Footer.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
);

Footer.Break = ({ ...restProps }) => <Break {...restProps} />;

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

Footer.Row.propTypes = {
  children: PropTypes.node.isRequired,
};

Footer.Column.propTypes = {
  children: PropTypes.node.isRequired,
};

Footer.Link.propTypes = {
  children: PropTypes.node.isRequired,
};

Footer.Title.propTypes = {
  children: PropTypes.node.isRequired,
};

Footer.Text.propTypes = {
  children: PropTypes.node.isRequired,
};

Footer.Break.propTypes = {};

export default Footer;
