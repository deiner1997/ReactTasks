import React, { Component } from 'react';
class layout extends Component {
  constructor(props){
    super(props)
    this.state = {
      repos: [],
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  logout(){
    if (sessionStorage.hasOwnProperty('response')) {
      sessionStorage.clear();
    }
  }
    // for all items in state
  login(){
      // if the key exists in localStorage
     
      if (sessionStorage.hasOwnProperty('response')) {
        let user =JSON.parse(sessionStorage.getItem("response"));
        let token = sessionStorage.getItem('token'); 
        
        //console.log(user[0].displayName);
        console.log(user);
        console.log(token);
        return(
            <ul className="nav navbar-nav navbar-right">
            <li className="nav-item ">
            <h2>
            <li className="nav-item ">
             <h3><a  className="nav-link" href="/"><span className="glyphicon glyphicon-user"></span></a>
            </h3>
           </li>
            </h2>
              </li>
                <li className="nav-item">
                <h3>
                <a className="btn btn-lg nav-link" onClick={this.logout.bind(this)} href="/"><span className="glyphicon glyphicon-log-out"></span>Logout</a>
                </h3>
                </li>
            </ul>
        );
      } else {
        return (
         <ul className="nav navbar-nav navbar-right">
      <li className="nav-item ">
      <h3><a className="nav-link" href="/signIn"><span className="glyphicon glyphicon-log-in"></span>Login</a>
      </h3>
      </li>
      </ul>
        );
      }
  }
  render() {
    return (
    <nav className="navbar navbar-expand-sm backgroundtransparent">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsExample03">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <h3>
          <a className="nav-link" href="/Dashboard"><span className="glyphicon glyphicon-home"></span>Home</a>
          </h3>
        </li>
      </ul>
      {this.login()}
    </div>
  </nav>
    );
  }
}
export default layout;




