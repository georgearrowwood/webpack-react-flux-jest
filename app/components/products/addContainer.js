import React, { Component } from 'react';

import productsActions from '../../actions/products';
import AddProductForm from './add';

export default class AddProductFormContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {title: ''};
    this.onTitleChange = this.onTitleChange.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }

  onTitleChange(event) {
    this.setState({title: event.target.value});
  }

  formSubmitHandler(){
    productsActions.create({title: this.state.title});
    this.setState({title: ''});
  }

  render(){
    return (
      <AddProductForm
        handleTitleChange={this.onTitleChange}
        addHandle={this.formSubmitHandler}
        titleValue={this.state.title}
      />
    )
  }
}
