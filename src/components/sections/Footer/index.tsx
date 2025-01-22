'use client'

import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="w-[90%] h-[1px] bg-gray-200 mx-auto" />
      <div className="mx-auto max-w-7xl px-6 pt-16 sm:pt-24 lg:px-8">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image
              src="https://static-resources-super.s3.us-east-1.amazonaws.com/logo.png"
              alt="Landmark Associates, Inc."
              width={180}
              height={37}
              className="h-7 w-auto"
            />
            <p className="text-sm leading-6 text-gray-600">
              <span className="text-[#312e81]">Assisting researchers</span> worldwide in completing their research faster and deeper so they can make an impact that will <span className="text-[#312e81]">change the world</span>.
            </p>
          </div>
          <div className="mt-16 flex flex-col lg:grid lg:grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            <div className="mb-8 lg:mb-0">
              <h3 className="text-sm font-semibold leading-6 text-indigo-600">Using Landmark</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <Link href="https://docs.thelai.com/join-our-team" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                    I'm a Transcriber/Translator
                  </Link>
                </li>
                <li>
                  <Link href="https://thelai.com/our-customers" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                    Our Customers
                  </Link>
                </li>
                <li>
                  <Link href="https://thelai.com/translation" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                    Available Languages
                  </Link>
                </li>
                <li>
                  <a href="https://docs.thelai.com" target="_blank" rel="noopener noreferrer" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <h3 className="text-sm font-semibold leading-6 text-indigo-600">Landmark</h3>
              <ul role="list" className="mt-6 space-y-4">
                {/*<li>
                  <Link href="https://thelai.com/about" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                    About Us
                  </Link>
                </li> */}
                <li>
                  <a href="https://form.typeform.com/to/P8Xmlu7C?typeform-source=thelai.com" target="_blank" rel="noopener noreferrer" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                    Get a customized quote
                  </a>
                </li>
                <li>
                  <a href="https://docs.thelai.com/faq/transcription" target="_blank" rel="noopener noreferrer" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                    How to request a transcript
                  </a>
                </li>
                <li>
                  <a href="https://docs.thelai.com/pricing/request-invoice" target="_blank" rel="noopener noreferrer" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                    Request an invoice
                  </a>
                </li>
                <li>
                  <a href="https://form.typeform.com/to/ShI5jj?utm_content=PIE&typeform-source=thelai.com" target="_blank" rel="noopener noreferrer" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                    Get in touch
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-sm font-semibold leading-6 text-indigo-600">Legal</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <Link href="https://thelai.com/privacy-policy" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="https://thelai.com/terms-and-conditions" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link href="https://thelai.com/security-confidentiality" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                    Security & Confidentiality
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500 pb-8">&copy; {new Date().getFullYear()} Landmark Associates, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
