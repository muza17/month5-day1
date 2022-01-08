import './header.css'
import logo from "./../../assets/img/Yuxin.svg"


function Header(){
    return(
        <header>
            <div className='container'>
                <img src={logo}/>
                <ul className="navbar">
                    <a href="#">
                        <li className="nav-item">Inicio</li>
                    </a>
                    <a href="#">
                        <li className="nav-item">Acerca de mi</li>
                    </a>
                    <a href="#">
                        <li className="nav-item">Proyectos</li>
                    </a>
                </ul>
                <a href="#">
                    <button className='header-button' type='submit'>Contáctame</button>
                </a>

            </div>

        </header>
    )
}
export {Header}