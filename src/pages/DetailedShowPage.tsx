import React from "react"
import { useParams } from "react-router-dom"

const DetailedShowPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div>
      <h1>Show Details for ID: {id}</h1>
    </div>
  )
}

export default DetailedShowPage
