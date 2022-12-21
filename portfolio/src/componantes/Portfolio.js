import React from 'react'
import antcolony from '../img/portfolio/antcolony.jpg'
import BinPaking from '../img/portfolio/BinPaking.png'
import FFD from '../img/portfolio/FFD.png'
import GFVehicules from '../img/portfolio/GF-Vehicules.JPG'
import hbpp from '../img/portfolio/hbpp.png'
import KickStarter from '../img/portfolio/Kickstarter.jpg'
import LocalSearch from '../img/portfolio/localSearch.png'
import OptiLog from '../img/portfolio/OptiLog.JPG'
import Proshop from '../img/portfolio/Proshop.png'
const Portfolio = () => {
    const portfolios=[        
        {filtre:'websites',src:Proshop,title:"Proshop",link:"https://github.com/Bachir-Ahmed-Rachid/Proshop-E-Commerce-App"},
        {filtre:'websites',src:GFVehicules,title:"GF-Vehicules",link:"https://github.com/Bachir-Ahmed-Rachid/GF-Vehicules-"},
        {filtre:'websites',src:OptiLog,title:"OptiLog",link:"https://user-images.githubusercontent.com/99692801/175486542-92e7b28b-1dbe-4b44-aba4-bdcde2ce551d.mp4"},
        {filtre:'algo',src:antcolony,title:"Ant-colony-optimization",link:"https://github.com/Bachir-Ahmed-Rachid/Ant-colony-optimization-for-travelling-salesman-problem-"},
        {filtre:'algo',src:BinPaking,title:"Bin-Paking-Problem",link:"https://github.com/Bachir-Ahmed-Rachid/Bin-Paking-Problem"},
        {filtre:'algo',src:FFD,title:"First-Fit-Decreasing-Algorithme",link:"https://github.com/Bachir-Ahmed-Rachid/First-Fit-Decreasing-Algorithme"},
        {filtre:'websites',src:KickStarter,title:"Kickstarter",link:"https://user-images.githubusercontent.com/99692801/175102832-1d7e22a5-6df4-4f09-8cde-8556da32bd85.mp4"},
        {filtre:'algo',src:LocalSearch,title:"Local-search-algorithm",link:"https://github.com/Bachir-Ahmed-Rachid/Local-search-algorithm"},
        {filtre:'algo',src:hbpp,title:"Heterogeneous bin paking problem",link:"https://github.com/Bachir-Ahmed-Rachid/Heterogeneous-bin-packing-problem-"},
    ]
  return (
    <div id="portfolio" class="section">

    <div className="container">

        <div className="row">

            <div className="heading">
                <h2>PORTFOLIO</h2>
            </div>

            <div className="filter">

                <ul id="filters">

                    <li>
                        <a href="#" data-filter="*" className="current">ALL</a>
                    </li>
                    <li>
                        <a href="#" data-filter=".algo">Optimization Algorithms</a>
                    </li>
                    <li>
                        <a href="#" data-filter=".websites">Websites</a>
                    </li>
                </ul>

            </div>

       
            <div style={{minHeight:"964px"}} className="itemsContainer">

                <ul className="items">

                    {portfolios.map((portfolio)=>(
                             <li className={`${portfolio.filtre} col-xs-6 col-sm-4 col-md-3 col-lg-4`}>


                             <div className="item">
     
                                 <img style={{height: '306px', width:'100%'}} src={portfolio.src}/>
     
     
                                 <div className="icons">
                                     <a href={portfolio.src} title="View image" className="openButton" data-fancybox data-caption={portfolio.title}>
                                         <i className="fa fa-search"></i>
                                     </a>
     
                                     <a href={portfolio.link} target="_blank" className="projectLink">
                                         <i className="fa fa-link"></i>
                                     </a>
                                 </div>
     
                                 <div className="imageOverlay"></div>
     
                             </div>
     
     
                         </li>
                    ))}
                   

                 

                </ul>

            </div>


        </div>

    </div>

</div>
  )
}

export default Portfolio