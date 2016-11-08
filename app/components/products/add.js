import React, { Component } from 'react';
import dispatcher from '../../dispatcher';

class AddProductForm extends Component {

  constructor(props) {
    super(props);
    this.state = {title: ''};
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.add = this.add.bind(this);
  }

  handleTitleChange(event) {
    console.log('v:', event.target.value);
    this.setState({title: event.target.value});
  }

  add(e){
    // e.preventDefault();
    let id = guid();
    console.log('page add');
    dispatcher.dispatch({
      action: 'product-add',
      product: {
        id: id,
        title: this.state.title
      }
    });
    this.state.title = '';
  }

  render(){
    return <div>
      <input type="text" onChange={this.handleTitleChange}/>
      <button onClick={this.add}>
        Add new product
      </button>
    </div>;
  }
}

function guid() {
  return Math.floor(Math.random() * (1000000 - 10000) + 10000);
}

export default AddProductForm;
