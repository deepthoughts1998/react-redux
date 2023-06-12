import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { show } from "../features/Security";

function Password() {
  const showProperty = useSelector((state) => state.security.value);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  return (
    <div style={{ display: showProperty.showNotClickedPassword }}>
      <input
        type="text"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button
        onClick={() => {
          dispatch(show(password))
          setPassword("");
        }}
      >
        Show
      </button>
    </div>
  );
}

export default Password;
