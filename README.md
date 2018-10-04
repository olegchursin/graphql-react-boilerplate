# GraphQL/React Boilerplate

### Quickstart
`$ npx create-react-app app-name`
`yarn add apollo-boost react-apollo graphql`
`yarn add graphql-tag`

## GraphQL API
- Login/Signup to [GrapCMS](https://graphcms.com/)
- Define your schema/models
- Create content
- Test your query with APIExplorer

## Install Apollo Devtools
- [Chrome](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm?hl=en-US)

## Frontend
- Import `ApolloClient`
- Create `client` object, providing your Apollo API `uri` (from API above)
- Wrap your app in it
- Define a query

#### Sample `App.js` file
```JSX
import React, {Component} from 'react';
import './App.css';

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
              GraphQL Practice
            </p>
          </header>
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
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
```

