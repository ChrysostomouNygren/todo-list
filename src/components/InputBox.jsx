import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";

function InputBox(props) {
  const [task, setTask] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setTask(value);
  }

  function clearForm(){
      setTask("")
}
  


  //   Hitta ngn sätt så att input-boxen rensas efter klick!
  return (
    <form id="formish"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        onChange={handleChange}
        value={task}
        autoFocus
      />
      <button id="add" onClick={() => [props.add(task), clearForm()]}>
        <img
          alt="svgImg"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAyNCAyNCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDEyIDIgQyA2LjQ4ODk5NzEgMiAyIDYuNDg4OTk3MSAyIDEyIEMgMiAxNy41MTEwMDMgNi40ODg5OTcxIDIyIDEyIDIyIEMgMTcuNTExMDAzIDIyIDIyIDE3LjUxMTAwMyAyMiAxMiBDIDIyIDYuNDg4OTk3MSAxNy41MTEwMDMgMiAxMiAyIHogTSAxMiA0IEMgMTYuNDMwMTIzIDQgMjAgNy41Njk4Nzc0IDIwIDEyIEMgMjAgMTYuNDMwMTIzIDE2LjQzMDEyMyAyMCAxMiAyMCBDIDcuNTY5ODc3NCAyMCA0IDE2LjQzMDEyMyA0IDEyIEMgNCA3LjU2OTg3NzQgNy41Njk4Nzc0IDQgMTIgNCB6IE0gMTEgNyBMIDExIDExIEwgNyAxMSBMIDcgMTMgTCAxMSAxMyBMIDExIDE3IEwgMTMgMTcgTCAxMyAxMyBMIDE3IDEzIEwgMTcgMTEgTCAxMyAxMSBMIDEzIDcgTCAxMSA3IHoiPjwvcGF0aD48L3N2Zz4="
        />
      </button>
    </form>
  );
}

export default InputBox;
