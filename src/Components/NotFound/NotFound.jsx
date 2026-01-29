import React from "react";
import { Link } from "react-router-dom";
import style from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className="d-flex bg-header justify-content-center  align-items-center ">
      <div className=" shadow-lg border-0 rounded-4 p-4 text-center">


          {/* 404 */}
          <h1 className={`fw-bold text-main mb-2 ${style.titlePage}`}>404</h1>



            <div className={`${style.svgContainer} mb-4 `}>
              <svg viewBox="0 0 246 246"  className={`${style.svg}`} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_397_3252)"> <g filter="url(#filter0_iii_397_3252)"> <path d="M0 115C0 51.4872 51.4873 0 115 0H127C192.722 0 246 53.2781 246 119V127C246 192.722 192.722 246 127 246H123C55.069 246 0 190.931 0 123V115Z" fill="url(#paint0_radial_397_3252)"></path> </g> <g filter="url(#filter1_i_397_3252)"> <path d="M71 105C79.6667 109.333 97.1 119.5 97.5 125.5C97.9 131.5 80 142.667 71 147.5" stroke="#221725" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> </g> <g filter="url(#filter2_i_397_3252)"> <path d="M174.013 105C165.347 109.333 147.913 119.5 147.513 125.5C147.113 131.5 165.013 142.667 174.013 147.5" stroke="#221725" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> </g> <g filter="url(#filter3_i_397_3252)"> <path d="M61 177.529L78.6211 195L100.811 173L123 195L145.189 173L167.379 195L185 177.529" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M61 177.529L78.6211 195L100.811 173L123 195L145.189 173L167.379 195L185 177.529" stroke="#221725" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g> <defs> <filter id="filter0_iii_397_3252" x="-11" y="-24" width="278" height="326" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect1_innerShadow_397_3252"></feMorphology> <feOffset dx="21" dy="73"></feOffset> <feGaussianBlur stdDeviation="24"></feGaussianBlur> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0.682806 0 0 0 0 0.0652778 0 0 0 0 0.783333 0 0 0 0.14 0"></feColorMatrix> <feBlend mode="normal" in2="shape" result="effect1_innerShadow_397_3252"></feBlend> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feOffset dy="-24"></feOffset> <feGaussianBlur stdDeviation="15.5"></feGaussianBlur> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0.943639 0 0 0 0 0.223611 0 0 0 0 0.958333 0 0 0 0.44 0"></feColorMatrix> <feBlend mode="normal" in2="effect1_innerShadow_397_3252" result="effect2_innerShadow_397_3252"></feBlend> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feOffset dx="-11" dy="30"></feOffset> <feGaussianBlur stdDeviation="15.5"></feGaussianBlur> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.766722 0 0 0 0 0.693056 0 0 0 0.68 0"></feColorMatrix> <feBlend mode="normal" in2="effect2_innerShadow_397_3252" result="effect3_innerShadow_397_3252"></feBlend> </filter> <filter id="filter1_i_397_3252" x="62.9983" y="96.9983" width="42.5085" height="58.5032" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feMorphology radius="26.45" operator="dilate" in="SourceAlpha" result="effect1_innerShadow_397_3252"></feMorphology> <feOffset dx="9.2" dy="-9"></feOffset> <feGaussianBlur stdDeviation="10.35"></feGaussianBlur> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0.462111 0 0 0 0 0.203767 0 0 0 0 0.504167 0 0 0 0.35 0"></feColorMatrix> <feBlend mode="normal" in2="shape" result="effect1_innerShadow_397_3252"></feBlend> </filter> <filter id="filter2_i_397_3252" x="139.506" y="96.9983" width="42.5085" height="58.5032" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feMorphology radius="26.45" operator="dilate" in="SourceAlpha" result="effect1_innerShadow_397_3252"></feMorphology> <feOffset dx="9.2" dy="-9"></feOffset> <feGaussianBlur stdDeviation="10.35"></feGaussianBlur> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0.462111 0 0 0 0 0.203767 0 0 0 0 0.504167 0 0 0 0.35 0"></feColorMatrix> <feBlend mode="normal" in2="shape" result="effect1_innerShadow_397_3252"></feBlend> </filter> <filter id="filter3_i_397_3252" x="53.5" y="165.5" width="139" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feMorphology radius="26.45" operator="dilate" in="SourceAlpha" result="effect1_innerShadow_397_3252"></feMorphology> <feOffset dx="9.2" dy="-9"></feOffset> <feGaussianBlur stdDeviation="10.35"></feGaussianBlur> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0.462111 0 0 0 0 0.203767 0 0 0 0 0.504167 0 0 0 0.35 0"></feColorMatrix> <feBlend mode="normal" in2="shape" result="effect1_innerShadow_397_3252"></feBlend> </filter> <radialGradient id="paint0_radial_397_3252" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(109 16) rotate(86.5167) scale(230.426)"> <stop offset="0.576389" stop-color="#FFBB0C"></stop> <stop offset="1" stop-color="#FFC907"></stop> </radialGradient> <clipPath id="clip0_397_3252"> <rect width="246" height="246" fill="white"></rect> </clipPath> </defs> </g></svg>
            </div>

         

          {/* Text */}
          <h5 className={`  ${style.textPage}`}>عفواً! الصفحة غير موجودة</h5>
          <p className="text-white-50  my-4">
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
            يمكنك الرجوع للصفحة الرئيسية والمحاولة مرة أخرى.
          </p>

{/* Buttons */}
<div className="d-flex gap-3 justify-content-center flex-wrap">
  <Link to="/"className="btn-main px-4 py-2 rounded-pill  d-inline-flex align-items-center">
    <i className="fa-solid fa-house mx-2"></i>
    العودة للرئيسية
  </Link>

  <Link to="/blog"className="btn-out-main border px-4 py-2 rounded-pill  d-inline-flex align-items-center">
    <i className="fa-solid fa-newspaper mx-2"></i>
    تصفح المقالات
  </Link>
</div>

      </div>
    </div>
  );
}