import Link from"./Link.Navbar"

function Navbar(){
    const x = 30000
    return(
        <div>
            <nav>{x}</nav>
            <ul>
                <li>
                <Link>React</Link>
                </li>
                
                <li><a href="#">B</a></li>
               
            </ul> 
        </div>

    )
}
export default Navbar