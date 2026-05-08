import { Outlet } from 'react-router';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Bounce, ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
                />
        </div>
    );
};

export default RootLayout;