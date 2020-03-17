import React from "react"
import ReactDOM from "react-dom"
import { ApolloProvider } from "react-apollo"
import client from "./utils/apolloClient"

// import { Provider } from "react-redux"
// import store from "./store"

import App from "./App"

ReactDOM.render(
  <ApolloProvider client={client}>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </ApolloProvider>,
  document.getElementById("root")
)
