import React from "react"
import Header from "../../components/Header"

import Query from "../../components/Query"
import USER_QUERY from "../../queries/user/user.js"

const HeaderContainer = props => {
  return (
    <Query query={(USER_QUERY)}>
      {({ data }) => {
        return <Header {...props} />
      }}
    </Query>
  )
}

export default HeaderContainer
