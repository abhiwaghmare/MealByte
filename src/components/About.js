// import User from "./User";
import UserClass from "./UserClass";

const About = () => {

  return (
    <div>
      <h1>About Us page</h1>
      {/* <User
        Name={"Abhishek Waghmare (Functional)"}
        Location={"Nanded"}
        Contact={"9921197798"}
      /> */}
      <UserClass
        Name={"Abhishek Waghmare (Class)"}
        Location={"Nanded (Class)"}
        Contact={"9921197798"}
      />
    </div>
  );
};

export default About;
