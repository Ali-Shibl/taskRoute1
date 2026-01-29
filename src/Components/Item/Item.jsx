import React from 'react'
import { Link } from 'react-router-dom';

export default function Item({post, view}) {
 
  function Time(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('ar-EG', options);
  }
 
 
  return (
    <>
            <Link to={`/PostDetails/${post.id}`}  className={` ${view === 'list' ? 'col-12' : 'col-md-6 col-lg-4'} text-white `}>
          <div className={`card-blog h-100  position-relative shadow-sm rounded-5 border border-dark overflow-hidden ${view === 'list' ? 'd-md-flex' : ''}`}>
            <div className={`card-img overflow-hidden ${view === 'list' ? 'w-card ' : ''}`}>
              <img src={post.image} alt={post.title} className="w-100 h-100 object-fit-cover " />
            </div>              

            <div className="card-body p-3 ">            
              

              <div className="d-flex align-items-center text-white-50  gap-2">              
                <span className={`badge bg-dark rounded-4 p-2 px-3 border border-dark ${view !== 'list' && 'position-absolute'}`} style={{right:'5%', top:'3%'}}>{post.category}</span>

                <p className='m-0'>    <i className="fa-regular fa-clock me-1"></i> {post.readTime}</p>
                <p className='m-0'>    <i className="fa-regular fa-calendar me-1"></i> {Time(post.date)}</p>
              </div>
              <h5 className="card-title mt-2 fw-bold">{post.title}</h5>
              <p className="my-3 text-white-50">{post.excerpt}</p>

              <div className='person  border-top pt-3 border-dark d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center gap-2'>

                  <img src={post.author.avatar} alt={post.author.name} className='rounded-circle' style={{width:'40px', height:'40px', objectFit:'cover'}} />
                  <div>
                  <p className='text-white fw-bold m-0'>{post.author.name}</p>
                  <p className='text-white-50 m-0'>{post.author.role}</p>
                  </div>
                </div>


               <div className=' d-flex align-items-center gap-2'>
                <span>{view == 'list' && 'اقراء'} </span>
                <button className='btn-sm btn-outline'> 
                 <i className="fa fa-solid  fa-arrow-left"></i>
                </button>
                 
               </div>
                

              </div>
            </div>
          </div>
        </Link>
    </>
  )
}
