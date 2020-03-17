import gql from "graphql-tag"

const USER_QUERY = gql`
  query user {
    user(id: 6) {
      name
      email
      id
    }
  }
`

export default USER_QUERY
