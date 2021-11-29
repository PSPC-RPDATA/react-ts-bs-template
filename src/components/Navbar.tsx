import { NavDropdown, Nav, Navbar as BSNavbar } from "react-bootstrap";

import tm from "tm";
import { hrefWithLang } from "utils";

export default function Navbar() {
  return (
    <BSNavbar bg="light" expand="lg" variant="primary-bg-color">
      <div className="container-fluid">
        <BSNavbar.Brand>
          <h1 className="my-0 fs-3">{tm("title")}</h1>
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href={hrefWithLang("/page1/")}>Page1</Nav.Link>
            <Nav.Link href={hrefWithLang("/page2/")}>Page2</Nav.Link>
            <NavDropdown title="Dropdown" id="main-nav-dropdown">
              <NavDropdown.Item href={hrefWithLang("/page1/")}>
                page1
              </NavDropdown.Item>
              <NavDropdown.Item href={hrefWithLang("/page2/")}>
                page2
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link
            href={window.location.href.replace(
              `/${window.lang}/`,
              `/${window.other_lang}/`
            )}
          >
            {window.lang === "en" ? "Français" : "English"}
          </Nav.Link>
        </BSNavbar.Collapse>
      </div>
    </BSNavbar>
  );
}
