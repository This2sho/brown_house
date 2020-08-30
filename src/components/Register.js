import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Register extends Component {
    render() {
        return (
            <Form>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleEmail">이메일</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="ex) abcd@naver.com" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="examplePassword">비밀번호</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="ex) abcd1234" />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="exampleAddress">주소</Label>
                    <Input type="text" name="address" id="exampleAddress" placeholder="서울특별시 종로구 청와대로 1" />
                </FormGroup>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleCity">광역시</Label>
                            <Input type="text" name="city" id="exampleCity" placeholder="서울특별시"/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="exampleState">시/구/군</Label>
                            <Input type="text" name="state" id="exampleState" placeholder="종로구"/>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="exampleZip">우편번호</Label>
                            <Input type="text" name="zip" id="exampleZip" placeholder="12345"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Button>가입하기</Button>
            </Form>
        );
    }
}


export default Register;