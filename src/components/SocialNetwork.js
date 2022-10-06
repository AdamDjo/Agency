import React from 'react';

const SocialNetwork = () => {

    const anim =() =>{
        const icons = document.querySelectorAll('.social-network a')
        icons.forEach((link)=>{
            link.addEventListener("mouseover",(e)=>{
                link.style.transform=`translate(${e.offsetX-20}px,${e.offsetY-13}px)`
            })

            link.addEventListener("mouseleave",(e)=>{
                link.style.transform=""
            })
        })
    }


    return (
        <div className='social-network'>
                <ul className='content'>
                    <a className='hover'href="www./facebook.com" target="_blank" rel="noopener noreferrer" onMouseOver={anim}>
                        <li>
                            <i className='fab fa-facebook-f'></i>
                        </li>
                        
                    </a>

                    <a className='hover'href="www./twitter.com" target="_blank" rel="noopener noreferrer" onMouseOver={anim}> 
                        <li>
                            <i className='fab fa-twitter'></i>
                        </li>
                        
                    </a>

                    <a className='hover'href="www./instagram.com" target="_blank" rel="noopener noreferrer"  onMouseOver={anim}>
                        <li>
                            <i className='fab fa-instagram'></i>
                        </li>
                        
                    </a>
                </ul>
        </div>
    );
};

export default SocialNetwork;