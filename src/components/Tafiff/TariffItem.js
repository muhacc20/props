import React from 'react'
import TariffList from './TariffList'

export default function TariffItem({ tariff }) {

  // traffic volium text imgUrl number time limit message sms icon  return (

  return (
    <>
      <div className='main' >


        <div className='block'>
          <p className="title"> {tariff.title} </p>
          <div className='price'>{tariff.price}</div>
          <div className="right-side">
            <div className='symbol'>{tariff.price != 0 && tariff.symbol}</div>
            <div className='month'>{tariff.month}</div>

          </div>


          <img src={tariff.hit} alt="" className='hit' />
        </div>

        <div className='block'>


          <div className='r-side'>
            <div className='traffic'>{tariff.traffic !== 0 && tariff.traffic}</div>
            <div classname='l-side'>
            <div className='volium'>{tariff.volium !== 0 && tariff.volium} </div>
            
  
            </div>
          </div>
          <p className='text'>{tariff.text}</p>
          <div className="socialIcons">{tariff.socialMediaStatus && tariff.socialMedia.map(o => <img className="icon" src={o} alt="" />)}</div>
          <div className="img">{tariff.icon}</div>
          <span className='volue'>{tariff.value}</span>
        </div>
        
        <div className='block'>
          <h1 className='.number' >{tariff.number !== 0 && tariff.number}</h1>
          <h3 className='time'>{tariff.time}</h3>
          <span className='limit'>{tariff.limit}</span>
        </div>
        <div className='block'>
          <h2 className='message'>{tariff.message !== 0 && tariff.message}</h2>
          <h2 className='sms'>{tariff.sms}</h2>
        </div >

      </div>
      <div className="line"></div>

    </>
  );


}



