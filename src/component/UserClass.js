import React, { Component } from "react";

export default class UserClass extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "child constructor");

    // create STATE LIKE below
    this.state = {
      userInfo: {
        login: "dummy@gmail.com",
        id: "457821",
        name: "dummy",
        created_at: "24/05/2020",
        avatar_url: "ddssaa.com",
      },
      //   userInfo: {},
    };
    console.log(props);
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ajay-CaTi");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("comp did update");
  }

  componentWillUnmount() {
    // MEANS WHEN THIS COMPONENT WILL DISAPPER FROM WEB PAGE
    console.log("componentWillUnmount");
  }

  render() {
    const { login, id, name, created_at, avatar_url } = this.state.userInfo;

    // debugger;
    return (
      <div>
        <h1>Hello class component</h1>
        <br />
        <div className="user_card">
          <img src={avatar_url} alt={name} width={"200px"} />
          <h1>Hi User</h1>
          <h2>Login: {login}</h2>
          <h2>Name: {name}</h2>
          <h2>Id: {id}</h2>

          <h2>Contact: {created_at}</h2>
        </div>
      </div>
    );
  }
}

//MOUNTING ::-- SHOWING FROM UI
//UNMOUNTING ::-- REMOVING FROM UI WHEN IT WILL UNMOUNT [ GO TO NEST PAGE ]

// IMPORTANTTTTTTTTTTT 2

// constructor -->> state variable created -->> render -->> component render with dummy data --> Now componentDidMount called api call made -->> this.setState() called Mounting Complete

//Now with setState it trigger Reconcillation proces in Update cycle

//Now Updating Begins: -->> REACT TRIGGER render() WITH[ STATE VARIABLE WITH UPDATED NEW API DATA ] -->> React Now Update Dom -->> componentDidUpdate()

// IMPORTANTTTTTTTTTTT 1

// constructor -->> render -->> ReactUpdateDOM -->> setState() -->> render -->> React Update DOM -->> ComponentDidMount

// GOLD GYAAAAAAAAAAAAAAN

// React will first render the component and then make API call to render the data{ IT DID'T WAIT FOR DATA TO RENDER THE COMPONENT }

// render method will return sone jsx thst will show to user

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
