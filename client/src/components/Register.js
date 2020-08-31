import React, { Component } from 'react';
import { post } from 'axios';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            userName: '',
            birthday: '',
            city: '',
            district: '',
            address: ''
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleValueChange = this.handleValueChange.bind(this)
        this.addCustomer = this.addCustomer.bind(this)
    }

    handleFormSubmit(e) {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            email: '',
            password: '',
            userName: '',
            birthday: '',
            city: '',
            district: '',
            address: ''
        })
    }

    handleValueChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer() {
        const url = '/api/customers';
        const formData = new FormData();

        formData.append('email', this.state.email)
        formData.append('password', this.state.password)
        formData.append('name', this.state.userName)
        formData.append('birthday', this.state.birthday)
        formData.append('city', this.state.city)
        formData.append('district', this.state.district)
        formData.append('address', this.state.address)

        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // }
        return post(url, formData);//, config)
    }

    render() {
        return (
            <Form onSubmit={this.handleFormSubmit}>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleEmail">이메일</Label>
                            <Input type="email" name="email" value={this.state.email} placeholder="ex) abcd@naver.com" onChange={this.handleValueChange}/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="examplePassword">비밀번호</Label>
                            <Input type="password" name="password" value={this.state.password} placeholder="ex) abcd1234" onChange={this.handleValueChange}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleName">이름</Label>
                            <Input type="text" name="userName" value={this.state.userName} placeholder="홍길동" onChange={this.handleValueChange}/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="exampleBirthday">생년월일</Label>
                            <Input type="text" name="birthday" ivalue={this.state.birthday} placeholder="9601225" onChange={this.handleValueChange}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleCity">광역시/도</Label>
                            <Input type="text" name="city" value={this.state.city} placeholder="부산광역시" onChange={this.handleValueChange}/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="exampleState">시/구/군</Label>
                            <Input type="text" name="district" value={this.state.district} placeholder="금정구" onChange={this.handleValueChange}/>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="exampleAddress">나머지 주소</Label>
                    <Input type="text" name="address" value={this.state.address} placeholder="부산대학로63번길 2 " onChange={this.handleValueChange}/>
                </FormGroup>
                <Button type="submit">가입하기</Button>
            </Form>
        );
    }
}


export default Register;