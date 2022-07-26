import homeBook from '../styles/homeBook.module.css';
import Header from '../pages/header'
//import PopUpBook from '../PopUpBook/PopUpBook';
//import popup from '../styles/popup.css'

import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'

//import Data from '../Data/Data';
import { db } from '../config/firebase'
import { collection, getDocs } from 'firebase/firestore';


function Home_Booking() {
    localStorage.removeItem('map_link');
    localStorage.removeItem('location_name');
    const navigate = useHistory()
    //const [Room] = useState(Data)

    const [Hotel, setHotel] = useState([])
    const usersCollectionRef = collection(db, "prudential_Hotel")
    useEffect(() => {
        const getHotels = async () => {
            const data = await getDocs(usersCollectionRef);
            setHotel(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getHotels();
    }, []);

    const [CheckIn, setCheckIn] = useState({
        checkIn: '',
        checkOut: '',
        child: 0,
        adult: 0,
        totalPrice: 0,
        night:0
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCheckIn(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const [HotelData, setHotelData] = useState([]);
    // const [ButtonPopup, setButtonPopup] = useState(false);
    // const [ConfirmPopup, setConfirmPopup] = useState(false);


    function book(data) {
        setCheckIn('')
        setCheckIn(0)
        setHotelData(data)
        //setButtonPopup(true)
    }
    function checkInNow() {
        if(CheckIn.checkIn !== '' && CheckIn.checkOut !== ''){
            var start = new Date(CheckIn.checkIn)
            var end = new Date(CheckIn.checkOut)
            CheckIn.night = ((end.getTime() - start.getTime()) / (24 * 3600 * 1000))
            CheckIn.totalPrice = ((end.getTime() - start.getTime()) / (24 * 3600 * 1000)) * HotelData.price;
            //setButtonPopup(false);
            navigate('/confirmation', { state: { data: CheckIn, hotelData: HotelData} });
        }
    }

    function book(data) {
        navigate.push('/hotelinfo', { state: { data: data } })
    }

    function openMap(data) {
        var link = data.link;
        var name = data.name;
        localStorage.setItem('map_link', link);
        localStorage.setItem('location_name', name);

        window.open('/google_map')

    }

    // let bookPopUp = (
    //     <div className={popup.popup}>
    //         <div className={popup.header}>
    //             <h3>R {HotelData.price}</h3>
    //             <label>/ {HotelData.duration}</label>
    //         </div>
    //         <div className={popup.formGroup}>
    //             <label>Check-in Date <span>*</span></label>
    //             <input type="date" name="checkIn" className={popup.formControl} value={CheckIn.checkIn} onChange={handleChange} />
    //         </div>

    //         <div className={popup.formGroup}>
    //             <label>Check-out Date <span>*</span></label>
    //             <input type="date" name="checkOut" className={popup.formControl} value={CheckIn.checkOut} onChange={handleChange} />
    //         </div>

    //         <div className={popup.formGroup}>
    //             <label>Adult</label>
    //             <input type="number" name="adult" className={popup.formControl} value={CheckIn.adult} onChange={handleChange} />
    //         </div>

    //         <div className={popup.formGroup}>
    //             <label>Children</label>
    //             <input type="number" name="child" className={popup.formControl} value={CheckIn.child} onChange={handleChange} />
    //         </div>
    //         <button type="button" className={popup.submitAvailability} onClick={checkInNow}>Check Now</button>
    //     </div>
    // );

    // let confirmPopUp = (
    //     <div className={popup.popup}>
    //         <div className={popup.header}>
    //             <h3>Booking Confirmation</h3>
    //             <div className={popup.bookingDetails}>
    //                 <h4>Booking Details</h4>
    //                 <label>checking in <p>date, <span>time</span></p></label>
    //                 <label>checking out <p>date, <span>time</span></p></label>
    //             </div>

    //             <div className={popup.accomodation}>
    //                 <h3>Accommodation #1</h3>
    //                 <labe>Accommodation Type: Standard Single Room</labe>
    //                 <div className='formGroup'>
    //                     <label>Full Guest Name</label>
    //                     <input type="text" name="guestName" onClick={CheckIn.guestName} onChange={handleChange}/>
    //                 </div>
    //             </div>

    //             <div className={popup.priceBreakdown}>
    //                 <h3>Price Breakdown</h3>
    //                 <table>
    //                     <tr>
    //                         <td>#1 Standard Single Room</td>
    //                     </tr>
    //                 </table>
    //             </div>

    //             <h3>R {HotelData.price}</h3>
    //             <label>/ {HotelData.duration}</label>
    //         </div>
    //         <button type="button" className={popup.submitAvailability} onClick={checkInNow}>Check Now</button>
    //     </div>
    // )

    return (
        <div className={homeBook.main}>
            <Header ></Header>
            <br />
            <div className={homeBook.content}>
                <div className={homeBook.hotelList}>
                    {Hotel.map((listHotels, xId) => (
                        <div className={homeBook.hotel} key={xId}>
                            <div className={homeBook.image} >
                                <img src={listHotels.hotel} alt={listHotels.alt} />
                            </div>
                            <div className={homeBook.description}>
                                <h3>{listHotels.name}</h3><br />
                                <label>location: {listHotels.location}</label><br />
                                <label>R {listHotels.price} {listHotels.duration}</label><br /><br />
                                <label>{listHotels.description}</label>
                            </div>
                            <div className={homeBook.bookbtn}>
                                <span onClick={() => openMap(listHotels)} className={homeBook.openMap}>open map</span>
                                <button className={homeBook.btn} onClick={() => book(listHotels)}>Book</button>
                                {/* <PopUpBook trigger={ButtonPopup} setTrigger={setButtonPopup}>
                                    {bookPopUp}
                                </PopUpBook> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home_Booking;