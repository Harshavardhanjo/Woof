import React from 'react';
import { Container, Logo, Name, NavItems, NavSection1, NavSection2 } from './NavBarElements';

const Navbar = () => {
  return <div>
      <Container>
          <NavSection1>
              <Logo/>
              <Name>WOOF</Name>
          </NavSection1>

          <NavSection2>
                <NavItems>Register your Enterprise</NavItems>
                <NavItems>Need Help?</NavItems>
                <NavItems>Login/Sign Up</NavItems>
          </NavSection2>
      </Container>
  </div>;
};

export default Navbar;
