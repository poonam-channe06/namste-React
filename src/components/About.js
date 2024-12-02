import userContext from "../utils/userContext";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {

  return (
    <div>
      <h1>About</h1>
      <h2>This is namaste react Web series</h2>
      <div>
        USER
        <userContext.Consumer>
          {({loggednUser})=>(
            <h1 className="font-bold">{loggednUser}</h1>
          )}
        </userContext.Consumer>
      </div>
      <User
        name={"Poonam channe (function)"}
        location={"Mubai funtion"}
        twitter={"@poonamc 10"}
        // count={"0"}
      />
      <UserClass
        name={"Poonam channe (class based)"}
        location={"Mumbai class"}
        twitter={"@poonamc 06"}
        // count={"0"}
        // count2={"2"}
      />
    </div>
  );
};

export default About;
