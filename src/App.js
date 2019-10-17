import React from "react";
import "./App.css";
import { Button, TYPES, SIZES } from "./components/Button"
function App() {
  return (
    <button
      text='Submit'
      type='submit'
      onClick={() => {}}
      buttonType={TYPES.SUCCESS}
      buttonSize={SIZES.LARGE}
      />
  );
}

export default App;
