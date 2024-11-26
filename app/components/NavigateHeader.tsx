import React from 'react'
import Link from "next/link";
function NavigateHeader() {
  return (
    <div className="flex justify-center items-center">
        <ul className="flex">
        <li className="px-2">
            <Link href="/" className="text-lg font-medium hover:text-slate-500">Articles</Link>
        </li>
        <li className="px-2">
            <Link  href="/about" className="text-lg font-medium hover:text-slate-500">About</Link>
        </li>
        <li className="px-2">
            <Link href="/contact-me" className="text-lg font-medium hover:text-slate-500">Contact Me</Link>
        </li>
        </ul>
    </div>
  )
}

export default NavigateHeader