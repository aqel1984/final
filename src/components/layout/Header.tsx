// src/components/layout/Header.tsx

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/Button'

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Shea Butter S. Ceathra Logo" width={50} height={50} />
          <span className="ml-2 text-xl font-bold text-gray-800">Shea Butter S. Ceathra</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
            <li><Link href="/about" className="text-gray-600 hover:text-gray-800">About</Link></li>
            <li><Link href="/products" className="text-gray-600 hover:text-gray-800">Products</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link></li>
          </ul>
        </nav>
        <Button>Shop Now</Button>
      </div>
    </header>
  )
}
