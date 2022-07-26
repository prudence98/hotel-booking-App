import { useHistory ,Link} from 'react-router-dom'
import home from '../styles/home.module.css';
import Header from '../pages/header';
//import Footer from '../Footer/Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import { Carousel } from 'react-responsive-carousel';
import { AiTwotoneCar, AiTwotoneShop } from 'react-icons/ai';
import image1 from '../images/back2.jpg';
import image2 from '../images/cover.jpg';


function Home() {
const navigate = useHistory()

const book_now = () =>{
    navigate('/home_book')
}

    return (
        <div className={home.home}>
            <div className={home.header}>
                <Header></Header>
                <div className={home.companyName}>
                    <h1> Prudential Booking App</h1>
                   <Link to="./homeBook"> <button className={home.book} onClick={book_now}>More Info</button></Link> 
                </div>
            </div>
            <div className={home.headerEnd}>
                <div className={home.tapIcon}>
                    <label>Vehicle </label>
                    <span className='react-icon'><AiTwotoneCar size={20} /></span>
                </div>
                <div className={home.tapIcon}>
                    <label>Shops </label>
                    <span className='react-icon'><AiTwotoneShop size={20} /></span>
                </div>
            </div>
            <div className={home.searchBooking}>
                <div className={home.searchBookingValues}>
                    
                </div>
            </div>
            <div className={home.content}>
                <div className={home.left}>
                    <div className={home.image}>
                        <img src={image1} alt={image1} />
                    </div>
                    <div className={home.image} id={home.image2}>
                        <img src={image2} alt={image2} />
                    </div>
                </div>
                <div className={home.right}>
                    <h2>Welcome to Prudential Hotel Resort</h2>
                    <label>The Prudential hotel is the right choice for the one who is in need for relaxation and a convinient position from where to
                        explore surroundings<br /><br />
                        
                    </label>
                </div>
            </div>
            
            <div className={home.footer}>
                {/* <Footer></Footer> */}

            </div>
        </div>
    )
}

export default Home;