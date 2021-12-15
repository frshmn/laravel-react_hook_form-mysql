import React from "react";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Result = (props) => {
  const { state } = useStateMachine(updateAction);
  return (
    <>
      <div className="result">
      <h2>地域社会の「つながり」<br/>についてのアンケート</h2>
      <p>
      アンケートは以上で終了です。<br />
      ご協力まことにありがとうございました。
      </p>
      </div>
    </>
  );
};

export default Result;
