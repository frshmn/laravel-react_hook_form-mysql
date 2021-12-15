import React from 'react';
import Draggable from 'react-draggable'; // Both at the same time

export default class CheckBox extends React.Component {
  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };
  render() {
    const { name } = this.props;
    return (
      <Draggable
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
      >
        <div className = "draggableCheck__item">
          <span>{name}</span>
        </div>
      </Draggable>
    )
  }
}
