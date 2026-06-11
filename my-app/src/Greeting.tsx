interface GreetingProps {
  name: string;
  city: string;
  age: number;
  isStudent?: boolean;
  hobby : string;
}

function Greeting({ name, city, age, isStudent, hobby }: GreetingProps) {
  return (
    <>
      <h2>Namaste, {name}!</h2>
      <p>{city} se hoon.</p>
      {isStudent !== undefined && <p>{isStudent ? "student hai" : "student nahi hai"}</p>}
      <p>meri age {age} hai</p>
      <p>my hobby is {hobby}</p>
    </>
  );
}

export default Greeting;