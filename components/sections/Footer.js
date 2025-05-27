'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Story', href: '/about#story' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' }
  ],
  menu: [
    { name: 'Coffee', href: '/menu#coffee' },
    { name: 'Food', href: '/menu#food' },
    { name: 'Pastries', href: '/menu#pastries' },
    { name: 'Catering', href: '/catering' }
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ]
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/lecafecoffee' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/lecafecoffee' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/lecafecoffee' }
]

const FooterLink = ({ href, children }) => (
  <Link 
    href={href}
    className="text-amber-100/80 hover:text-white transition-colors duration-300 text-sm"
  >
    {children}
  </Link>
)

const FooterSection = ({ title, links }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.name}>
          <FooterLink href={link.href}>{link.name}</FooterLink>
        </li>
      ))}
    </ul>
  </div>
)

const ContactItem = ({ icon: Icon, children }) => (
  <div className="flex items-start space-x-3">
    <Icon className="w-5 h-5 text-amber-200 flex-shrink-0 mt-1" />
    <div className="text-amber-100/80 text-sm">
      {children}
    </div>
  </div>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-amber-900 font-bold text-xl">
                LC
              </div>
              <span className="text-2xl font-bold">Le Cafe Coffee</span>
            </Link>
            <p className="text-amber-100/80 text-sm">
              Experience the perfect cup of coffee in the heart of New York City.
              We serve premium coffee with passion and care.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-100/80 hover:text-white transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2 lg:col-span-1">
            <FooterSection title="Company" links={footerLinks.company} />
            <FooterSection title="Menu" links={footerLinks.menu} />
          </div>

          {/* Support Links */}
          <FooterSection title="Support" links={footerLinks.support} />

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <ContactItem icon={MapPin}>
                123 Coffee Street<br />
                New York, NY 10001
              </ContactItem>
              <ContactItem icon={Phone}>
                <a 
                  href="tel:+16463706275" 
                  className="hover:text-white transition-colors duration-300"
                >
                  (646) 370-6275
                </a>
              </ContactItem>
              <ContactItem icon={Mail}>
                <a 
                  href="mailto:info@lecafecoffee.com" 
                  className="hover:text-white transition-colors duration-300"
                >
                  info@lecafecoffee.com
                </a>
              </ContactItem>
              <ContactItem icon={Clock}>
                Open Daily<br />
                7:00 AM - 8:00 PM
              </ContactItem>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425882426699!3d40.74076987932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1709661234567!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-500"
            title="Le Cafe Coffee Location"
          />
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-amber-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-amber-100/60 text-sm">
              © {currentYear} Le Cafe Coffee. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/accessibility">Accessibility</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 