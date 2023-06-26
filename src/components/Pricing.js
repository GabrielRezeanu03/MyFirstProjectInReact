import React from 'react'
import { Link } from 'react-router-dom'
import './Pricing.css'


const Pricing = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card border-secondary mb-3' id='silvercard'>
                <h3>- Silver -</h3>
                <span className='bar'></span>
                <p className='dollar'>30 $</p>
                <p>- 30 days -</p>
                <p>- fitness -</p>
                <p>- aerobic -</p>
                <Link to='/contact' className='btn btn-light' id='silverbutton'>Start now</Link>
            </div>
            <div className='card border-warning mb-3' id='goldcard'>
                <h3>- Gold -</h3>
                <span className='bar'></span>
                <p className='dollar'>50 $</p>
                <p>- 30 days -</p>
                <p>- fitness -</p>
                <p>- aerobic -</p>
                <p>- sauna -</p>
                <p>- personal trainer assitance -</p>
                <Link to='/contact' className='btn btn-light' id='goldbutton'>Start now</Link>
            </div>
            <div className='card border-info mb-3' id='diamondcard'>
                <h3>- Diamond -</h3>
                <span className='bar'></span>
                <p className='dollar'>100 $</p>
                <p>- 30 days -</p>
                <p>- fitness -</p>
                <p>- aerobic -</p>
                <p>- sauna -</p>
                <p>- personal trainer full program -</p>
                <p>- nutrition plan -</p>
                <Link to='/contact' className='btn btn-light' id='diamondbutton'>Start now</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Pricing

