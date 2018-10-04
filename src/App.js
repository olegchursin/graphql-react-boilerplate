import React, {Component} from 'react';
import './css/App.css';

import ApolloClient from 'apollo-boost'
import {ApolloProvider, Query} from 'react-apollo'
import gql from 'graphql-tag'

const client = new ApolloClient({uri: 'https://api-useast.graphcms.com/v1/cjmuvou1w040001dgeezw2a8r/master'})

const POSTS_QUERY = gql `
  {
    posts {
      id
      title
      body
    }
  }
`;

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <p>
              GraphQL/React Boilerplate
            </p>
          </header>
          <section>
            <Query query={POSTS_QUERY}>
              {({loading, data}) => {
                if (loading) 
                  return 'Loading...'
                const {posts} = data;
                return posts.map(post => {
                  return (
                    <div key={post.id}>
                      <h1>{post.title}</h1>
                      <p>{post.body}</p>
                    </div>
                  )
                })
              }}
            </Query>
          </section>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
