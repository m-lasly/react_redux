import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';


class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li onClick={() => this.props.selectBook(book)}

           key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //Whatever is returnend will show up as props inside of BookList
  return {books: state.books};

}

//Anything returend from this function will en up as props on the BookList container
function mapDispatchToProps(dispatch) {
  //Whanever selectBook is called , the result should be passed to all of our reducers

  return bindActionCreators({selectBook: selectBook},dispatch );

}

// Promote BookList from a component to container -it needs to know about
//this new dispatch method, selectBook. Make it available as props
export default connect(mapStateToProps,mapDispatchToProps)(BookList);
