const RadioFour = (props) => {
  return (

    <div>
      <input id={props.inputValue} type="radio" name={props.inputName} value={props.buttonName}/>
      <label for={props.inputValue} data-amount={props.buttonName}>
      </label>
    </div>

  )
};
export default RadioFour;
