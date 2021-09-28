// import React from "react";

const App = () => {
  const onClickButton = () => {
    alert("OK");
  };

  const constentStyle = {
    color: "blue",
    fontSize: "20px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <p style={constentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
