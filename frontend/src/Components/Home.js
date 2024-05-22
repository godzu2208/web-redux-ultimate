import 'bootstrap/dist/css/bootstrap.css';

import Header from "./Header";
import FormListUser from './FormListUser';
import TableUser from './TableUser';
import NewTableUser from './NewTableUser';
const Home = (props) => {
    return (
        <>
            <Header />
            <FormListUser />
            <TableUser />
            <NewTableUser />
        </>
    )
}
export default Home;