import React from 'react';

class Customer extends React.Component {
    render() {
        return (
            <div>
                <CustomerProfile id={this.props.id} email={this.props.email} password={this.props.password}/>
                <CustomerInfo   name={this.props.name} birthday={this.props.birthday}
                city={this.props.city} district={this.props.district} address={this.props.address}/>

            </div>
        )
    }
}

class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.id}</p>
                <p>{this.props.email}</p>
                <p>{this.props.password}</p>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.birthday}</p>
                <p>{this.props.city}</p>
                <p>{this.props.district}</p>
                <p>{this.props.address}</p>
            </div>
        )
    }
}


export default Customer;
