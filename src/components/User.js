const User = (props) => {
  const { name, location, twitter } = props;

  return (
    <div className="user-card">
      <h2>Name : {name}</h2>
      <h2>Location : {location}</h2>
      <h3>Twitter : {twitter}</h3>
    </div>
  );
};

export default User;
