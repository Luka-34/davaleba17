import React from 'react'
import { useParams } from 'react-router-dom'

const facts = {
  1: 'Spider-Man was created by Stan Lee and Steve Ditko.',
  2: 'Spider-Man first appeared in 1962.',
  3: "It’s Spider-Man, not Spider Man.",
}

const Fact = () => {
  const { factId } = useParams()
  const fact = facts[factId]

  return (
    <div>
      {fact ? (
        <p>{fact}</p>
      ) : (
        <p>Fact could not be found</p>
      )}
    </div>
  )
}

export default Fact
