import React from 'react'
import { Link, Links, useParams } from 'react-router-dom'
import Data from '../../../posts.json'
import styles from './PostDetails.module.css'
export default function PostDetails() {

const {id} = useParams();

const post = Data.posts.find(post => post.id ==  id);


  function Time(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('ar-EG', options);
  }
 


  return (
<>
<header className={`position-relative ${styles.header}`}>
  <img
    src={post.image}
    alt={post.title}
    className="w-100 h-100"
    style={{ objectFit: 'cover' }}
  />

<nav className='position-absolute   rounded-5 py-2 px-3' style={{top:'4%', right:'2%' , backgroundColor: '#535A5E',zIndex: 5}} >
  <ol className=" d-flex gap-3 align-items-center  list-unstyled  m-0 ">
    <li className="nav-item">
      <Link to="/" className='nav-link'><i className='fa fa-solid fa-home'></i></Link>
    </li>
    <span>/</span>
    <li className="nav-item">
      <Link to="/blog" className='nav-link'>المدونة</Link>
    </li>
    <span>/</span>
    <li className="nav-item text-main">
     {post.category}
    </li>
  </ol>
</nav>


  <div
    className={`position-absolute top-50 start-50 translate-middle p-4 ${styles.content}`}
  >
    <div className='d-flex align-items-center flex-wrap  gap-2'>
         <span className="btn-main ">{post.category}</span>
    <div className=" text-white-50 d-flex flex-wrap align-items-center gap-2 ">
                     <p className='m-0'>    <i className="fa-regular fa-clock me-1"></i> {post.readTime}</p>
                <p className='m-0'>    <i className="fa-regular fa-calendar me-1"></i> {Time(post.date)}</p>
    </div>
    </div>
 

    <h1 className="text-white title-page fw-bold my-4">
      {post.title}
    </h1>

    <div className="d-flex align-items-center gap-2 crad-gray py-3 px-4 rounded-4" style={{width:'fit-content'}}>
      <img
        src={post.author.avatar}
        alt={post.author.name}
        className="rounded-circle"
        width="50"
        height="50"
      />
      <div className="text-white">
        <div>{post.author.name}</div>
        <small className="text-white-50">{post.author.role}</small>
      </div>
    </div>
  </div>
</header>


<main>
  <section>
    <div className="container my-5">
      <div className="row g-4 justify-content-center">
        <div className="col-lg-8 col-xl-9">  

<p className={`mb-4 ${styles.sectionParagraph}`}>
{post.excerpt}
 </p>
  <p className='text-white-75 fs-5 mt-5'>{  post.content.split('.').splice(0,2).join('.') }</p>

<div className='mt-5'>
<h2 className='fw-bold mb-3' ><i className="fa-solid fa-camera text-main"></i>  لماذا الساعة الذهبية؟  </h2>
<p className='text-white-75 fs-5'>الضوء خلال هذا الوقت له صفات فريدة: ظلال طويلة ناعمة، ألوان دافئة ذهبية، وتباين منخفض يجعل كل شيء يبدو أجمل. البورتريهات تكتسب توهجاً طبيعياً والمناظر الطبيعية تتحول إلى لوحات فنية.</p>
</div>
<div className='mt-5'>
<h2 className='fw-bold mb-3' ><i className="fa-solid fa-camera text-main"></i>  التحضير المسبق </h2>
<p className='text-white-75 fs-5'>خطط لجلسة التصوير مسبقاً. استخدم تطبيقات مثل PhotoPills لمعرفة وقت الساعة الذهبية بدقة في موقعك. وصل قبل 30 دقيقة لاختيار أفضل زاوية. </p>
</div>
<div className='mt-5'>
<h2 className='fw-bold mb-3' ><i className="fa-solid fa-camera text-main"></i>  إعدادات الكاميرا </h2>
<p className='text-white-75 fs-5'>استخدم شاشة الكاميرا لضبط الإضاءة والتركيز. اختر وضع التصوير المناسب للضوء المتوفر. استخدم عدسة 24-70 ملم لالتقاط مناظر وصور بورتريه.</p>
</div>
<div className='mt-5'>
<h2 className='fw-bold mb-3' ><i className="fa-solid fa-camera text-main"></i>  التكوين الفني </h2>
<p className='text-white-75 fs-5'>استخدم شاشة الكاميرا لضبط الإضاءة والتركيز. اختر وضع التصوير المناسب للضوء المتوفر. استخدم عدسة 24-70 ملم لالتقاط مناظر وصور بورتريه.</p>
</div>
<div className='mt-5'>
<h2 className='fw-bold mb-3' ><i className="fa-solid fa-camera text-main"></i> الخلاصة </h2>
<p className='text-white-75 fs-5'>الساعة الذهبية هي هدية للمصورين. استغلها جيداً وستحصل على صور لا تُنسى تتميز بجمالها الطبيعي.</p>
</div>

<div className="mb-4 p-3 crad-gray rounded-4">
  <h6 className="mb-3">الوسوم</h6>
  <div className="d-flex flex-wrap gap-2">
    {post.tags.map((tag, index) => (
      <span key={index} className="badge bg-secondary">
        #{tag}
      </span>
    ))}
  </div>
</div>

<div className="mb-4 p-3 crad-gray rounded-4">
  <h6 className="mb-3">شارك المقال</h6>

           <div className='social-media d-flex gap-2 align-items-center'>
                <div className='d-flex align-items-center'>
                 <Link className='nav-link' to={Data.siteInfo.social.instagram} target="_blank"> <i className="fa-brands fa-instagram"></i></Link>
                </div>
                <div className='d-flex align-items-center'>
                  <Link  className='nav-link' to={Data.siteInfo.social.facebook} target="_blank"><i className="fa-brands fa-facebook-f"></i></Link>
                </div>
                <div className='d-flex align-items-center'>
                  <Link className='nav-link' to={Data.siteInfo.social.github} target="_blank"><i className="fa-brands fa-github"></i></Link>
                </div>
                <div className='d-flex align-items-center'>
                  <Link className='nav-link' to={Data.siteInfo.social.linkedin} target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                </div>

              </div>
</div>

<div className="mb-4 p-3 crad-gray rounded-4">
  <h6 className="mb-3">الكاتب</h6>
  <div className="d-flex align-items-center gap-3">
    <img
      src={post.author.avatar}
      alt={post.author.name}
      className="rounded-circle"
      width="60"
      height="60"
    />
    <div>
      <p className="mb-0 fw-bold">{post.author.name}</p>
      <small className="text-white-50">{post.author.role}</small>
    </div>
  </div>
</div>


       
        </div>
        <div className="col-lg-4 col-xl-3">  
          <div className='sticky-top' style={{top:'100px' , zIndex:'2'}}>
          
          <div >
           <div className='mb-4 p-3 crad-gray rounded-4'>
            <div className='d-flex align-items-center gap-3 mb-3'>
               <i className="fa-solid fa-list text-main"></i>
              <p className='m-0'>محتويات المقال</p>
            </div>
            <ol className='list-unstyled'>
              <li className='p-2 rounded-3 bg-dark mb-2 '> <span className='badge bg-black ms-2'>1</span> لماذا الساعة الذهبية؟</li>
              <li className='p-2 rounded-3 bg-dark mb-2 '> <span className='badge bg-black ms-2'>2</span>  التحضير المسبق</li>
              <li className='p-2 rounded-3 bg-dark mb-2 '> <span className='badge bg-black ms-2'>3</span>  توقيت التصوير</li>
              <li className='p-2 rounded-3 bg-dark mb-2 '> <span className='badge bg-black ms-2'>4</span>  المعدات الأساسية</li>
              <li className='p-2 rounded-3 bg-dark mb-2 '> <span className='badge bg-black ms-2'>5</span> إعدادات الكاميرا</li>
              <li className='p-2 rounded-3 bg-dark mb-2 '> <span className='badge bg-black ms-2'>6</span> التكوين الفني</li>
              <li className='p-2 rounded-3 bg-dark mb-2 '> <span className='badge bg-black ms-2'>7</span>  الخلاصة</li>
            </ol>
          </div>
          <div className='my-4 p-3 crad-gray rounded-4'>

            <div className="row g-3 align-items-center">
              <div className="col-md-6">
                <div className='card bg-black text-white text-center p-3 rounded-4 '>
                  <i className="fa fa-solid fa-camera mx-auto  text-main"></i>
                  <p className='my-2'>{post.readTime}</p>
                  <span className='text-white-50' style={{fontSize:'14px'}}>وقت القراءه</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className='card bg-black text-white text-center p-3 rounded-4 '>
                  <i className="fa fa-solid fa-camera mx-auto  text-main"></i>
                  <p className='my-2'>{Time(post.date)}</p>
                  <span className='text-white-50' style={{fontSize:'14px'}}> تاريخ النشر</span>
                </div>
              </div>
            </div>
            
          </div>
            
          </div>
          <div className={`mb-4 ${styles.sectionParagraph} text-center`}>
            <div className='d-flex justify-content-center align-items-center btn-main2  mx-auto p-3 rounded-4 ' style={{width:'fit-content'}}>
              <i className='fa fa-solid fa-voicemail'></i>
            </div>
            <p className='fw-semibold my-3'>لا تفوّت جديدنا</p>
            <p className='fs-6'>اشترك للحصول على أحدث المقالات</p>
            <button className='btn-main w-100'>تصفح المزيد</button>
           
          </div>
          </div>
          

        </div>

      </div>    
    </div>
  </section>
</main>

</>
  )
}
