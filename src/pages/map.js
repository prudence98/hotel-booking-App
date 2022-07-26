import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './GoogleMap.css';

function GoogleMap() {
    const [Link, setLink] = useState('')
    const [Name, setName] = useState('')

    useEffect(() => {
        setLink(localStorage.getItem('map_link'));
        setName(localStorage.getItem('location_name'))
        console.log(Link, Name)
    })
    return (

        <div className='mapmain'>
            <h2>You were looking for {Name} Location</h2>
            <iframe src={Link} width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            
        </div>
    )
}

export default GoogleMap;
