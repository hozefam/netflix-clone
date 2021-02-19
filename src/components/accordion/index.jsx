/* eslint-disable jsx-quotes */
import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Title,
  Item,
  Header,
  Body,
  Inner,
} from './styles/accordion';

const ToggleContext = createContext();

const Accordion = ({ children, ...restProps }) => (
  <Container {...restProps}>
    <Inner>{children}</Inner>
  </Container>
);

Accordion.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Accordion.Item = ({ children, ...restProps }) => {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = ({ children, ...restProps }) => {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src='/images/icons/close-slim.png' alt='Close' />
      ) : (
        <img src='/images/icons/add.png' alt='Open' />
      )}
    </Header>
  );
};

Accordion.Body = ({ children, ...restProps }) => {
  const { toggleShow } = useContext(ToggleContext);
  //   return toggleShow ? <Body {...restProps}>{children}</Body> : null;

  return (
    <Body className={toggleShow ? 'open' : 'closed'} {...restProps}>
      <span>{children}</span>
    </Body>
  );
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
};

Accordion.Title.propTypes = {
  children: PropTypes.node.isRequired,
};

Accordion.Item.propTypes = {
  children: PropTypes.node.isRequired,
};

Accordion.Header.propTypes = {
  children: PropTypes.node.isRequired,
};

Accordion.Body.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Accordion;
