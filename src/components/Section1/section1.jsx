import './section1.css'
import download from './../../assets/img/download.png'

function Section1(){
    return(
        <section style={{marginTop: '114px'}}>
            <div className="texts">
                <h3 className="section1-header">Soy <span>Yusting Mora</span> Diseñador UI/UX</h3>
                <p className="text">Este es mi portafolio y CV hecho en Figma, acá puedes ver mi estilo de prototipado a la hora de diseñar interfaces.</p>
                <p className="text" style={{marginTop: '10px'}}>¡Espero te guste!</p>

            </div>
            <div className="buttons">
                <a href="#">
                    <button className="button">Ver proyectos</button>
                </a>
                <a href="#">
                    <button className="button button2">
                    <span className='download'><img src={download} style={{width: '14px', height: '16px', marginRight: '11px'}} alt="" /></span>
                    Descargar CV</button>
                </a>
            </div>
        </section>
    )
}
export {Section1}