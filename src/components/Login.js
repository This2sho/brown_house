import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./Register"

class Login extends Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">이메일</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="ex) abcd@naver.com" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">비밀번호</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="ex) abcd1234" />
                </FormGroup>
                <Button>로그인</Button>
                <a href=""><Button>회원가입</Button></a>
            </Form>
        );
    }
}

export default Login;