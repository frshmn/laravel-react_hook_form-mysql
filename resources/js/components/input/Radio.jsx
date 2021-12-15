
const checkRadio = (disp, name) => {
  if(document.getElementById(name)) {
    document.getElementById(name).style.display = disp;
  }
}

const Radio = ({ inputFunction, inputType, inputValue, inputName, register }) => {
  if(inputFunction) {
    return(
      <div>
        <input onClick={ () => checkRadio(inputFunction, inputName + "_99") } id={inputValue} type={inputType} name={inputName} value={inputValue} {...register(inputName)} />
        <label htmlFor={inputValue}>
          {inputValue}
        </label>
        <div className="bullet">
          <div className="line zero"></div>
          <div className="line one"></div>
          <div className="line two"></div>
          <div className="line three"></div>
          <div className="line four"></div>
          <div className="line five"></div>
          <div className="line six"></div>
          <div className="line seven"></div>
        </div>
        <span id={inputName + "_99"}><input type="text" name={inputName} {...register(inputName + "_99")}/></span>
      </div>
    )
  } else {
    return (
      <div>
        <input onClick={ () => checkRadio("none", inputName + "_99") } id={inputValue} type={inputType} name={inputName} value={inputValue} {...register(inputName)} />
        <label htmlFor={inputValue}>
          {inputValue}
        </label>
        <div className="bullet">
          <div className="line zero"></div>
          <div className="line one"></div>
          <div className="line two"></div>
          <div className="line three"></div>
          <div className="line four"></div>
          <div className="line five"></div>
          <div className="line six"></div>
          <div className="line seven"></div>
        </div>
      </div>
    )
  }
}
export default Radio;
