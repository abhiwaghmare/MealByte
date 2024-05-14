import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log(this.props.Name + "Child Constructor");
  }

  componentDidMount() {
    console.log(this.props.Name + "Child componentDidMount");
  }

  render() {
    const { Name, Location, Contact } = this.props;
    console.log(this.props.Name + "Child Render");
    return (
      <div className="user-card">
        <h2>Name: {Name}</h2>
        <h3>Count = {this.state.count}</h3>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click
        </button>
        <h3>Location: {Location}</h3>
        <h4>Contact: {Contact}</h4>
      </div>
    );
  }
}

export default UserClass;
