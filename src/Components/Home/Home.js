import './Home.css'
import cover from '../../assets/cover.jpeg'

function Home() {
    return(
        <div>
            <section className='home-container'>
            <img src={cover} alt='Proceed to Remembrance'/>
            <p className = 'home-p'>
                “When grey and cloudy skies were upon her, she yearned for the company of another being. She was always content to be alone when the sun was shining, and the stars were blinking.
                At night when she was alone, the moonlight often wrapped her in its ethereal glow, bathing her in peaceful metaphors, it called to her soul. During the day, cumulus clouds danced upon the wind, like BOB pillows fighting.
                Rainbows bent in the heavens, promising something that she did not understand, but oh how she longed to know what they meant. These delightful moments of being alone always left her wondering about her Creator, but she could not allow herself the faith to seek the truth.”
                <ul>– Proceed to Remembrance</ul>
            </p>
            </section>
            <section>
            <p className = 'home-p2'>
                Copyright © 2019 Michelle Facer Baguley.
                All rights reserved. No part of this book may be used or reproduced by any means, graphic, electronic, or mechanical, including photocopying, recording, taping or by any information storage retrieval system without the written permission of the author except in the case of brief quotations embodied in critical articles and reviews.
                Archway Publishing rev. date: 6/11/2019
            </p>
            </section>
        </div>
    )
}
export default Home;