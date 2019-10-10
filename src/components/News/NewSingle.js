import React from 'react'

const NewSingle = ({ item }) => (
    <li>
        <p>{item.title}</p>
    </li>
)

export default NewSingle

// 1. create stateless component
// 1b. pass prop items