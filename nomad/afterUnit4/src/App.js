import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const onClick = () => setValue(prev => prev + 1);
  console.log('rendered');
  return (
    <div>
      <p>{value}</p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
