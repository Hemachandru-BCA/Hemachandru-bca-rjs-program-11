import React, { useState, useRef } from "react";

function App() {
  const inputRef = useRef();
  const [isLoggedIn, setLogin] = useState(false);
  const [studentName, setStudentName] = useState("");

  function onFocus() {
    const st_nm = inputRef.current.value;
    if (st_nm == "") {
      setLogin(false);
      inputRef.current.focus();
    }
    else {
      setLogin(true);
      setStudentName(st_nm);
    }


  }
  return (
    <>
      {isLoggedIn ? (
        <div>
          <h2>Welcome {studentName}</h2> <br />
        </div>

      ) : (
        <div>
          <div>
            <h2>WELCOME TO THE FORM</h2>
          </div>

          <div>
            <form method="GET">
              <label>Name:</label>
              <input type="text" ref={inputRef} /> <br />
              <label>Dept:</label>
              <input type="text" /> <br />
              <label>RollNo:</label>
              <input type="text" /><br />

              <div>
                <button type="button" onClick={onFocus}>Login</button>
              </div>

            </form>
          </div>
        </div>
      )}
    </>
  );

}

export default App;
