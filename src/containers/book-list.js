import React, {Component} from "react";

import {connect} from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>

      )
    });
  }

  render() {
    return (
      <ul className="list-group col-md-4">
        {this.renderList()}
      </ul>


    )
  }
}

function mapStateToProps(state) {
  //whatever is returned willl show up as props inside of BookList
  return {books: this.state.books};
}


export default connect(state)(BookList);
