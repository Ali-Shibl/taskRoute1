import React from 'react'
import { NavLink } from 'react-router-dom'
import Data from '../../../posts.json'

export default function Footer() {
  return (
    <footer> 
      <section className='footer-top border-dark border-bottom border-top py-5'>
        <div className="container">
          <div className="row g-4">
            <div className="col-sm-6 col-md-4 col-xl-3">
              <div className='d-flex  text-white fs-5 fw-bold  align-items-center gap-2'>
               <span className='character'>ع</span>
              <span>عدسة</span>
              </div>
              <p className=' my-3'>مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.</p>
              
              <div className='social-media d-flex gap-2 align-items-center'>
                <div className='d-flex align-items-center'>
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div className='d-flex align-items-center'>
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div className='d-flex align-items-center'>
                  <i className="fa-brands fa-github"></i>
                </div>
                <div className='d-flex align-items-center'>
                  <i className="fa-brands fa-linkedin"></i>
                </div>

              </div>


            </div>
            <div className="col-sm-6 col-md-4 col-xl-3">
              <div className='d-flex align-items-center gap-3'>
                <span className='sepical'></span>
                <span className=' fs-6 fw-bold text-white '>استكشف</span>
              </div>
               <ul className='list-unstyled mt-4'>
                <li className='nav-item'>
                  <NavLink to={''} className={'nav-link'}>الرئيسية</NavLink>
                </li>
                <li className='nav-item my-3'>
                  <NavLink to={'blog'} className={'nav-link'}>المدونة</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to={'about'} className={'nav-link'}>من نحن</NavLink>
                </li>

               </ul>
              
            </div>
            <div className="col-sm-6 col-md-4 col-xl-3">
              <div className='d-flex align-items-center gap-3'>
                <span className='sepical'></span>
                <span className=' fs-6 fw-bold text-white '>التصنيفات</span>
              </div>
                <ul className='list-unstyled mt-4'>
 {Data.categories.map((category , index) => <li className='nav-item mb-3' key={index}>
                  <NavLink  to={`/blog?category=${category.name}`} className={'nav-link'}>{category.name}</NavLink>
                </li>
)}
                                    
               </ul>
              

            </div>
            <div className="col-sm-6 col-md-4 col-xl-3">
              <div className='d-flex align-items-center gap-3'>
                <span className='sepical'></span>
                <span className=' fs-6 fw-bold text-white '>ابقى على اطلاع</span>
              </div>
              <p className='my-3'>اشترك للحصول على أحدث المقالات والتحديثات.</p>

               <input type="text" placeholder='ادخل بريدك الالكتروني'  className='form-control mb-3'/>
              <button className='btn-main w-100'> الاشتراك </button>
            </div>
          </div>
        </div>
      </section>

      <section className='footer-bottom container'>
        <div className='d-flex flex-column flex-md-row justify-content-between align-items-center py-3'>
        <p>© 2026 عدسة. صنع بكل <i className='fa fa-solid fa-heart text-main'></i> جميع الحقوق محفوظة.</p>
        <div className='d-flex align-items-center gap-4'>
          <p> سياسة الخصوصية</p>
          <p>شروط الخدمة</p>
        </div>
        </div>
      </section>

    </footer>
  )
}
