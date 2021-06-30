import React from 'react'
import background from '../image/background.jpg';
function Home() {
    return (
        <div style={{ backgroundImage: `url(${background})`,backgroundRepeat:'no-repeat' , backgroundSize: 'cover'}}>
        <div>
        
        <div className="homepage">
            <p style={{textAlign: "center"}}>WELCOME EVERYONE</p>
            <h5 style={{textAlign: "center"}}>Happy to see you</h5>
        </div>
        </div>
        </div>
    )
}

export default Home;
