import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is namaste react Web series</h2>
      <User
        name={"Poonam channe (function)"}
        location={"Mubai funtion"}
        twitter={"@poonamc 10"}
      />
      <UserClass
        name={"Poonam channe (class based)"}
        location={"Mumbai class"}
        twitter={"@poonamc 06"}
      />
    </div>
  );
};

export default About;
