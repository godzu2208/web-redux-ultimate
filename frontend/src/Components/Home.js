import 'bootstrap/dist/css/bootstrap.css';

import Header from "./Header";
import FormListUser from './FormListUser';
import TableUser from './TableUser';

const Home = (props) => {
    return (
        <>
            <Header />
            <FormListUser />
            <TableUser />
        </>
    )
}
export default Home;