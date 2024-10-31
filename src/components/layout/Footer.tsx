import Link from 'next/link'
import Image from 'next/image'
import { AppleBusinessChat } from '../ui/apple-business-chat'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Aqel Jehad LTD Logo" width={40} height={40} />
            <h3 className="text-lg font-semibold ml-2">Aqel Jehad LTD</h3>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
              <li><Link href="/products" className="hover:text-gray-300">Products</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>Raw Shea Butter - $10,000/ton</li>
              <li>Raw Cocoa Butter - $20,000/ton</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Company Type: Private Limited Company (LTD)</p>
            <p>85 Great Portland Street</p>
            <p>London, W1W 7LT</p>
            <p>United Kingdom</p>
            <div className="mt-2">
              <p>Phone:</p>
              <p>+44 744 771 1190</p>
              <p>+1 256 863 4883</p>
            </div>
            <p className="mt-2">Email: manger@aqeljehad-ltd.net</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Aqel Jehad LTD. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <AppleBusinessChat />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}