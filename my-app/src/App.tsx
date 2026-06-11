function App() {
  const myName = "Loki";
  const myAge = 24;
  const myCity = "Rajasthan";
  const isOnline = true;

  return (
    <>
      <h1 className="heading">My Profile</h1>
      <p>Naam: {myName}</p>
      <p>Age: {myAge}</p>
      <p>City: {myCity}</p>
      <p>{isOnline ? "Online hoon" : "Offline hoon"}</p>
      
    </>
  );
}

export default App;