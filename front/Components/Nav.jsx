'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronDown, Search } from 'lucide-react'
import {AnimatePresence , motion} from 'framer-motion'
export default function Nav() {
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null)

  const topLinks = [
    { id: 1, title: 'مجلس الإدارة', url: '/Pages/Directors' },
    { id: 2, title: 'المتجر', url: '/Pages/Store' },
    { id: 3, title: 'اتصل بنا', url: '/Pages/CallUs' },
    { id: 4, title: 'تاريخ النادي', url: '/Pages/About' },
    { id: 5, title: 'رؤساء النادي', url: '/Pages/Presidents' },
    { id: 6, title: 'متحف النادي', url: '/Pages/Measum' },
  ]

  const links = [
    { id: 1, title: 'الرئيسية', url: '/' },
    { id: 2, title: 'الأخبار', url: '/Pages/News' },
    {
      id: 3, title: 'الفرق', url: '/team', sublinks: [
        { id: 51, title: 'فريق كرة القدم', url: '/Pages/Players/Football' },
        { id: 52, title: 'فريق كرة السلة', url: '/Pages/Players/basketball' },
        { id: 53, title: 'فريق الكرة الطائرة', url: '/Pages/Players/volleyball' },
        { id: 54, title: 'فريق كرة اليد', url: '/Pages/Players/handball' },
        { id: 55, title: 'فرق السيدات', url: '/Pages/Players/women' },
      ]
    },
    {
      id: 4, title: 'الوسائط', url: '/media', sublinks: [
        { id: 61, title: 'الصور', url: '/Pages/Photos' },
        { id: 62, title: 'الفيديوهات', url: '/Pages/Videos' },
      ]
    },
    { id: 5, title: 'المباريات', url: '/Pages/Fixtures' },
    { id: 6, title: 'جدول الترتيب', url: '/Pages/Table' },
  ]

  const toggleDropdown = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id)
  }

  return (
    <nav dir="rtl" className="w-full font-[Cairo] relative z-50 shadow">
      
      {/* الصف العلوي */}
      <div className="bg-gray-50 text-gray-700 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center px-6 py-2 text-sm">
          <div className="flex items-center gap-2">
            <Image src="/nike.png" alt="Nike" width={26} height={26} />
            <div className='flex gap-4 items-center'>
              {topLinks.map(link => (
                <Link key={link.id} href={link.url} className="hover:text-red-600 transition">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Search size={18} className="cursor-pointer hover:text-red-600" />
            <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition">
              دخول
            </button>
          </div>
        </div>
      </div>

      {/* الصف الرئيسي */}
      <div className="relative bg-white border-b border-gray-200">
        {/* خلفية شفافة */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-60 pointer-events-none"
          style={{ backgroundImage: "url('/head.png')" }}
        />

        <div className="container mx-auto flex justify-between items-center px-6 py-4 relative z-10">
          
          {/* الشعار */}
          <div className="flex items-center gap-3">
            <Image src="/zsc.png" alt="شعار الزمالك" width={60} height={60} />
            <Image src="/20Zsc.png" alt="شعار 20" width={50} height={50} />
          </div>

          {/* روابط الديسكتوب */}
          <ul className="hidden md:flex items-center gap-8 font-semibold text-lg">
            {links.map(link => (
              <li key={link.id} className="group relative">
                <Link
                  href={link.url}
                  className="flex items-center gap-1 text-gray-800 hover:text-red-600 transition relative"
                  onClick={(e) => link.sublinks && e.preventDefault()}
                >
                  {link.title}
                  {link.sublinks && <ChevronDown size={16} className="text-red-600" />}
                  {/* خط متحرك تحت الرابط */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all"></span>
                </Link>

                {/* Mega Menu مع Animation */}
                <AnimatePresence>
                  {link.sublinks && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-3 min-w-[250px] bg-white shadow-lg rounded-lg border border-gray-100
                                 opacity-0 invisible group-hover:visible group-hover:opacity-100
                                 transition-all duration-300"
                    >
                      <div className="grid grid-cols-1 gap-2 p-4">
                        {link.sublinks.map(sublink => (
                          <Link
                            key={sublink.id}
                            href={sublink.url}
                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition"
                          >
                            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm">
                              •
                            </div>
                            {sublink.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* زر الموبايل */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* قائمة الموبايل مع Animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg p-5 flex flex-col space-y-3 md:hidden z-50"
          >
            <button onClick={() => setOpen(false)} className="self-end mb-4">
              <X size={28} />
            </button>
            {links.map(link => (
              <div key={link.id}>
                {!link.sublinks ? (
                  <Link href={link.url} className="block text-gray-800 hover:text-red-600" onClick={() => setOpen(false)}>
                    {link.title}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.id)}
                      className="flex justify-between items-center w-full text-gray-800 hover:text-red-600"
                    >
                      {link.title}
                      <ChevronDown size={20} className={`${dropdownOpen === link.id ? 'rotate-180' : ''} transition-transform`} />
                    </button>
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: dropdownOpen === link.id ? 'auto' : 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      {link.sublinks.map(sublink => (
                        <Link
                          key={sublink.id}
                          href={sublink.url}
                          className="block pr-4 py-2 text-gray-600 hover:text-red-600"
                          onClick={() => setOpen(false)}
                        >
                          {sublink.title}
                        </Link>
                      ))}
                    </motion.div>
                  </>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

// 'use client'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useState } from 'react'
// import { Menu, X, ChevronDown } from 'lucide-react'

// export default function ZamalekNavPro() {
//   const [open, setOpen] = useState(false)
//   const [dropdownOpen, setDropdownOpen] = useState(null)

//   const links = [
//     { id: 1, title: "الرئيسية", url: "/" },
//     { id: 2, title: "الأخبار", url: "/Pages/News" },
//     { id: 3, title: "المباريات", url: "/Pages/Fixtures" },
//     { id: 4, title: "جدول الترتيب", url: "/Pages/Table" },
//     {
//       id: 5, title: "الفرق", url: "/Pages/Players", sublinks: [
//         { id: 51, title: "كرة القدم", url: "/Pages/Players/Football" },
//         { id: 52, title: "كرة السلة", url: "/Pages/Players/Basketball" },
//         { id: 53, title: "الكرة الطائرة", url: "/Pages/Players/Volleyball" },
//         { id: 54, title: "كرة اليد", url: "/Pages/Players/Handball" },
//         { id: 55, title: "فرق السيدات", url: "/Pages/Players/Women" },
//       ]
//     },
//     {
//       id: 6, title: "الوسائط", url: "/media", sublinks: [
//         { id: 61, title: "الصور", url: "/Pages/photos" },
//         { id: 62, title: "الفيديوهات", url: "/Pages/videos" },
//       ]
//     },
//   ]

//   const toggleDropdown = (id) => {
//     setDropdownOpen(dropdownOpen === id ? null : id)
//   }

//   return (
//     <nav
//       dir="rtl"
//       className="w-full font-[Cairo] sticky top-0 z-50 shadow-lg bg-gradient-to-l from-red-800 via-red-700 to-red-600 relative"
//     >


//       {/* المحتوى */}
//       <div  className="relative z-10 flex justify-between items-center px-6 py-4">
//         {/* الروابط - يسار */}
//         <ul className="hidden md:flex items-center gap-8 text-white font-semibold text-lg">
//           {links.map(link => (
//             <li key={link.id} className="relative group">
//               <Link
//                 href={link.url}
//                 onClick={(e) => link.sublinks && e.preventDefault()}
//                 className="transition-all hover:text-yellow-300 relative after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all hover:after:w-full"
//               >
//                 {link.title}
//               </Link>
//               {link.sublinks && (
//                 <ul className="absolute bg-white border border-red-600 rounded-md top-full right-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-lg min-w-[200px]">
//                   {link.sublinks.map(s => (
//                     <li key={s.id}>
//                       <Link href={s.url} className="block px-4 py-2 hover:bg-red-50 hover:text-red-700">
//                         {s.title}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* الشعار */}
//         <div className="flex items-center justify-center">
//           <Image
//             src="/zsc.png"
//             alt="شعار الزمالك"
//             width={80}
//             height={80}
//             className="drop-shadow-lg hover:scale-105 transition-transform duration-300"
//           />
//         </div>

//         {/* زر الموبايل */}
//         <div className="md:hidden">
//           <button onClick={() => setOpen(!open)}>
//             {open ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
//           </button>
//         </div>
//       </div>

//       {/* قائمة الموبايل */}
//       {open && (
//         <>
//           <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setOpen(false)}></div>
//           <div className="fixed top-0 right-0 w-72 bg-white h-full z-50 shadow-lg p-6 flex flex-col gap-4 overflow-auto">
//             <button className="self-end text-red-700 mb-4" onClick={() => setOpen(false)}>
//               <X size={28} />
//             </button>
//             {links.map(link => (
//               <div key={link.id}>
//                 {!link.sublinks ? (
//                   <Link href={link.url} className="block text-lg font-medium text-red-700" onClick={() => setOpen(false)}>
//                     {link.title}
//                   </Link>
//                 ) : (
//                   <>
//                     <button
//                       onClick={() => toggleDropdown(link.id)}
//                       className="w-full flex justify-between items-center text-lg font-medium text-red-700"
//                     >
//                       {link.title}
//                       <ChevronDown size={20} className={`${dropdownOpen === link.id ? 'rotate-180' : ''} transition-transform`} />
//                     </button>
//                     <div className={`overflow-hidden transition-all ${dropdownOpen === link.id ? 'max-h-96 mt-2' : 'max-h-0'}`}>
//                       {link.sublinks.map(s => (
//                         <Link
//                           key={s.id}
//                           href={s.url}
//                           className="block pl-4 py-2 text-red-600"
//                           onClick={() => setOpen(false)}
//                         >
//                           {s.title}
//                         </Link>
//                       ))}
//                     </div>
//                   {/* </> */}
//                 )}
//               </div>
//             ))}
//           </div>
//         </>
//       )}
//     </nav>
//   )
// }
