import react from 'react';
import Link from 'next/link';


const MyLogo = (props) => {
    return(
            <div style = {{
                backgroundImage: `url("/static/img/centresportif.jpg")`,backgroundRepeat: 'no-repeat',backgroundSize :'cover'
             }}>
                <Link href='/'>
                    <img src="/static/img/commune.png" style = {{maxWidth:"50%"}}></img>
                </Link>
            </div>
    );
}

export default MyLogo;