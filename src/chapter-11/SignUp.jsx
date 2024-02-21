import React, { useState, useId } from "react";

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("남자");
  const primaryId = useId();

  const changeHandler = (e) => {
    setName(e.target.value);
  };

  const changeGenderHandler = (e) => {
    setGender(e.target.value);
  };

  const submitBtnClickHandler = (e) => {
    alert(`이름: ${name}, 성별: ${gender}`);
    e.preventDefault();
  };

  return (
    <div>
      <label htmlFor={`${primaryId}-name`}>이름: </label>
      <input
        id={`${primaryId}-name`}
        type="text"
        value={name}
        onChange={changeHandler}
      ></input>
      <br />
      <label htmlFor={`${primaryId}-gender`}>성별: </label>
      <select
        id={`${primaryId}-gender`}
        value={gender}
        onChange={changeGenderHandler}
      >
        <option value="남자">남자</option>
        <option value="여자">여자</option>
      </select>
      <br />
      <button onClick={submitBtnClickHandler}>보내!</button>
    </div>
  );
};

export default SignUp;
