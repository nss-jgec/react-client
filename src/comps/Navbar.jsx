import { Dropdown, Navbar } from "flowbite-react";
import AppNavLink from "./AppNavLink";
export default function NavBar() {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="sticky top-0 z-50 shadow-sm mb-2"
    >
      <Navbar.Brand>
        <img src="./nss.png" className="mr-3 h-14" alt="NSS Logo" />
        <span className="self-center text-left whitespace-nowrap text-sm md:text-xl font-semibold dark:text-white">
          National Service Scheme <br />{" "}
          <span className="font-medium hidden md:block text-sm">
            Jalpaiguri Government Engineering College
          </span>
          <span className="font-medium md:hidden text-sm">
            JGEC
          </span>
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <AppNavLink to="/" text="Home" />
        <AppNavLink to="/feed" text="Feed" />
        <AppNavLink to="/activity" text="Activity" />
        {/* <AppNavLink to="/team" text="Team" /> */}
        <div className="w-full">
          <div className="m-auto w-fit py-2 md:py-0">
            <Dropdown
              placement="bottom"
              inline={true}
              arrowIcon={false}
              label="Teams"
            >
              <Dropdown.Item>
                <AppNavLink
                  to="/advisory-committee"
                  text="Advisory Committee"
                />
              </Dropdown.Item>
              <Dropdown.Item>
                <AppNavLink to="/team" text="Operational Team" />
              </Dropdown.Item>
            </Dropdown>
          </div>
          <hr className="md:hidden"/>
        </div>
        <AppNavLink to="/contact" text="Contact Us" />
      </Navbar.Collapse>
    </Navbar>
  );
}
