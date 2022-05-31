import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span className="text-sm text-orange-500 sm:text-center dark:text-gray-400"> <a href="#" className="hover:underline">X-Code™</a> Made with ♥ by<span> </span>
    <a className = " hover:text-sky-400 hover:bg-orange-500" href= "https://github.com/real-tea">Akash Singh</a>
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">Github</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Linkedin</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Twitter</a>
        </li>
        
    </ul>
</footer>
    </div>
  )
}

export default Footer