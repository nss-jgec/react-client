import { Dropdown, Navbar } from "flowbite-react";
import AppNavLink from "./AppNavLink";
export default function NavBar() {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand>
        <img src="./nss.png" className="mr-3 h-20" alt="NSS Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          NSS JGEC
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <AppNavLink to="/" text="Home" />
        <AppNavLink to="/events" text="Events" />
        <AppNavLink to="/activity" text="Activity" />
        {/* <AppNavLink to="/team" text="Team" /> */}
        <Dropdown
          placement="bottom"
          inline={true}
          arrowIcon={false}
          label="Teams"
        >
          <Dropdown.Item>
            <AppNavLink to="/team" text="Operations Team" />
          </Dropdown.Item>
          <Dropdown.Item>
            <AppNavLink to="/advisory-committee" text="Advisory Committee" />
          </Dropdown.Item>
        </Dropdown>
        <AppNavLink to="/contact" text="Contact Us" />
      </Navbar.Collapse>
    </Navbar>
  );
}
