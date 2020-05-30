import React from "react"
import { useQuery } from "@apollo/react-hooks"

const Query = ({ children, query, id }) => {
  const { data, loading, error } = useQuery(query, {
    errorPolicy: "all",
    variables: { id: id },
    options: {
      errorPolicy: "all",
    },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  return children({ data })
}

export default Query
