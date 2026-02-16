import Link from 'next/link'
import { Container } from '@/components/ui/Container'

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Mascoprint</h3>
            <p className="text-sm text-gray-600 mb-2">
              Stags End Cottage Barn
              <br />
              Gaddesden Row
              <br />
              Hemel Hempstead
              <br />
              Hertfordshire
            </p>
            <p className="text-sm text-gray-600">
              <strong>Phone:</strong>{' '}
              <a href="tel:+441582791190" className="hover:text-primary-600">
                +44 (0)1582 791190
              </a>
            </p>
            <p className="text-sm text-gray-600">
              <strong>Email:</strong>{' '}
              <a
                href="mailto:office@mascoprint.co.uk"
                className="hover:text-primary-600"
              >
                office@mascoprint.co.uk
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-gray-600 hover:text-primary-600">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-primary-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-600 hover:text-primary-600">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-600 hover:text-primary-600">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Partners & Social */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Our Partners</h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {/* Partner logos will be added later */}
              <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center">
                <span className="text-xs text-gray-400">Marabu</span>
              </div>
              <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center">
                <span className="text-xs text-gray-400">Fujifilm</span>
              </div>
              <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center">
                <span className="text-xs text-gray-400">Trelleborg</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/mascoprint"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-600"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@mascoprint"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-600"
              >
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; 2024 Mascoprint. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <p>Company No: 1040660</p>
            <p>VAT: GB 196 9926 85</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-primary-600">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-primary-600">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
