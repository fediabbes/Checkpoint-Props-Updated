import "./App.css";
import imgesc from "./escobar.jpg";
import Profile from "./Profile/Profile";

function App() {
  const fullName = "Pablo Escobar";
  const bio = "the head of the Medellín cartel ";
  const proffesion = "drug dealer";
  const user = { name: fullName };
  const HandleName = (user) => {
    alert(`Hello Don =>  ${user}`);
  };
  return (
    <div className="App">
      <Profile
        fullName={fullName}
        bio={bio}
        profession={proffesion}
        user={user}
        HandleName={HandleName}
      >
        <img src={imgesc} alt="esc" style={{ width: "20%" }} />
      </Profile>
    </div>
  );
}

export default App;
