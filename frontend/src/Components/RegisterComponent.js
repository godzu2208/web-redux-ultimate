import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { createNewUserRedux } from '../actions/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
const RegisterComponent = (props) => {
    /*
     khai bao email, password, username
    */
    const history = useHistory();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const isCreating = useSelector((state) => state.user.isCreating);
    const isRegistering = useSelector((state) => state.user.isRegistering);
    const [passwordMismatchError, setPasswordMismatchError] = useState(false);
    const [checkedpassword, setcheckedpassword] = useState(false);
    const handleClickAddNewUser = () => {
        console.log(">> check data", email, password, username, confirmPassword);
        let a = password;
        let b = confirmPassword;
        if (a === b) {
            toast.success("Register Success!");
            dispatch(createNewUserRedux(email, password, username));
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setUsername("");
            setPasswordMismatchError(false);
            setcheckedpassword(true);
            history.push('/home');
        } else {
            setPasswordMismatchError(true);
            setcheckedpassword(false);
            console.log("1")
        }

    }
    // useEffect(() => {

    // })
    return (
        <>
            <Container>
                <br />
                <h2>Register</h2>
                <br />
                <Form style={{ width: '600px' }}>
                    {/* email */}
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email}
                            onChange={(event) => setEmail(event.target.value)}

                        />
                    </Form.Group>
                    {/* username */}
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" value={username}
                            onChange={(event) => setUsername(event.target.value)} />
                    </Form.Group>

                    {/* password */}
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                        />
                    </Form.Group>
                    <span>
                        {passwordMismatchError && <p style={{ color: 'red' }}>Passwords do not match. Please try again.</p>}
                    </span>
                    <span>
                        {checkedpassword && <p style={{ color: 'green' }}>Register Success</p>}
                    </span>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="primary" type="button" disabled={isCreating}
                            onClick={() => handleClickAddNewUser()} >
                            Register
                        </Button>
                        <Button variant="primary" type="button" disabled={isRegistering}
                            onClick={() => handleClickAddNewUser()} >
                            Log In
                        </Button>
                    </div>
                </Form>
            </Container >
        </>
    )
}
export default RegisterComponent;