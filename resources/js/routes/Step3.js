import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

import { Range } from '../components/input/index';
import { QuestionTitle } from '../components/index';

import '../../sass/index.scss';
import '../components/input/range.scss';

const Step3 = (props) => {
  const { register, handleSubmit } = useForm();
  const { state, actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("./result");
  };

  return (
    <>
    <header>
      <h2>問１　あなたと地域とのかかわりや日ごろ感じておられることについてお伺いします。</h2>
    </header>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="question">
        <QuestionTitle
          title="６）現在、あなたはどの程度幸せですか？"
          excerpt="下の"
        />
        <div className="slideBar">
          <Range inputName="q1_6" inputMin="0" inputMax="100" register={register} />
        </div>
      </div>
    </form>
    </>
  );

};

export default withRouter(Step3);
