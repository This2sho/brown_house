import React, { Component } from 'react';
import { Button } from 'reactstrap';
import "./Register";
import "./Login";
import "./Logstate.css";
import logo from "../image/logo192.png";


class Logstate extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1><a href="/" onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangePage();
                    }.bind(this)}>
                        <img className="logo" src={logo}/>
                        {this.props.title}</a></h1>
                    {this.props.sub}
                </header>
                
                <a href="/login" onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangeMode('login');
                }.bind(this)}><Button>로그인</Button></a>
                <a href="/register" onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangeMode('register');
                }.bind(this)}><Button>회원가입</Button></a>
                <br></br>
                <a href="">아이디/</a><a href="">비밀번호찾기</a>
            </div>
        );
    }
}

export default Logstate;