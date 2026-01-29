import React from 'react'
import {Link ,  NavLink } from 'react-router-dom'
import Data from '../../../posts.json'
import Item from '../../Components/Item/Item';

export default function Home() {



const categoryIcons = {
  "إضاءة": "fa-lightbulb",
  "بورتريه": "fa-user",
  "مناظر طبيعية": "fa-mountain-sun",
  "تقنيات": "fa-sliders",
  "معدات": "fa-camera"
};



  return (
    <>


<header className='py-6 bg-header border-bottom border-dark'>
    <div className="container">



        <div className="row justify-content-center text-center">
        <div className="col-md-8">

   
 <span className='section-label'>
مرحبا بيك في عدسة
  </span>


  <h1 className='title-page fw-bolder my-5'> اكتشف   <span className='text-main'> فن</span>
  <br />
  التصوير الفوتوغرافي 
  </h1>

  <p className='text-white-50 text-page '>انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.</p>



<div className=' d-flex align-items-center justify-content-center flex-wrap gap-3 my-5'>
<Link to={'blog'} className='btn-main'>  استكشف المقالات  <i className='fa fa-solid fa-arrow-alt-circle-left'></i></Link>
<Link to={'about'} className='btn-main2'> <i className="fa-sharp fa-solid fa-exclamation"></i>  اعرف المزيد  </Link>

</div>

    
    <section className='row g-3'>
      <div className="col-sm-6 col-lg-4 col-xl-3">
        <div className="crad-gray">
          <i className='fa-solid fa-newspaper text-main m-0 fs-4'></i>
          <p className=' text-main fs-3 fw-bold mt-2 mb-0'>+50</p>
          <p className=' text-white-50 m-0'> مقالة</p>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="crad-gray">
          <i className='fa-solid fa-users text-main m-0 fs-4'></i>
          <p className=' text-main fs-3 fw-bold mt-2 mb-0'>+10 الف</p>
          <p className=' text-white-50 m-0'>قارئ</p>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 col-xl-3">
               <div className="crad-gray">
          <i className='fa-solid fa-file text-main m-0 fs-4'></i>
          <p className=' text-main fs-3 fw-bold mt-2 mb-0'>10</p>
          <p className=' text-white-50 m-0'>تصنيفات</p>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="crad-gray">
          <i className='fa-solid fa-book-open  text-main m-0 fs-4'></i>
          <p className=' text-main fs-3 fw-bold mt-2 mb-0'>6</p>
          <p className=' text-white-50 m-0'>كاتب</p>
        </div>
      </div>

    </section>
         </div>
      </div>
    
  </div> 
</header>



<main className="">
  <section className='py-5 container'>
    
 <a className='section-label'>
   مميز 
  </a>

  <h2 className='title-page my-3 fw-bold'>مقالات مختارة</h2>

  <div className="d-flex justify-content-between flex-wrap align-items-center gap-3">
    <p className='text-white-50 mb-0 text-page'>محتوى منتقى لبدء رحلة تعلمك</p>
    <NavLink to={'/blog'} className='btn-main text-decoration-none'>  عرض الكل  <i className='fa fa-solid fa-arrow-alt-circle-left me-1'></i></NavLink>
  </div>


<div className='row g-4 mt-4'>
  {Data.posts.slice(0, 3).map((post , index) =>  <Item key={index} post={post} view={'list'}  />
)}
      

</div>


</section>


 <section className="py-6 border-dark border-bottom border-top bg-gray">
   <div className="container">

    <section className='text-center'>
 <a className='section-label'>
   التصنيفات 
  </a> 
   <h2 className='mt-5 title-page fw-bold'>استكشف حسب الموضوع</h2>
    <p className='text-white-50 fs-5  mb-5'>   اعثر على محتوى مصمم حسب اهتماماتك   </p>

       <div className="row  text-end g-3"> 


{Data.categories.map((category , index) =>  <NavLink to={`/blog?category=${category.name}`} className="col-sm-6 col-lg-4 col-xl-3" key={index}>
        <div className="crad-category ">
          <i className={`fa-solid ${categoryIcons[category.name] || 'fa-bullseye'}   m-0 fs-1`} ></i>
          <p className=' fs-5 fw-bold my-2 mb-0  '> {category.name}</p>
          <span className='text-white-50 m-0'> {category.count}  مقالات</span>
        </div>
      </NavLink>
)}
               
     



      </div>      
    </section>




   </div>
  </section>  

</main>

  </>)
}
