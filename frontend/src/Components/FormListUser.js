import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { createNewUserRedux } from '../actions/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { dispatch } from '../
const FormListUser = (props) => {
    /*
     khai bao email, password, username
    */
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const isCreating = useSelector((state) => state.user.isCreating);

    
    const handleClickAddNewUser = () => {
        dispatch(createNewUserRedux(email, password, username));
        setEmail("");
        setPassword("");
        setUsername("");

    }
    // useEffect(() => {

    // })
    return (
        <>
            <Container>
                <br />
                <h2>Creat a new user</h2>
                <br />
                <Form style={{ width: '600px' }}>
                    {/* email */}
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </Form.Group>
                    {/* password */}
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </Form.Group>
                    {/* username */}
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" value={username}
                            onChange={(event) => setUsername(event.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="button" disabled={isCreating}
                        onClick={() => handleClickAddNewUser()} >
                        Submit
                    </Button>
                </Form>
            </Container >
        </>
    )
}
export default FormListUser;