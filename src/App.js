import React, { useState } from "react";

function App() {

  const [isLoggedIn, setLogin] = useState(false);
  return (
    <>
      <div>
        <h2>WELCOME TO THE FORM</h2>
      </div>
      <div>
        <form method="GET">
          <label>Name:</label>
          <input type="text" /> <br />
          <label>Dept:</label>
          <input type="text" /> <br />
          <label>RollNo:</label>
          <input type="text" /><br />
          {
            isLoggedIn ? (<h2>Welcome Student</h2>) : 
            (<button type="button" onClick={() => setLogin(true)}>Login</button>)
          }
        </form>
      </div>
    </>
  );

}

export default App;
