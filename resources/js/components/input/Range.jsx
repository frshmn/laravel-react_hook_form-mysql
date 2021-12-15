import React, {useEffect} from 'react';
import Icon0 from '../../images/0@2x.png'
import Icon1 from '../../images/1@2x.png'
import Icon2 from '../../images/2@2x.png'
import Icon3 from '../../images/3@2x.png'
import Icon4 from '../../images/4@2x.png'
import Icon5 from '../../images/5@2x.png'
import Icon6 from '../../images/6@2x.png'
import Icon7 from '../../images/7@2x.png'
import Icon8 from '../../images/8@2x.png'
import Icon9 from '../../images/9@2x.png'
import Icon10 from '../../images/10@2x.png'

const Range = ({ inputName, inputMin, inputMax, register}) => {

  React.useEffect(() => {
     const rangeSlider = document.getElementById("rangeSlider__line" + inputName);
     const rangeBullet = document.getElementById("rangeSlider__label" + inputName);

     rangeSlider.addEventListener("input", showSliderValue, false);
     function showSliderValue() {
       if(rangeSlider.value < 10) {
         rangeBullet.innerHTML = "<img src='" + Icon0 + "' alt='0' />"
       } else if( 10 <= rangeSlider.value && rangeSlider.value < 20 ) {
         rangeBullet.innerHTML = "<img src='" + Icon1 + "' alt='1' />"
       } else if( 20 <= rangeSlider.value && rangeSlider.value < 30 ) {
         rangeBullet.innerHTML = "<img src='" + Icon2 + "' alt='1' />"
       } else if( 30 <= rangeSlider.value && rangeSlider.value < 40 ) {
         rangeBullet.innerHTML = "<img src='" + Icon3 + "' alt='1' />"
       } else if( 40 <= rangeSlider.value && rangeSlider.value < 50 ) {
         rangeBullet.innerHTML = "<img src='" + Icon4 + "' alt='1' />"
       } else if( 50 <= rangeSlider.value && rangeSlider.value < 60 ) {
         rangeBullet.innerHTML = "<img src='" + Icon5 + "' alt='1' />"
       } else if( 60 <= rangeSlider.value && rangeSlider.value < 70 ) {
         rangeBullet.innerHTML = "<img src='" + Icon6 + "' alt='1' />"
       } else if( 70 <= rangeSlider.value && rangeSlider.value < 80 ) {
         rangeBullet.innerHTML = "<img src='" + Icon7 + "' alt='1' />"
       } else if( 80 <= rangeSlider.value && rangeSlider.value < 90 ) {
         rangeBullet.innerHTML = "<img src='" + Icon8 + "' alt='1' />"
       } else if( 90 <= rangeSlider.value && rangeSlider.value < 100 ) {
         rangeBullet.innerHTML = "<img src='" + Icon9 + "' alt='1' />"
       } else {
         rangeBullet.innerHTML = "<img src='" + Icon10 + "' alt='1' />"
       }
       // rangeBullet.innerHTML = rangeSlider.value;
       let bulletPosition = (rangeSlider.value /rangeSlider.max);
       rangeBullet.style.left = (bulletPosition * 278) + "px";
     }
   }, []);

  return (
    <div className="rangeSlider">
      <span id={"rangeSlider__label" + inputName} className="rangeSlider__label">
        <img src={Icon5} alt="smile" />
      </span>
      <input id={"rangeSlider__line" + inputName} className="rangeSlider__input" type="range" name={inputName} min={inputMin} max={inputMax} {...register(inputName)} />
    </div>
  )
};
export default Range;
