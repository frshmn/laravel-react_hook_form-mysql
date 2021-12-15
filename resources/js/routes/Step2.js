import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

import { Range } from '../components/input/index';
import { QuestionTitle } from '../components/index';

import '../../sass/index.scss';
import '../components/input/range.scss';

const Step2 = (props) => {
  const { register, handleSubmit } = useForm();
  const { state, actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("./confirm");
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
          excerpt="下のスライドを動かして選択してください。"
        />
        <div className="slideBar">
          <Range inputName="q1_6" inputMin="0" inputMax="110" register={register} />
        </div>
      </div>
      <div className="question">
        <QuestionTitle
          title="７）現在あなたの健康状態はいかがですか？"
          excerpt="下のスライドを動かして選択してください。"
        />
        <div className="slideBar">
          <Range inputName="q1_7" inputMin="0" inputMax="110" register={register} />
        </div>
      </div>
      <div className="question">
        <QuestionTitle
          title="８）同じ町会に住んでいる人々全般は、おおまかに言ってどれくらい幸せだと思いますか？"
          excerpt="下のスライドを動かして選択してください。"
        />
        <div className="slideBar">
          <Range inputName="q1_8" inputMin="0" inputMax="110" register={register} />
        </div>
      </div>
      <input type="submit" value="次の回答へ進む"/>
    </form>
    </>
  );

};

export default withRouter(Step2);
