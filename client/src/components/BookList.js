import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import { getBookQuery } from '../queries/query';
import BookDetails from './bookDetails'


class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idholder: '',
        }
    }

    displayBook = () => {
        let data;
        console.log('this.propsthis.props', this.props)
        this.props.data.loading ? data = <h3>Loading....</h3> : data = this.props.data.allbooks.map(e => {
            return <li key={e.id} onClick={() => this.setState({ idholder: e.id })}>{e.name}</li>
        })
        return data;

    }
    render() {


        return (
            <>
                <h3>Book-list</h3>
                <ul>
                    {this.displayBook()}
                </ul>


                <div>
                    <BookDetails val={this.state.idholder} />
                </div>
            </>
        )
    }
}

export default graphql(getBookQuery)(BookList);

