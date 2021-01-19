import Link from 'next/link';

const MyLogo = (props) => {
    return(
            <div style = {{
                backgroundImage: `url("https://res.cloudinary.com/csperwez/image/upload/v1610467880/centresportif_qna1yv.jpg")`,backgroundRepeat: 'no-repeat',backgroundSize :'cover'
             }}>
                <Link href='/'>
                    <img src="https://res.cloudinary.com/csperwez/image/upload/v1610467879/commune_lnhn44.png" style = {{maxWidth:"100%"}}></img>
                </Link>
            </div>
    );
}

export default MyLogo;