import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {

    const image = 'https://img.over-blog-kiwi.com/0/84/33/20/20170503/ob_5b3ab1_774247aaa925969d69507b42050356d1.jpg';
    const image1 = 'https://images-na.ssl-images-amazon.com/images/I/71CH1MwvxyL._AC_SL1500_.jpg';
    return (
        <div className='home'>  
            <div className='home__container'>
                <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='we send everywhere'/>
                       
            <div className='home__row'>
                <Product image={image} price={90.99} title='the lean start up' rating={5} />
                <Product image={image1} price={75.00} title='TOZO T6 True Wireless Earbuds Bluetooth Auriculares Control Táctil con Funda de Carga Inalámbrica IPX8 Impermeable TWS Stereo Earphones In-Ear Built-in Mic Headset Premium Deep Bass para Deporte Negro' rating={4}  />
            </div>
            <div className='home__row'>
            <Product image={image} price={90.99} title='the lean start up' rating={5} />
            <Product image={image1} price={75.00} title='TOZO T6 True Wireless Earbuds Bluetooth Auriculares Control Táctil con Funda de Carga Inalámbrica IPX8 Impermeable TWS Stereo Earphones In-Ear Built-in Mic Headset Premium Deep Bass para Deporte Negro' rating={4}  />
            <Product image={image} price={90.99} title='the lean start up' rating={5} />
            
            </div>

            <div className='home__row'>
            <Product image={image1} price={75.00} title='TOZO T6 True Wireless Earbuds Bluetooth Auriculares Control Táctil con Funda de Carga Inalámbrica IPX8 Impermeable TWS Stereo Earphones In-Ear Built-in Mic Headset Premium Deep Bass para Deporte Negro' rating={4}  />
            </div>
            </div>
        </div>
    )
}

export default Home
