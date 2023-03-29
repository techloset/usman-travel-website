import React from 'react'
import img1 from '../../images/subsection/img.png'
import img2 from '../../images/subsection/img1.png'
import img3 from '../../images/subsection/img2.png'
import img4 from '../../images/subsection/1.png'
import img5 from '../../images/subsection/2.png'
import img6 from '../../images/subsection/3.png'
import img7 from '../../images/subsection/4.png'
import vector from '../../images/subsection/Vector.png'
import Slider from "react-slick";
import RecentlyViewedSection from '../recently Viewed/viewed'
import Freebies from '../freebies/freebie'
import Packages from '../packages/packages'
export default ()=> {
  
    return ( 
        <>

   <RecentlyViewedSection></RecentlyViewedSection>
        <div className='w-full pb-4 overflow-hidden'>

   <Packages></Packages>
   </div>
   <div className='w-full  pb-4  overflow-hidden'>
  
   <Freebies></Freebies>
   </div>

      </>


    );
}



