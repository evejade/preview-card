import './App.css'
import fotoJpg from './img/foto.jpg'
export default function App() {
  return (
    <>
      <div className='container'>

        <div className='texto'>
          <h1>Get <span>insights</span> that help your business grow.</h1>
          <p className='textmain'>Discover the benefits of data analytics and make better decisions regarding  revenue, customer experience, and overal efficiency.</p>
          <div className='foots'>
            <p className='foot1'>10k+  314 12M+</p>
            <p className='foot2'>COMPANIES TEMPLATES QUERIES</p>
          </div>
        </div>
 
        <div className='text2'>
          <img src={fotoJpg} alt="image" />
        </div>
      </div>
    </>
  )
}