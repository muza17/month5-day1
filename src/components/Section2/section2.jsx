import './section2.css'
import personImg from './../../assets/img/personimg.png'
import rightIcon from './../../assets/img/RightIcon.png'


function Section2(){
    return(
        <section >
            <div className="Section2-container">
                <div className="Section2">
                    <img src={personImg} alt="person" />
                    <div className="personInfo">
                        <h3 className="personInfo-title">Acerca de mi</h3>
                        <p className="personInfo-text">Hola! mi nombre es Yusting (Yuxin para los amigos) y tengo una gran afinidad hacía el trabajo colaborativo, me gusta crear diseños que inspiren e involucren a las personas. Como diseñador UI, considero que un buen producto no solo brinda una solución sino que permite crear una experiencia emocional en las personas que lo usan.
                            En mi proceso creativo utilizo herramientas como Figma, Adobe XD, Photoshop e Illustrator que me ayudan en el flujo de trabajo para la producción de interfaces de usuario.</p>
                        <a href="#">
                            <button className="personInfo-button">Descargar CV
                                <span className='download'><img src={rightIcon} style={{width: '14px', height: '16px', marginLeft: '11px'}} alt="" /></span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export {Section2}