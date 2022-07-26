import React from 'react'
import Pic from "../images/go.jpg";
import Pic1 from "../images/rt.jpg";
import Pic2 from "../images/r2.jpg";
import Pic3 from "../images/base.jpg";
import Pic4 from "../images/bath.jpg";
import { Link } from 'react-router-dom';
import RoomsCSS from '../styles/rooms.module.css'
// import '../styles/rooms.css'
import Popup from './popup';
import {useState} from 'react'

function Rooms() {

 

  const [BookingPopup, setBookingPopup] = useState(false);

  let book = (
    <body className={RoomsCSS.booking_body}>

      <div className={RoomsCSS.book_container}>
      <div class={RoomsCSS.box}>
          <label className={RoomsCSS.checkIn}>Check-in:</label>
          <input className={RoomsCSS.input} type="date" placeholder="Check-in-Date"></input>
        </div>
        <div class={RoomsCSS.box}>
          <label className={RoomsCSS.checkOut}>Check-out:</label>
          <input className={RoomsCSS.input} type="date" placeholder="Check-out-Date"></input>
        </div>
        <div class={RoomsCSS.box}>
          <label className={RoomsCSS.adult}>Adults:</label>
          <input className={RoomsCSS.input} type="number" placeholder="0"></input>
        </div>
        <div class={RoomsCSS.box}>
          <label className={RoomsCSS.children}>Children:</label>
          <input className={RoomsCSS.input} type="number" placeholder="0"></input>
        </div>
        <div class={RoomsCSS.search}>
          <button>Submit</button>
        </div>
      </div>
    </body>
  )



  return (
    <div>
      <section class={RoomsCSS.room.top}id={RoomsCSS.room}>
        <div class={RoomsCSS.container}>
          <div class={RoomsCSS.heading_top.flex1}>
            <div class={RoomsCSS.heading}>
              <h5>RAISING COMFORT TO THE HIGHEST LEVEL</h5>
              <h2>Rooms R Suites</h2>
            </div>
            <div class={RoomsCSS.button}>
              <button class={RoomsCSS.btn1}>VIEW ALL</button>
            </div>
          </div>

          <div class={RoomsCSS.content.grid}>
          <div class={RoomsCSS.box}>
              <div class={RoomsCSS.slideshowContainer}>
                <div class={RoomsCSS.mySlides.fade}>
                
                  <div class={RoomsCSS.img}>
                    <img src={Pic} alt=""></img>
                  </div>
                </div>

                <div class={RoomsCSS.mySlides.fade}>
               
                  <div class={RoomsCSS.img}>
                    <img src={Pic3} alt=""></img>
                  </div>

                </div>

                <div class={RoomsCSS.mySlides.fade}>
                
                  <div class={RoomsCSS.img}>
                    <img src={Pic4} alt=""></img>
                  </div>

                </div>

              </div>


              <div class={RoomsCSS.text}>
                <h3>Superior Soble Rooms</h3>
                <p> <span>ZAR </span> 600 <span>/per night</span> </p>
                {/* <Link to="./booking"> <button>Book</button></Link> */}
                <button className={RoomsCSS.room_button} onClick={() =>setBookingPopup(true)}>Book</button>
              </div>
              <Popup trigger={BookingPopup} setTrigger={setBookingPopup}>
                {book}
              </Popup>
            </div>

            <div class={RoomsCSS.box}>
              <div class={RoomsCSS.slideshowContainer}>
                <div class={RoomsCSS.mySlides.fade}>
                  
                  <div class={RoomsCSS.img}>
                    <img src={Pic2} alt=""></img>
                  </div>
                </div>

                <div class={RoomsCSS.mySlides.fade}>
                
                  <div class={RoomsCSS.img}>
                    <img src={Pic3} alt=""></img>
                  </div>

                </div>

                <div class={RoomsCSS.mySlides.fade}>
                 
                  <div class={RoomsCSS.img}>
                    <img src={Pic4} alt=""></img>
                  </div>

                </div>

              </div>


              <div class={RoomsCSS.text}>
                <h3>Superior Soble Rooms</h3>
                <p> <span>ZAR </span>1200 <span>/per night</span> </p>
                <button className={RoomsCSS.room_button }onClick={() =>setBookingPopup(true)}>Book</button>
              </div>
              <Popup trigger={BookingPopup} setTrigger={setBookingPopup}>
                {book}
              </Popup>
            </div>

            <div class={RoomsCSS.box}>
              <div class={RoomsCSS.slideshowContainer}>
                <div class={RoomsCSS.mySlides.fade}>
                
                  <div class={RoomsCSS.img}>
                    <img src={Pic1} alt=""></img>
                  </div>
                </div>

                <div class={RoomsCSS.mySlides.fade}>
                  
                  <div class={RoomsCSS.img}>
                    <img src={Pic3} alt=""></img>
                  </div>

                </div>

                <div class={RoomsCSS.mySlides.fade}>
                  
                  <div class={RoomsCSS.img}>
                    <img src={Pic4} alt=""></img>
                  </div>

                </div>

              </div>


              <div class={RoomsCSS.text}>
                <h3>Superior Soble Rooms</h3>
                <p> <span>ZAR </span> 700 <span>/per night</span> </p>
              <button className={RoomsCSS.room_button} onClick={() =>setBookingPopup(true)}>Book</button>
              </div>
              <Popup trigger={BookingPopup} setTrigger={setBookingPopup}>
                {book}
              </Popup>
            </div>


          </div>
        </div>
      </section>
    </div>
  )
}

export default Rooms;


