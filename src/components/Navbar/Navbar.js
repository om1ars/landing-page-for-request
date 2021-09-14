import React from "react";
import { Container, Commerce, Links, Logo } from "./styles.js";
import Button from "@material-ui/core/Button";
import SearchIcon from '@material-ui/icons/Search';

function Navbar() {
  return (
    <Container>
      <Commerce>
        <h1>Commerce</h1>
      </Commerce>
      <Links>
        <ul>
          <li>Sell</li>
          <li>Marketplace</li>
          <li>Community</li>
          <li>Develop</li>
          <li>Resources</li>
        </ul>
      </Links>

      <Logo>
        <p>Log in</p>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <div>
        <SearchIcon />
        </div>
      </Logo>
    </Container>
  );
}

export default Navbar;
