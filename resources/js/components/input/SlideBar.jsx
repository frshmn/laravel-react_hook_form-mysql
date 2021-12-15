import React, { useRef, UseEffect } from 'react';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import './components.scss';

export default class SlideBar extends React.Component {
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: -400, y: 200
    }
  };
  handleDrag = (e, ui) => {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });

  };
  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {deltaPosition, controlledPosition} = this.state;

    return (
      <div className="slideBar__container">
      <Draggable
        axis="x"
        bounds="parent"
        onDrag={this.handleDrag}
         {...dragHandlers}
      >
        <p>{Math.round(deltaPosition.x.toFixed(0) / 2.4)}%</p>
      </Draggable>
        <input type="hidden" value={deltaPosition.x.toFixed(0) / 2.4} />
      </div>
    )

  }
}
