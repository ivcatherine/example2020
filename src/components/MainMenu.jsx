import React from "react";
import { Link } from  "react-router-dom";
export class MainMenu extends React.Component {
  render(){
    return (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">Todos</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
        </ul>);
  }
}