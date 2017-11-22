import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import routes from "../routes";

const Wrap = styled.nav`
  text-align: center;
`;

const NavItem = styled.div`
  display: inline-block;
`;

const NavLinkStyled = styled(NavLink)`
  letter-spacing: 1px;
  font-size: 11px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  font-style: normal;
  line-height: 1em;
  color: #ffffffb3;
  padding: 0.75em 1em;
  transition: color 0.2s ease-out;

  &:active,
  &:hover,
  &.active {
    color: white;
  }
`;

export class Nav extends Component {
  render() {
    return (
      <Wrap>
        {routes.map(({ to, label }) => (
          <NavItem key={to}>
            <NavLinkStyled to={to} exact={to === "/"}>
              {label}
            </NavLinkStyled>
          </NavItem>
        ))}
      </Wrap>
    );
  }
}

export default Nav;
