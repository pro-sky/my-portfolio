import React from 'react'
import './Resume.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Resume = () => {
  return (
    <div className='resume-container'>
        {/* <div className='resume.parent'>
                   <div className='resume-details-name'>
                    <span className='primary-text'>
                        {" "}
                       Skills
                    </span>
                   </div>
        </div> */}
        
        <h2> What Skills I Have</h2>
        <div className='container'>
          <div className='web-development'>
               <h3> Web Development</h3>  
               <div className='web-content'>
                <article className='web-details'>
                  <BsPatchCheckFill className='icons'/>
                 <div>
                   <h4> HTML</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                  </article>
                  <article className='web-details'>
                  <BsPatchCheckFill className='icons'/>
                 <div>
                 <h4> CSS</h4>
                  <small className='text-light'>Intermediate</small>
                 </div>
                  </article>
                  <article className='web-details'>
                  <BsPatchCheckFill className='icons'/>
                 <div>
                 <h4> Javascript</h4>
                  <small className='text-light'>Intermediate</small>
                 </div>
                  </article>
                  <article className='web-details'>
                  <BsPatchCheckFill className='icons' />
                 <div>
                 <h4> ReactJs</h4>
                  <small className='text-light'>Intermediate</small>
                 </div>
                  </article>
                  <article className='web-details'>
                  <BsPatchCheckFill className='icons'/>
                 <div>
                 <h4> Ruby on Rails</h4>
                  <small className='text-light'>Intermediate</small>
                 </div>
                  </article>
                  <article className='web-details'>
                  <BsPatchCheckFill className='icons'/>
                 <div>
                 <h4> Bootstrap</h4>
                  <small className='text-light'>Intermediate</small>
                 </div>
                  </article>

               </div>
          </div>
          
          {/* END OF DEVELOPMENT */}
         
           <div className='language'>
           <h3> Programming language</h3>  
               <div className='web-content'>
                <article className='web-details'>
                  <BsPatchCheckFill className='icons'/>
                 <div>
                 <h4> C </h4>
                  <small className='text-light'>Intermediate</small>
                 </div>
                  </article>
                  <article className='web-details'>
                  <BsPatchCheckFill className='icons'/>
                  <div>
                  <h4> C++</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                  </article>
                  <article className='web-details'>
                  <BsPatchCheckFill className='icons'/>
                 <div>
                 <h4>Python</h4>
                  <small className='text-light'>Basic</small>
                 </div>
                  </article>
                  <article className='web-details'>
                  <BsPatchCheckFill className='icons'/>
                 <div>
                 <h4>Data Structure</h4>
                  <small className='text-light'>Intermediate</small>
                 </div>
                  </article>
                

               </div>
           </div>
          
        </div>
    </div>
  )
}

export default Resume
