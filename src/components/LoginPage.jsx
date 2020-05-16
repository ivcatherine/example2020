import React from "react";
export class LoginPage extends React.Component {
  render(){
    const { isAuth, handleLoginLogout } = this.props;
    return (
    <React.Fragment>
        <div>State of login is {isAuth.toString()}</div>
        <button onClick={handleLoginLogout}>Залогиниться/Разлогиниться</button>
    </React.Fragment>);
  }
}