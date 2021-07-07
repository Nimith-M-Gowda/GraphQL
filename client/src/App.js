import BookList from './components/BookList'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import AddBook from './components/AddBook'
import AddAuthor from './components/AddAuthor'
import AuthorList from './components/AuthorList'
import Filteranimals from './components/filteranimals'


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <>
        <h1>Reading List</h1>
        <BookList />
        <AddBook />
        <Filteranimals />
        <center>
          <AddAuthor />
          <AuthorList />
        </center>
      </>
    </ApolloProvider>
  );
}

export default App;
