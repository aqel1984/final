import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Shea Butter S. Ceathra Logo" width={40} height={40} />
            <h3 className="text-lg font-semibold ml-2">Shea Butter S. Ceathra</h3>
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
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>123 Shea Street</p>
            <p>Butter City, SH 12345</p>
            <p>Phone: +1 234 567 890</p>
            <p>Email: info@sheabutter.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Shea Butter S. Ceathra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}