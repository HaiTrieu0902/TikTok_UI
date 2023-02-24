import Header from '../components/Header';
import SlideBar from './SlideBar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <SlideBar />
                <div className="Content">{children} </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
