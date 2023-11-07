import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../assets/images/DaniM.jpeg';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Sobre Nós', href: '#' },
  { name: 'Contato', href: '#' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-[#FFCCD0]">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <Image
              className="h-26 w-auto"
              src={logo}
              alt="logo"
            />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
        <button
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </nav>
      <Dialog as="div" className="lg:hidden" open={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
        <div className="fixed inset-0 z-50 bg-white">
          <div className="p-6">
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block my-4 text-lg text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </Dialog>
    </header>
  );
}
