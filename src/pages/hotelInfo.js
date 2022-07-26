import { useLocation } from 'react-router-dom';
import hotelInfo from '../styles/hotelinfo.module.css';
import { useEffect, useState } from 'react';
import 'react-bootstrap';
function HotelInfo() {
    const [Gallery, setGallery] = useState([])
    const [HotelData, setHotelData] = useState('')
    const { state } = useLocation();
    const { data } = state;
    useEffect(() => {

        setHotelData(data)
        setGallery(data.gallary)
    })

    return (
        <div className={hotelInfo.main}>
                <h2>{HotelData.name}</h2>

            <div className={hotelInfo.details}>
                <div className={hotelInfo.descptive}>
                    <h2>Details</h2>
                    <table className={hotelInfo.table} striped="true" bordered="true" hover="true" variant="dark">
                        <tbody>
                            <tr>
                                <td>Amenities:</td>
                                <td>{HotelData.amenities}</td>
                            </tr>
                            <tr>
                                <td>View:</td>
                                <td>{HotelData.view}</td>
                            </tr>
                            <tr>
                                <td>Size:</td>
                                <td>{HotelData.size}</td>
                            </tr>
                            <tr>
                                <td>Bed Type:</td>
                                <td>{HotelData.bedType}</td>
                            </tr>
                            <tr>
                                <td>Categories:</td>
                                <td>{HotelData.categories}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={hotelInfo.summary}>
                        <p>{HotelData.descriptive}</p>
                    </div>
                </div>

                <div className={hotelInfo.pictures}>
                    {Gallery.map((theGallery, xid) => (
                        <div className={hotelInfo.gallery} key={xid}>
                            <img src={theGallery} alt={HotelData.name} />
                        </div>
                    ))}
                </div>
            </div>




        </div>
    )

}

export default HotelInfo;