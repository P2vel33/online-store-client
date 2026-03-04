import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useContext } from "react";
import { Context } from "../index";
import { NavLink, useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, SHOP_ROUTE, SIGNIN_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          КУПИДЕВАЙС
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>
              Админ панель
            </Button>
            <Button
              variant={"outline-light"}
              onClick={() => {
                return navigate(SIGNIN_ROUTE);
                // user.setIsAuth(false);
              }}
              className="m-l-2"
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
