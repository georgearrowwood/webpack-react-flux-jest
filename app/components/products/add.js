import React, { Component } from 'react';

export default class AddProductForm extends Component {

  render(){
    return (
      <div>
        Add Product:
        <div>
          <input type="text" onChange={this.props.handleTitleChange} value={this.props.titleValue} />
          <button onClick={this.props.addHandle}>
            Add
          </button>
        </div>
      </div>
    );
  };

};
