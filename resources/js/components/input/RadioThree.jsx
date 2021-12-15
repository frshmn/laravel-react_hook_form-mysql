const RadioThree = (props) => {
  return (

    <div>
      <input id={props.inputValue} type="radio" name={props.inputName} value={props.buttonName}/>
      <label for={props.inputValue}>
        {props.buttonName}
      </label>
      <div className="check"></div>
    </div>

  )
};
export default RadioThree;
