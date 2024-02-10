import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function UserRead() {
    let [data, setdata] = useState()
    useEffect(() => {
        let result = axios.get("http://localhost:3000/users")
        result.then((item) => {
            setdata(item.data)
        })
    })
    return (

        <table className='table container'>
            <thead>
                <tr>
                    <th >Name</th>
                    <th >Age</th>
                    <th >City</th>
                    <th >Email</th>
                    <th >Edit</th>
                    <th >Delete</th>
                </tr>
            </thead>

            {data?<tbody>
                {data.map((i) => {
                    return (
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>{i.city}</td>
                            <td>{i.email}</td>
                            <td><span className="fa fa-pen-to-square"></span></td>
                            <td><span className="fa fa-trash"></span></td>
                        </tr>
                    )
                })}

            </tbody> : <p>no data</p>}

        </table>

    )
}
