import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

// Interface para o estado do componente
interface HeaderState {
  isMenuOpen: boolean;
}

class Header extends React.Component<{}, HeaderState> {
  state: HeaderState = {
    isMenuOpen: false,
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  render(): React.ReactNode {
    return (
      <div className="container-header">
        <div className="logo">
          <Link to={"/"} style={{ color: "inherit" }}>
            <h1>WB</h1>
          </Link>
        </div>

        <nav className="menu">
          <Link to={"/produto"} style={{ color: "inherit" }}>
            <li>Produtos</li>
          </Link>
          <Link to={"/servico"} style={{ color: "inherit" }}>
            <li>Serviços</li>
          </Link>
          <Link to={"/cliente"} style={{ color: "inherit" }}>
            <li>Clientes</li>
          </Link>
        </nav>

        {/* Menu hamburguer para mobile */}
        <div className="hamburger" onClick={this.toggleMenu}>
          ☰
        </div>

        {/* Menu dropdown para mobile */}
        {this.state.isMenuOpen && (
          <nav className="dropdown-menu">
            <Link to={"/produto"} style={{ color: "inherit" }}>
              <li>Produtos</li>
            </Link>
            <Link to={"/servico"} style={{ color: "inherit" }}>
              <li>Serviços</li>
            </Link>
            <Link to={"/cliente"} style={{ color: "inherit" }}>
              <li>Clientes</li>
            </Link>
          </nav>
        )}
      </div>
    );
  }
}

export default Header;
