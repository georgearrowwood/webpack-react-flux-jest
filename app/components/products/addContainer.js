import React, { Component } from 'react';

import productsActions from '../../actions/products';
import AddProductForm from './add';

export default class AddProductFormContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {title: ''};
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.add = this.add.bind(this);
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  add(e){
    productsActions.create({title: this.state.title});
    this.setState({title: ''});
  }

  render(){
    return (
      <AddProductForm
        handleTitleChange={this.handleTitleChange}
        addHandle={this.add}
        titleValue={this.state.title}
      />
    )
  }
}
