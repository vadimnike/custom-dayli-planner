import React from 'react';
import SelectComponent from '../blocks/SelectComponent';

export default class EventModal extends React.Component {
  state = {
    open: this.props.open,
    startDatesArray: this.props.startDatesArray,
    endDatesArray: this.props.startDatesArray
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.open,
      startDatesArray: nextProps.startDatesArray,
      endDatesArray: nextProps.startDatesArray
    })
  };

  handleCloseModal = () => {
    this.props.handleCloseModal();
  };

  render() {
    return (
      <form className='modal event-modal'>
        <i className="ic ic-close close-modal" onClick={this.handleCloseModal}></i>
        <div className="modal-wrap">
          <h2 className='title'>Event form</h2>
          <SelectComponent
            label='Start time of event'
            name='event_start_date'
            collection={this.state.startDatesArray}
          />

          <SelectComponent
            label='Finish time of event'
            name='event_end_date'
            collection={this.state.startDatesArray}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
