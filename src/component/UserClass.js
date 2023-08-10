import React, { Component } from "react";

export default class UserClass extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "child constructor");

    // create STATE LIKE below
    this.state = {
      count: 0,
    };
    console.log(props, this.state);
  }

  componentDidMount() {
    console.log(this.props.name + "componentDidMount");
  }

  render() {
    console.log("child render");

    // GOLD GYAAAAAAAAAAAAAAN

    // React will first render the component and then make API call to render the data{ IT DID'T WAIT FOR DATA TO RENDER THE COMPONENT }

    // render method will return sone jsx thst will show to user
    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div>
        <h1>Hello class component</h1>
        <br />
        <div className="user_card">
          <h1>Hi User</h1>
          <h2>Name: {name}</h2>
          <h2>Location: {location}</h2>
          <button
            onClick={() => {
              // Never Update State Variables Directly like this.state.count = this.state.count ++;
              this.setState({ count: count + 1 });
            }}
          >
            Click
          </button>
          <h2>State: {count}</h2>
          <h2>Contact: @ajay.info.in</h2>
        </div>
      </div>
    );
  }
}
// CONSTRUCTOR -->> RENDER -->> COMPONENTDIDMOUNT

// Loading == Mounting

// when ever a class called or class instance is createt FIRST Constructor is called when constructor called After it render() is called

// UPDATE STATE VARIABLES
//React Rerender the component when a state variable changes
// this.setState({ count: count + 1, count1: count1 + 1 });

// Loading a classBase component on web page that means creating instance of that class during. CREATION of INSTANCE Constructor get CALLED
// Best Plce to recive PROPS
// AND create STATE VARIABES

// WHEN A NEW INSTANCE OF CLASS CREATED constructor IS CALLED AUTOMATICALLY

// When we call this super(props), we are basically calling the constructor of React. Component. So we can say that super() is a reference to the parent class constructor i.e. React.

// functinal component is a normal js function that return some JSX converted to HTML and Displayed to web page.

// class component is a normal js class that has render method that will return some JSX converted to HTML and Displayed to web page.
