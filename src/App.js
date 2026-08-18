import React, { useState } from "react";

function App() {

  const [isLoggedIn, setLogin] = useState(false);
  return (
    <>
      {isLoggedIn ? (
        <h2>Welcome Student</h2>
        ) : (
          <div>
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

                <div>
                  <button type="button" onClick={() => setLogin(true)}>Login</button>
                </div>
                
              </form>
            </div>
          </div>
        )}
    </>
  );

}

export default App;
