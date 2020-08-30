import React, { Component } from 'react';
// import { Container, Row, Col } from 'reactstrap';
// import Subject from "./components/Subject";
import Logstate from "./components/Logstate";
import Login from "./components/Login";
import Register from "./components/Register";
import Regionlist from "./components/Regionlisgt";
// import screen from "./image/screen.png";
import playstore from "./image/playstore.png";
import appstore from "./image/appstore.png";
import axios from 'axios';
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: "브라운하우스" },
      mode: "welcome",
      title: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api')
      .then(res => res.json())
      .then(data => this.setState({title: data.title}));
      this._dbTest();
  }
  
  _dbTest = async() => {
    const res = await axios.get('/api/test');
    console.log(res.data);
  }

  getMode() {
    var _logmode = null;
    if (this.state.mode === "welcome") {
      _logmode = null;
    } else if (this.state.mode === "login") {
      _logmode = <Login></Login>
    } else if (this.state.mode === "register") {
      _logmode = <Register></Register>
    }
    return _logmode;
  }


  render() {
    return (
      <div className="App">
         {this.state.title? <h1>{this.state.title}</h1>:<h1>loading...</h1>}
        <aside>
          <div className="login">
            <Logstate
              title={this.state.subject.title}
              onChangePage={function () {
                this.setState({ mode: 'welcome' });
              }.bind(this)}
              onChangeMode={function (_mode) {
                if (_mode === 'welcome') {
                  this.setState({
                    mode: 'welcome'
                  })
                } else if (_mode === 'login') {
                  this.setState({
                    mode: 'login'
                  })
                } else if (_mode === 'register') {
                  this.setState({
                    mode: 'register'
                  })
                }
              }.bind(this)}></Logstate>
            {this.getMode()}
          </div>
          <div className="regionlist">
            <Regionlist></Regionlist>
          </div>
        </aside>
        <section className="init">
          <div className="wrap">
            <h1>공동 생활을 더 편하고 즐겁게,<br></br><strong>브라운하우스</strong></h1>
            <div className="stores">
              <a href="/page/mlink?lid=web_about&amp;store=playstore"><img src={playstore} alt="브라운하우스 - Play Store - Google" /></a>
              <a href="/page/mlink?lid=web_about&amp;store=appstore"><img src={appstore} alt="브라운하우스 - AppStore - Apple" /></a>
            </div>
            <hr></hr>
            <div className="device active">
              <div className="screen">
                <div className="image home"></div>
                <div className="image timetable"></div>
                <div className="image board"></div>
              </div>
            </div>
          </div>
        </section>
      </div >
    );
  }
}

export default App;
