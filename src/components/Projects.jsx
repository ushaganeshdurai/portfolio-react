import React from 'react'
import Navbar from './Navbar'

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="text-center p-10">
        <h1 className="font-bold text-white text-4xl mb-4">My Projects</h1>
      </div>

      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {/* Project 1 */}
        <a
          href="https://ushaganeshdurai.github.io/SIMPLE-CALCULATOR/"
          className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <img
            src="https://cms.involve.me/blog/how-to-create-a-simple-price-calculator-and-capture-more-leads/calculator-L.png"
            alt="Product"
            className="h-80 w-72 object-cover rounded-t-xl"
          />
          <div className="px-4 py-3 w-72">
            <p className="text-lg font-bold text-black truncate block capitalize">Calculator</p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-gray-600 cursor-auto my-3">HTML CSS JS</p>
            </div>
          </div>
        </a>

        {/* Project 2 */}
        <a
          href="https://reactbookstore-frontend.vercel.app/"
          className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <img
            src="https://media1.giphy.com/media/ZcdDG0yjF6XmoQ2xLD/giphy.gif?cid=6c09b952szi4ie05cx82twsxcqyjussp31o33lda8rei8kaw&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
            alt="Product"
            className="h-80 w-72 object-cover rounded-t-xl"
          />
          <div className="px-4 py-3 w-72">
            <p className="text-lg font-bold text-black truncate block capitalize">Book store</p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-gray-600 cursor-auto my-3">MERN stack</p>
            </div>
          </div>
        </a>

        {/* Project 3 */}
        <a
          href="https://www.figma.com/file/QJI4MmljHy722Uxvo47XnK/first-design?type=design&node-id=0%3A1&mode=design&t=Iq2VwmFcYmRlbA6N-1"
          className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <img
            src="https://s3-alpha.figma.com/hub/file/1166690750/85f69649-5387-44c2-ba45-81ae13812e36-cover.png"
            alt="Product"
            className="h-80 w-72 object-cover rounded-t-xl"
          />
          <div className="px-4 py-3 w-72">
            <p className="text-lg font-bold text-black truncate block capitalize">Responsive Web Design</p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-gray-600 cursor-auto my-3">Figma</p>
            </div>
          </div>
        </a>

        {/* Remaining Projects: Repeat structure like above */}
        <a href="https://ushaganeshdurai.github.io/dictionary-app/" className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <img src="https://cdn.hswstatic.com/gif/dictionary.jpg" alt="Dictionary" className="h-80 w-72 object-cover rounded-t-xl" />
          <div className="px-4 py-3 w-72">
            <p className="text-lg font-bold text-black truncate block capitalize">Dictionary</p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-gray-600 cursor-auto my-3">API</p>
            </div>
          </div>
        </a>

        <a href="https://zenplas.in" className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <img src="https://ik.imagekit.io/tpkbnlhpp/logo-removebg-preview.png?updatedAt=1720878607334?tr=f-webp" alt="ZenPlas" className="h-80 w-72 object-cover rounded-t-xl" />
          <div className="px-4 py-3 w-72">
            <p className="text-lg font-bold text-black truncate block capitalize">ZenPlas</p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-gray-600 cursor-auto my-3">Freelance Project</p>
            </div>
          </div>
        </a>

        <a href="https://cake-wheel.vercel.app" className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <img src="https://images.jdmagicbox.com/v2/comp/chennai/m9/044pxx44.xx44.210916030607.t2m9/catalogue/cake-wheel-k-k-nagar-chennai-cake-shops-ulfptxdza9.jpg" alt="Cakewheel" className="h-80 w-72 object-cover rounded-t-xl" />
          <div className="px-4 py-3 w-72">
            <p className="text-lg font-bold text-black truncate block capitalize">Cakewheel</p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-gray-600 cursor-auto my-3">Freelance Project</p>
            </div>
          </div>
        </a>

        <a href="https://github.com/ushaganeshdurai/ecommerce" className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <img src="https://www.zilliondesigns.com/blog/wp-content/uploads/EcommerceLogos.jpg" alt="E-Commerce" className="h-80 w-72 object-cover rounded-t-xl" />
          <div className="px-4 py-3 w-72">
            <p className="text-lg font-bold text-black truncate block capitalize">E-Commerce</p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-gray-600 cursor-auto my-3">Next js</p>
            </div>
          </div>
        </a>

        <a href="https://github.com/ushaganeshdurai/appointmentbookingsystem-frontend.vercel.app" className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <img src="https://media.licdn.com/dms/image/v2/C5612AQGE9Gqz32GO4Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1547706841226?e=2147483647&v=beta&t=FswdnaK7CEP87by7kJCWz3hDiQIJiAtBS1ss2MJk2Fc" alt="Appointment Booking" className="h-80 w-72 object-cover rounded-t-xl" />
          <div className="px-4 py-3 w-72">
            <p className="text-lg font-bold text-black truncate block capitalize">Appointment Booking <br /> System</p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-gray-600 cursor-auto my-3">MERN stack</p>
            </div>
          </div>
        </a>

        <a href="https://github.com/ushaganeshdurai/appointmentbookingsystem-frontend.vercel.app" className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <img src="https://media.licdn.com/dms/image/D5612AQGplp7JKG6Iiw/article-cover_image-shrink_720_1280/0/1673950361361?e=2147483647&v=beta&t=NxzErCoXqQ-xwkHJZZkKGKYNA21hJh3oNMUJzNKQr9M" alt="Expense Tracker" className="h-80 w-72 object-cover rounded-t-xl" />
          <div className="px-4 py-3 w-72">
            <p className="text-lg font-bold text-black truncate block capitalize">Personal Expense <br /> Tracker</p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-gray-600 cursor-auto my-3">Sveltekit</p>
            </div>
          </div>
        </a>

        {/* Placement Tracker without link */}
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <img
            src="https://media1.giphy.com/media/ZcdDG0yjF6XmoQ2xLD/giphy.gif?cid=6c09b952szi4ie05cx82twsxcqyjussp31o33lda8rei8kaw&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
            alt="Placement Tracker Backend"
            className="h-80 w-72 object-cover rounded-t-xl"
          />
          <div className="px-4 py-3 w-72">
            <p className="text-lg font-bold text-black truncate block capitalize">Placement Tracker - backend</p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-gray-600 cursor-auto my-3">Hono js, Supabase</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
