import { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom'
import { db } from '../config/firebase'
import { collection, getDocs } from 'firebase/firestore';
//mport LohinRegPopup from '../../LoginAndRegister/LoginAndRegister'

import header from '../styles/header.module.css';
function Header() {
    const navigate = useHistory()
    const [usersInfo, setusersInfo] = useState([])
    const [oneUser, setoneUser] = useState({})

    const [ButtonPopUp, setButtonPopUp] = useState(false)



    const [username, setusername] = useState('Username')
    const usersCollectionRef = collection(db, "client")

    const HotelCollectionRef = collection(db, "hotel")
    let [HotelData, setHotelData] = useState([]);
    let [LogLabel, setLogLabel] = useState('login')

    useEffect(() => {
        let getId = localStorage.getItem('userId')
        if (getId === null || getId === '') return;
        const getUser = async () => {
            const data = await getDocs(usersCollectionRef);
            setusersInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            for (var user = 0; user < usersInfo.length; user++) {
                if (usersInfo[user].id_ref === getId) {
                    setoneUser(usersInfo[user])
                    setusername(usersInfo[user].name)
                    setLogLabel('Logout')
                }
            }
        }

        const getHotels = async () => {
            const hotelCollection = await getDocs(HotelCollectionRef);
            setHotelData(hotelCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getUser();
        getHotels();
    }, [usersInfo])




    let [SearchResults, setSearchResults] = useState([])

    function seraching(name) {
        var searchWord = name.target.value

        var newFilter = HotelData.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());

        })
        setSearchResults(newFilter)
    }

    function searchResults(data) {
        navigate('/hotel_info', { state: { data: data } })
    }

    function logout() {
        if (username === 'Username') {
            return setButtonPopUp(true)
        }
        localStorage.removeItem('userId')
        localStorage.removeItem('userEmail')
        window.location.reload()
    }

    return (
        <div className={header.main}>
            <div className={header.navBar}>
                <ul className={header.nav}>
                    <li><NavLink to={'/'} className={header.isActive} >Home</NavLink></li>
                    <li><NavLink to={'/login'} className={header.isActive} >Sign in</NavLink></li>
                    <li><NavLink to={'/register'} className={header.isActive} >Sign up</NavLink></li>
                    <li><NavLink to={'/booking'} className={header.isActive}>Bookings</NavLink></li>
                    <li><input type="text" className={header.searchBtn} onChange={seraching} />
                        <div className={header.activeResults}>
                            {SearchResults.map((data, xid) => (
                                <div className={header.searchResults} key={xid}>
                                    <p onClick={() => searchResults(data)}>{data.name}</p>
                                </div>
                            ))}
                        </div>
                    </li>
                </ul>
                <br />


                
              
            </div>
            

        </div>
    )
}

export default Header;