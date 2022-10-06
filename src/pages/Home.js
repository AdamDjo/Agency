import React from 'react';
import DynamicText from '../components/DynamicText';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';

const Home = () => {
    return (
        <div>
            <Mouse></Mouse>
            <div className='home'>
            <Navigation></Navigation>
            <SocialNetwork></SocialNetwork>
           <div className='home-main'>
            <div className='main-content'>
                <h1> FS Agency</h1>
                <h2> <DynamicText></DynamicText></h2>
               
            </div>
            </div>
            
           </div>
        </div>
    );
};

export default Home;