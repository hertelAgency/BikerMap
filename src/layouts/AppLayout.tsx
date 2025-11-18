import Header from "./app/Header";
import Footer from "./app/Footer";
import '../styles/AppLayout.scss';

interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    return (
        <section>
            <Header/>
            <section className='container'>
                {children}
            </section>
            <Footer />
        </section>
    );
};

export default AppLayout;