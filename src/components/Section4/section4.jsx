import './section4.css'
import sec4pic1 from './../../assets/img/sec4pic1.png'
import sec4pic2 from './../../assets/img/sec4pic2.png'
import sec4pic3 from './../../assets/img/sec4pic3.png'
import rightIcon from './../../assets/img/RightIcon.png'


function Section4(){
    return(
        <section>
            <div className="section4-container">
                <div className="section4">
                    <h3 className="section4-title">Algunos de mis proyectos</h3>
                    <img src={sec4pic1} alt="" />
                    <img src={sec4pic2} alt="" />
                    <img src={sec4pic3} alt="" />
                    <a href="#">
                        <button className="personInfo-button yellow" style={{margin: '0px', padding: '14px 40px'}}>Ver más en Behance
                            <span className='download'><img src={rightIcon} style={{width: '14px', height: '16px', marginLeft: '11px', marginBottom: '0px'}} alt="" /></span>
                        </button>
                    </a>
                </div>
             </div>
        </section>
    )
}
export {Section4}