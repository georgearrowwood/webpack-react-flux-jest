import React, { Component } from 'react';

import dispatcher from '../../dispatcher';
import AddProductForm from './add';

export default class AddProductFormContainer extends Component {

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
    return (
      <AddProductForm
        handleTitleChange={this.handleTitleChange}
        addHandle={this.add}
      />
    )
  }
}

function guid() {
  return Math.floor(Math.random() * (1000000 - 10000) + 10000);
}
