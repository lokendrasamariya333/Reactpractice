interface GreetingProps {
  name: string;
  city: string;
  age: number;
  isStudent?: boolean;
  hobby: string;
}

function Greeting({ name, city, age, isStudent, hobby }: GreetingProps) {
  return (
    <>
      <h2>Namaste, {name}!</h2>
      <p>{city} se hoon.</p>
      {isStudent !== undefined && (
        <p>{isStudent ? "Student hai" : "Student nahi hai"}</p>
      )}
      <p>Meri age {age} hai</p>
      <p>My hobby is {hobby}</p>
    </>
  );
}

export default Greeting;