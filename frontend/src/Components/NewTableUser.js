import { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/esm/Table";
import { useDispatch } from "react-redux";
import { fetchUserRequestApi } from "../actions/action";
import { useSelector } from "react-redux";
const NewTableUser = () => {

    const userListApi = useSelector((state) => state.user.userListApi)
    const dispatch = useDispatch();
    const handleDeleteUser = (user) => {
        console.log("delete user :", user);
    }
    const handleEditUser = (user) => {
        console.log("edit", user);
    }
    useEffect(() => {
        dispatch(fetchUserRequestApi());
    }, [dispatch])


    return (
        <>
            <Container>
                <br />
                <h2>New Table User</h2>
                <br />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Avatars</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userListApi && userListApi.length > 0 && userListApi.map((item, index) => {
                            return (
                                <tr key={`user-${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{item.first_name} {item.last_name}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <img src={item.avatar}
                                            alt={item.id}
                                            style={{ width: '50px', height: '50px', borderRadius: '50%' }}>
                                        </img>
                                    </td>
                                    <td>
                                        <button
                                            style={{ margin: '2px' }}
                                            className="btn btn-warning"
                                            onClick={() => handleEditUser(item)}>
                                            Edit
                                        </button>
                                        <button
                                            style={{ margin: '2px' }}
                                            className="btn btn-danger"
                                            onClick={() => handleDeleteUser(item)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>

                            )
                        })}

                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default NewTableUser;