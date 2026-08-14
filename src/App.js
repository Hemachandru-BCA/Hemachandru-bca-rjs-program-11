import React, { useState } from "react";

function App() {

  // TODO 1:
  // Create a state variable named isLoggedIn.
  const [isLoggedIn, setLogin] = useState(false);
  // Initial value should be false.

  // TODO 2:
  // Use a ternary operator to display:
  //
  // If logged in:
  //     Welcome Student
  //
  // Otherwise:
  //     Login button
  // The Login button should use onClick
  // to change the login state.
  if (isLoggedIn == true) {
    React.createElement("h2", null, "Welcome Student");
    console.log('logged in already');
  }
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
