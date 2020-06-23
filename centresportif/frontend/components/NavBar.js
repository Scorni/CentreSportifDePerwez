import Link from "next/link";

const Navbar = () => (
    <div>
        <Link href = "/creation">
            <a> Creation </a>
        </Link><br></br>
        <Link href ="/">
            <a> Accueil </a>
        </Link>
    </div>
)

export default Navbar