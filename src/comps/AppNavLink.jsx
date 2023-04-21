import { useLinkClickHandler, useLocation } from "react-router-dom";
import { Navbar } from "flowbite-react";
export default function AppNavLink(props) {
  const location = useLocation();
  const clickHandler = useLinkClickHandler(props.to);

  return (
    <span onClick={clickHandler}>
      <Navbar.Link className="" href={props.to} active={location.pathname === props.to}>
        {props.text}
      </Navbar.Link>
    </span>
  );
}
