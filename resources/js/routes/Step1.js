import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

import { Radio } from '../components/input/index';
import { QuestionTitle } from '../components/index';

import '../../sass/index.scss';
import '../components/input/radio.scss';

const Step1 = props => {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = data => {
    actions.updateAction(data);
    props.history.push("./step2");
  };


  return (
    <>
    <header>
      <h2>問１　あなたと地域とのかかわりや日ごろ感じておられることについてお伺いします。</h2>
    </header>
    <form onSubmit={handleSubmit(onSubmit)}>

      <input type="submit" value="次の回答へ進む"/>
    </form>
    <footer></footer>
    </>
  );
};
export default withRouter(Step1);
