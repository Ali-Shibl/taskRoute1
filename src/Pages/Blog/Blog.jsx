import React, { use, useEffect, useState } from 'react'
import Data from '../../../posts.json'
import Item from '../../Components/Item/Item';
import { useParams, useSearchParams } from 'react-router-dom';

export default function Blog() {

  const [searchParams ,  setSearchParams] = useSearchParams();
  const nameCategory = searchParams.get('category') ;

const [view, setView] = useState('grid'); 



const [selectedCategory, setSelectedCategory] = useState('الجميع');
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  let filterSearch = posts.filter(post =>{
    return    post.title.toLowerCase().includes(search.toLowerCase()) 
    || post.author.name.toLowerCase().includes(search.toLowerCase())
   || post.category.toLowerCase().includes(search.toLowerCase())
  });

  function filterBtn(categoryName) {
    setSelectedCategory(categoryName);

    if (categoryName === 'الجميع') {
      setPosts(Data.posts);
    } else {
      setPosts(
        Data.posts.filter(item => item.category === categoryName)
      );
    }
 }




  useEffect( () => {
    setCategories(Data.categories);
    setPosts(Data.posts);
  
  }, []);

  useEffect( () => {
      filterBtn(nameCategory);
   
  }, [nameCategory]);




  return (
    <>
 
<header className='py-6 bg-header'>
    <div className="container">

      <div className="row justify-content-center text-center">
        <div className="col-md-8">

   

<span className='section-label'>
     مدونتنا 
  </span>


  <h1 className='title-page fw-bolder my-4'> استكشف   <span className='text-main'> مقالاتنا</span></h1>
  <p className=' text-white-50 text-page'>اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>

         </div>
      </div>
 
  </div> 
</header>


<main>
    
    <div className=' filterBox py-3 border-bottom border-dark position-sticky' style={{top:'80px'}}>

      <div className='container'>

      <div className="row justify-content-between g-3 align-items-center ">
        <div className="col-md-5 col-lg-4">    
          <div className="search position-relative">
            <input type="text" placeholder=' ابحث عن مقالة...' value={search}  className='form-control' onChange={(e)=> setSearch(e.target.value)}/>
            <i className='fa fa-solid fa-search text-white-50 position-absolute top-50 translate-middle ' style={{left:'6%'}}></i>
          </div>  
        </div>
        <div className="col-md-6  col-lg-8 ">
            <div className=" d-flex align-items-center justify-content-end flex-wrap gap-1">
            <button className={`btn-main ${selectedCategory === 'الجميع' ? 'btn-main' : 'btn-main2'}`}    onClick={()=>filterBtn('الجميع')}>الكل</button>

            {categories && categories.map((category,index)=>(
            <button key={index} className={` ${selectedCategory === category.name ? 'btn-main' : 'btn-main2'}`}  onClick={()=>filterBtn(category.name)}>{category.name}</button>
          ))}</div>

        </div>

      </div>

</div>

    </div>




<section>
  <div className="container py-5">


    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-5">
      <p className=' m-0'>عرض {filterSearch.length}   مقالات   <strong className="text-main"> {selectedCategory}</strong></p>

      <div className='d-flex align-items-center gap-2'>

        <div className="d-flex gap-1 border border-2 border-dark rounded-5 p-1">

  <button className={`btn-sm ${view === 'grid' ? 'btn-main' : 'btn-main2'}`} onClick={() => setView('grid')}>
    <i className="fa-solid fa-grip"></i>
  </button>

  <button className={`btn-sm ${  view === 'list' ? 'btn-main' : 'btn-main2' }`} onClick={() => setView('list')}>
    <i className="fa-solid fa-list"></i>
  </button>

</div>
    {selectedCategory !== 'الجميع' && <button className='btn text-white-50 btn-sm'  onClick={() => filterBtn('الجميع')}>   <i className="fa fa-solid fa-close"></i>
  مسح الفلاتر
 </button>}
      </div>

    </div>

    <div className="row g-4">
      {filterSearch &&
      filterSearch.length > 0 ?
      
      filterSearch.map((post,index)=><Item key={index} post={post} view={view} />)

    :<p className="text-center alert alert-danger fs-5">لا توجد  مقالات في {selectedCategory}</p>}
    </div>
  
  </div>
</section>

</main>  


    </>
  )
}
