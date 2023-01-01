import react from "react";

export default class UserLoginSystem extends react.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false}
    }
    handleLoginClick() {
        console.log('come from login', this.state.isLoggedIn)
        this.setState({isLoggedIn: true});
        console.log('come from login', this.state.isLoggedIn)
    }

    handleLogoutClick() {
        console.log('come from logout', this.state.isLoggedIn)
        this.setState({isLoggedIn: false});
        console.log('come from logout', this.state.isLoggedIn)
    }

    render() {
        let button;
        if (this.state.isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return (
            <div className={'login-logout-system'}>
                <Greeting isLoggedIn={this.state.isLoggedIn}/>
                {button}
            </div>
        )
    }
}
function UserGreeting() {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting() {
    return <h1>Please sign up.</h1>;
}

function Greeting(props){
    if (props.isLoggedIn){
        return UserGreeting()
    }
    return GuestGreeting()
}
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>Login</button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>Logout</button>
    );
}