import './section3.css'
import phoneIcon from './../../assets/img/phoneIcon.png'
import systemIcon from './../../assets/img/systemIcon.png'
import userIcon from './../../assets/img/phoneIcon.png'
import rightIcon from './../../assets/img/RightIcon.png'

function Section3(){
    return(
        <section>
            <div className="section3-container">
                <div className="section3">
                    <h3 className="section3-title">Mis habilidades</h3>
                    <ul className="cards">
                        <li className="card">
                            <img src={phoneIcon} style={{width: '25px', height: '37.5px',marginLeft: '10px'}} alt="" />
                            <h4 className="card-title">Respons design</h4>
                            <p className="card-text">Con mi experiencia en patrones de diseño responsive tengo una visión clara acerca de como implementarlos de manera efectiva en cualquier proyecto.</p>
                        </li>
                        <li className="card">
                            <img src={systemIcon} style={{width: '25px', height: '37.5px',marginLeft: '10px'}} alt="" />
                            <h4 className="card-title">Sistema de diseño</h4>
                            <p className="card-text">Tengo manejo de sistemas de diseño, lo cual permite agilidad en el proceso de diseño acortando los tiempos en la creación de las interfaces dentro del proyecto.</p>
                        </li>
                        <li className="card">
                            <img src={userIcon} style={{width: '25px', height: '37.5px',marginLeft: '10px'}} alt="" />
                            <h4 className="card-title">Cooworking</h4>
                            <p className="card-text">Trato de ser un activo valioso en el equipo que esté trabajando, aportando mis conocimientos y material que optimice el flujo de trabajo en el desarrollo del proyecto.</p>
                        </li>  
                    </ul>
                    <a href="#">
                        <button className="personInfo-button yellow">Ver más de mis skills
                            <span className='download'><img src={rightIcon} style={{width: '14px', height: '16px', marginLeft: '11px'}} alt="" /></span>
                        </button>
                    </a>
                </div>
            </div>
        </section>

    )
    
}

export {Section3}