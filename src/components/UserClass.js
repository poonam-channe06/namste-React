import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  /**A super constructor is a special constructor in the class hierarchy of object-oriented programming languages.
   *  It refers to the constructor of the parent class that is being extended in the current class.
   *  The purpose of using the super constructor with a props argument is to inherit the properties of the parent class
   * and also pass in additional properties as arguments to the child class. */

  render() {
    const { name, location, twitter } = this.props;
    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
        <h3>Twitter : {twitter}</h3>
      </div>
    );
  }
}

export default UserClass;
