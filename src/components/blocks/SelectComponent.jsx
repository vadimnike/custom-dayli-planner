import React from 'react';


export default class SelectComponent extends React.Component{
  state={
    collection:this.props.collection,
    selectedValue: this.props.defaultValue || 'Select date'
  };

  componentWillReceiveProps(nextProps){
    this.setState({
      collection: nextProps.collection,
      selectedValue: nextProps.selectedValue
    })
  };

  onChange = (e)=> {
    this.setState({
      selectedValue: e.target.value
    })
  };

  render(){
    let selectedValue = this.state.selectedValue;
    return(
      <div className="select-wrapper">
        <label>{this.props.label}</label>
        <select name={this.props.name} onChange={this.onChange}>
          {
            this.state.collection.map( item => {
              if( selectedValue === item){
                return <option selected value={item} key={item}>{item}</option>
              } else {
                return <option value={item} key={item}>{item}</option>
              }

            })
          }

        </select>
      </div>

    )
  }
}
