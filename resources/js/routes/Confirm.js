import React from "react";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import { Link } from "react-router-dom"

const Confirm = (props) => {
  const { state } = useStateMachine(updateAction);
  console.log(JSON.stringify(state, null, 2))
  return (
    <>
    <div className="confirm">
      <h1>回答内容の確認:</h1>
      <h2>問１　あなたと地域とのかかわりや日ごろ感じておられることについてお伺いします。</h2>
      <dl className="confirmList">
        <dt>１）このアンケートが配られた町会は次の中のどれですか？</dt>
        <dd>回答：{state.q1_1}</dd>
        <dt>２）あなたが１）の町会に所属しているのは、次のうちいずれによるものですか？</dt>
        <dd>回答：{state.q1_2}</dd>
        <dt>３）その町会にあなたがお住まいになっている場合、住居の形態は次のうちどれですか？</dt>
        <dd>回答：{state.q1_3}{state.q1_3_99}</dd>
        <dt>４）あなたの世帯自体はこの町会に参加していますか？</dt>
        <dd>回答：{state.q1_4}</dd>
        <dt>５）地域における活動のうち、あなたが通常参加しているものはなんですか？</dt>
        <dd>回答：{state.q1_5}</dd>
        <dt>６）現在、あなたはどの程度幸せですか？</dt>
        <dd>回答：{state.q1_6}</dd>
        <dt>７）現在あなたの健康状態はいかがですか？</dt>
        <dd>回答：{state.q1_7}</dd>
        <dt>８）同じ町会に住んでいる人々全般は、おおまかに言ってどれくらい幸せだと思いますか？</dt>
        <dd>回答：{state.q1_8}</dd>
      </dl>
      <input type="hidden" name="q1_1" value={state.q1_1} />
      <div className="confirmLink">
        <Link to="/result">回答を送信する</Link>
      </div>
    </div>
    </>
  );
};

export default Confirm;
