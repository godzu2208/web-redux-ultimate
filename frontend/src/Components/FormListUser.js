import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
const FormListUser = (props) => {
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
                        <Form.Control type="email" />
                    </Form.Group>
                    {/* password */}
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    {/* username */}
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" />
                    </Form.Group>
                    <Button variant="primary" type="button" >
                        Submit
                    </Button>
                </Form>
            </Container >
        </>
    )
}
export default FormListUser;