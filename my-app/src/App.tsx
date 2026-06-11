import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <Greeting name="Loki"  city="Rajasthan" age={24} isStudent={true}  hobby="singing" />
      <Greeting name="Arjun" city="Delhi"     age={21} isStudent={false} hobby="dancing" />
      <Greeting name="Priya" city="Mumbai"    age={23}                   hobby="playing" />
    </div>
  );
}

export default App;