import React from 'react'

const Projects = () => {
  return (<>
<div class="text-center p-10">
    <h1 class="font-bold text-white text-4xl mb-4">My Projects</h1>
</div>

<section id="Projects"
    class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src='https://cms.involve.me/blog/how-to-create-a-simple-price-calculator-and-capture-more-leads/calculator-L.png'
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <p class="text-lg font-bold text-black truncate block capitalize">Calculator</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-gray-600  cursor-auto my-3">HTML CSS JS</p>
                </div>
            </div>
        </a>
    </div>

    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src='https://media1.giphy.com/media/ZcdDG0yjF6XmoQ2xLD/giphy.gif?cid=6c09b952szi4ie05cx82twsxcqyjussp31o33lda8rei8kaw&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s'
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <p class="text-lg font-bold text-black truncate block capitalize">Book store</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-gray-600 cursor-auto my-3">React js MongoDB</p>
                    
                </div>
            </div>
        </a>
    </div>

    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src="https://s3-alpha.figma.com/hub/file/1166690750/85f69649-5387-44c2-ba45-81ae13812e36-cover.png"
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <p class="text-lg font-bold text-black truncate block capitalize">Responsive Web Design</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-gray-600 cursor-auto my-3">Figma</p>
                    
                </div>
            </div>
        </a>
    </div>
  
    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src="https://cdn.hswstatic.com/gif/dictionary.jpg"
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <p class="text-lg font-bold text-black truncate block capitalize">Dictionary</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-gray-600 cursor-auto my-3">API</p>
                </div>
            </div>
        </a>
    </div>
    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src="https://www.zilliondesigns.com/blog/wp-content/uploads/EcommerceLogos.jpg"
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <p class="text-lg font-bold text-black truncate block capitalize">E-Commerce</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-gray-600 cursor-auto my-3">Next js</p>
                </div>
            </div>
        </a>
    </div>
    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src="https://www.dotcominfoway.com/wp-content/uploads/2020/01/social-media-app-cost.png"
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <p class="text-lg font-bold text-black truncate block capitalize">Social Media App</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-gray-600 cursor-auto my-3">React js</p>
                </div>
            </div>
        </a>
    </div>
</section>
</>
  )
}

export default Projects;