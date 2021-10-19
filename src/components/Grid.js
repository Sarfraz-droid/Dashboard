import React,{useState} from 'react'

function Table() {

}

function Grid({Data,setData}) {

    const [Form, setForm] = useState({
        state: false,
        id: 0,
        data : {
            first_name : "",
            last_name : "",
            email : "",
        }
    })

    function ChangeData(e)
    {
        e.preventDefault()

        setData((data) => {
            return [
                ...data.filter((item) => item.id !== Form.id),
                {
                    id: Form.id,
                    first_name: Form.data.first_name,
                    last_name: Form.data.last_name,
                    email: Form.data.email
                }
            ]
        })
    }

    function showForm() {
        return(
            <div>
                <h2>
                    Change for id : {Form.id}
                </h2>
                <form onSubmit={(e) => ChangeData(e)}>
                    <input type="text" name="First Name" placeholder="First Name" value={Form.first_name} onChange={(e) => setForm({
                        state: Form.state,
                        id: Form.id,
                        data : {
                            ...Form.data,
                            first_name: e.target.value
                        }
                    })} />
                    <input type="text" name="Last Name" placeholder='Last Name' value={Form.first_name} onChange={(e) => setForm({
                        state: Form.state,
                        id: Form.id,
                        data : {
                            ...Form.data,
                            last_name: e.target.value
                        }
                    })} />
                    <input type="email" name="Email" placeholder="Email" value={Form.first_name} onChange={(e) => setForm({
                        state: Form.state,
                        id: Form.id,
                        data : {
                            ...Form.data,
                            email: e.target.value
                        }
                    })} />
                    <button>
                        Submit
                    </button>
                </form>
            </div>
        )
    }

    return (
        <div className="Grid">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>email</th>
                        <th>Edit</th>
                    </tr>
                </thead>

                <tbody>
                    {Data.map((info,index) => {
                        return (
                            <tr>
                                <td>{info.id}</td>
                                <td>{info.first_name}</td>
                                <td>{info.last_name}</td>
                                <td>{info.email}</td>
                                <td>
                                    <button onClick={() => {
                                        setForm({
                                            state: true,
                                            id : info.id,
                                            data: Form
                                        })
                                    }}>Edit</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            {Form.state ? showForm() : null}
        </div>
    )
}

export default Grid
