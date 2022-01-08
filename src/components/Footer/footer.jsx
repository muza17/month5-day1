import './footer.css'
import logo from "./../../assets/img/Yuxin.svg"
import footerIcon1 from "./../../assets/img/footerIcon1.svg"
import footerIcon2 from "./../../assets/img/footerIcon2.svg"
import footerIcon3 from "./../../assets/img/footerIcon3.svg"


function Footer(){
    return(
        <footer style={{background: '#131414'}}>
            <div className='footer-container'>
                <div className="footer-top">
                    <img src={logo}/>
                    <ul className="footer-list">
                        <li className="footerlist-item">
                            <p style={{color: '#F9B53A'}}>Inicio</p>
                            <p>Acerca de mi</p>
                            <p>Proyectos</p>
                        </li>
                        <li className="footerlist-item">
                            <p style={{color: '#F9B53A'}} >Contáctame</p>
                            <p>Correo</p>
                            <p>LinkedIn</p>
                        </li>
                        <li className="footerlist-item">
                            <p style={{color: '#F9B53A'}} >Social</p>
                            <div className="social">
                                <img src={footerIcon1} alt="" />
                                <img src={footerIcon2} alt="" />
                                <img src={footerIcon3} alt="" />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="hr"></div>
                <p className="footer-text">© 2021 Yuxin</p>
            </div>
        </footer>
    )
}
export {Footer}