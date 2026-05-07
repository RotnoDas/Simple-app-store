import { Outlet } from 'react-router';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;