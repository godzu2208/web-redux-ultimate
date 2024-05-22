import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/esm/Table";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsers, deleteUserRedux } from "../actions/action";

const TableUser = (props) => {

    const listUsers = useSelector((state) => state.user.listUsers);
    const isLoading = useSelector((state) => state.user.isLoading);
    const isError = useSelector((state) => state.user.isError);
    const dispatch = useDispatch();

    const handleDeleteUser = (user) => {
        dispatch(deleteUserRedux(user.id));
    }
    const handleEditUser = (user) => {
        alert("Edit")
    }

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch])


    return (
        <>
            <Container>
                <br />
                <h2>Table Users</h2>
                <br></br>
                <Table>
                    <table class="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Email</th>
                                <th scope="col">Username</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isError === true ?
                                <>
                                    <div>Something is wrong !!! Please try again ...</div>
                                </>
                                :
                                <>
                                    {isLoading === true ?
                                        <>
                                            <div>Loading data ...</div>
                                        </>
                                        :
                                        <>
                                            {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                                                return (
                                                    <tr key={`users-${index}`}>
                                                        <td>{index + 1}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.username}</td>
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
                                                                onClick={() => handleDeleteUser(item.id)}>
                                                                Delete
                                                            </button>
                                                        </td>

                                                    </tr>
                                                )
                                            })}
                                        </>}

                                </>}

                        </tbody>
                    </table>
                </Table>
            </Container>
        </>
    )
}
export default TableUser;