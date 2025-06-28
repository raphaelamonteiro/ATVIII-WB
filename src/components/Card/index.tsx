import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

interface CardProps {
  title: string
  image: string
  link: string
}
class Card extends React.Component<CardProps> {
  render(): React.ReactNode {
    return (
      <div className="card">
        <div className="card-image">
          <img src={this.props.image} alt="img-icon" />
        </div>
        <h2 className="card-title">{this.props.title}</h2>
        <Link to={this.props.link} style={{ color: "inherit" }}>
          <button className="card-button">Pagina de {this.props.title}</button>
        </Link>
      </div>
    );
  }
}

export default Card;
