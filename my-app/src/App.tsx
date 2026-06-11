import Greeting from "./Greeting";

interface Student {
  id: number;
  name: string;
  city: string;
  age: number;
  isStudent: boolean;
  hobby: string;
}

const students: Student[] = [
  { id: 1, name: "Loki",  city: "Rajasthan", age: 24, isStudent: true,  hobby: "singing" },
  { id: 2, name: "Arjun", city: "Delhi",     age: 21, isStudent: false, hobby: "dancing" },
  { id: 3, name: "Priya", city: "Mumbai",    age: 23, isStudent: true,  hobby: "playing" },
  { id: 4, name: "Raju",  city: "Jaipur",    age: 22, isStudent: false, hobby: "cricket" },
];

function App() {
  return (
    <div>
      {students.map((student) => (
        <Greeting
          key={student.id}
          name={student.name}
          city={student.city}
          age={student.age}
          isStudent={student.isStudent}
          hobby={student.hobby}
        />
      ))}
    </div>
  );
}

export default App;