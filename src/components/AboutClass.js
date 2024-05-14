import { Component } from "react";
import UserClass from "./UserClass";

class AboutClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us page</h1>
        <UserClass
          Name={"First Child (Class)"}
          Location={"Nanded (Class)"}
          Contact={"9921197798"}
        />

<UserClass
          Name={"Second Child (Class)"}
          Location={"Nanded (Class)"}
          Contact={"9921197798"}
        />

<UserClass
          Name={"Third Child (Class)"}
          Location={"Nanded (Class)"}
          Contact={"9921197798"}
        />
      </div>
    );

  }
}

export default AboutClass;
