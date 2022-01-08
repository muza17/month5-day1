import './intro.css'
import background from './../../assets/img/banner.png'

function Intro(){
    return(
        <section style={{ backgroundImage: `url(${background})`,backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', backgroundSize: 'contain',
        width:'100%', height:'630px'}}>
            <div className='container'>
            
            </div>
        </section>
    )
}
export {Intro}