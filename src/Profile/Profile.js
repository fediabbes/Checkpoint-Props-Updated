import PropTypes from "prop-types";

function Profile({ fullName, bio, profession, children, HandleName, user }) {
  return (
    <div
      className="maindiv"
      style={{
        display: "flex",
        width: "56%",
        margin: "auto",
        marginTop: "54px",
        textAlign: " center",
        padding: "31px",
        backgroundColor: "#2253546e",
        boxShadow: "1px 1px 1px 1px",
      }}
    >
      {children}

      <h1 style={{ color: "#084476" }}> {fullName} </h1>
      <h2 style={{ color: "#d2dadd" }}> {profession}</h2>
      <h3 style={{ color: "#d2dadd" }}> {bio} </h3>

      <button
        onClick={() => HandleName(user.name)}
        style={{
          backgroundColor: "rgb(40, 155, 201)",
          color: "#0a0252",
          fontSize: "14px",
          width: "60px",
          height: "63px",
          marginTop: "100px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        click me
      </button>
    </div>
  );
}
export default Profile;
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  user: PropTypes.object,
  HandleName: PropTypes.func,
};
Profile.defaultProps = {
  fullName: "Fedi abbes",
};
