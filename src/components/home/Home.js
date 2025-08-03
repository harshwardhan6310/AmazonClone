import React from 'react'
import Product from '../product/Product';
import "./Home.css" ;
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Home() {
  return (
    <div className='home'>
        <div className='home-container'>
            {/* <img 
            src='https://i.imgur.com/N0naC22.jpeg' 
            alt='home-pic'
            className='home-img'
            /> */}
            
            <div id="carousel-example-generic" class="carousel slide home-img" data-ride="carousel">
                <ol class="carousel-indicators">
                    {/* <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="3"></li> */}
                </ol>

                <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <img src="/static/primeMembership.jpg" alt="prime membership banner"/>
                    </div>
                    <div class="item">
                        <img src="/static/panchayat.jpeg" alt="panchayat banner"/>
                    </div>
                    <div class="item">
                        <img src="/static/clearanceStore.jpg" alt="clearance store banner"/>
                    </div>
                    <div class="item">
                        <img src="/static/amazonPay.jpeg" alt="amazon pay banner"/>
                    </div>
                </div>

                <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                    <ChevronLeftIcon className='mbtn'/>
                    {/* <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>                     */}
                    {/* <span class="sr-only">Previous</span> */}
                </a>
                <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                    <ChevronRightIcon className='mbtn'/>
                    {/* <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> */}
                    {/* <span class="sr-only">Next</span> */}
                </a>
            </div>



            <div className='home-row'>
                <Product 
                id='1'
                title='2 States: The Story Of My Marriage, by Chetan Bhagat'
                price={499}  
                image='/static/chetanBhagatBook.jpg'
                rating={3}
                />
                <Product 
                id='2'
                title='Apple Airpods Pro 2nd gen with Active Noise Cancellation'
                price={24999}  
                image='/static/airpods.jpg'
                rating={4}
                />
            </div>
            <div className='home-row'>
                <Product
                id='3' 
                title='Amazon Echo (3rd Gen) - Powered by Dolby Atmos'
                price={5999}  
                image='/static/amazonEcho.jpg'
                rating={4}
                />
                <Product 
                id='4'
                title='boAt Xtend Smartwatch with Alexa, Heart & SpO2 Monitoring, Sleep Monitor'
                price={2999}  
                image='/static/watch.jpeg'
                rating={5}
                />
                <Product 
                id='5'
                title='FireFox Cyclone Bike-24T, 21 Gear Mountain Bike'
                price={18999}  
                image='/static/cycle.png'
                rating={5}
                />
            </div>
            <div className='home-row'>
                <Product 
                id='6'
                title='Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)'
                price={139990}  
                image='/static/monitor.png'
                rating={4}
                />
            </div>
        </div> 
    </div>
  )
}

export default Home