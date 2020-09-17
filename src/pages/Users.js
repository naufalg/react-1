import React from 'react'
import { useParams } from 'react-router-dom'


export default function Users() {
    let {id} = useParams()
    return (
        <div>
            <h1>
                Hello, {id}
            </h1>
        </div>
    )
}
