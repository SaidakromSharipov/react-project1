import React from 'react';

function Navbar(props) {
    return (
        <div className='Navbar'>
            <div className="logo"></div>
            <ul>
                <li>BOSH SAHIFA</li>
                <li>MAHSULOTLAR</li>
                <li>BIZNING JAMOA</li>
                <li>ALOQA</li>
                <button className='btn1'>RO'YHATDAN O'TISH</button>
                <button className='btn2'>KIRISH</button>
            </ul>
        </div>
    );
}

export default Navbar;