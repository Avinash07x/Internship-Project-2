import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import DCKNav from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.relative')) {
        setActiveDropdown(null);
        setActiveSubMenu(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const menuItems = [
    { name: 'HOME', hasDropdown: false , link: '/'},
    { name: 'HOSTING', hasDropdown: true },
    { name: 'SERVERS', hasDropdown: true },
    { name: 'FOREX SERVER', hasDropdown: false },
    { name: 'EMAIL MARKETING', hasDropdown: false },
    { name: 'ABOUT US', hasDropdown: false },
  ];

  const dropdownContent = {
    HOSTING: [
      { name: 'SHARED HOSTING', link: '#' },
      { name: 'RESELLER HOSTING', link: '#' },
      { name: 'CMS HOSTING', link: '#' },
    ],
    SERVERS: [
      {
        name: 'VPS',
        hasSubMenu: true,
        subItems: [
          { name: 'INDIA', link: '#' },
          { name: 'FOREIGN', link: '#' },
        ],
      },
      {
        name: 'CLOUD SERVER',
        hasSubMenu: true,
        subItems: [
          { name: 'INDIA', link: '#' },
          { name: 'FOREIGN', link: '#' },
        ],
      },
      {
        name: 'DEDICATED SERVER',
        hasSubMenu: true,
        subItems: [
          { name: 'INDIA', link: '#' },
          { name: 'FOREIGN', link: '#' },
        ],
      },
    ],
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleDropdownToggle = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
    setActiveSubMenu(null);
  };
  const handleSubMenuToggle = (subMenuName) => {
    setActiveSubMenu(activeSubMenu === subMenuName ? null : subMenuName);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center w-[180px] pt-1 relative right-[8px]">
              <Link to={"/"} target="home"><img src={DCKNav} alt="Logo" /></Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-teal-600 font-medium transition"
                  onClick={() =>
                    item.hasDropdown ? handleDropdownToggle(item.name) : null
                  }
                  aria-haspopup={item.hasDropdown}
                  aria-expanded={activeDropdown === item.name}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                    />
                  )}
                </button>

                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    {dropdownContent[item.name]?.map((dropdownItem, index) => (
                      <div key={index} className="border-b border-gray-100 last:border-b-0">
                        {dropdownItem.hasSubMenu ? (
                          <div className="px-4 py-2 text-gray-900 font-medium">
                            <button
                              className="flex items-center justify-between w-full"
                              onClick={() => handleSubMenuToggle(dropdownItem.name)}
                            >
                              <span>{dropdownItem.name}</span>
                              <ChevronDown
                                className={`w-4 h-4 transition-transform ${activeSubMenu === dropdownItem.name ? 'rotate-180' : ''
                                  }`}
                              />
                            </button>
                            {activeSubMenu === dropdownItem.name && (
                              <div className="mt-1">
                                {dropdownItem.subItems?.map((subItem, subIndex) => (
                                  <a
                                    key={subIndex}
                                    href={subItem.link}
                                    className="block px-2 py-1 text-sm text-gray-600 hover:text-teal-600 hover:bg-gray-50 transition"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {subItem.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <a
                            href={dropdownItem.link}
                            className="block px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 transition"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem.name}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Contact + LOGIN */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-teal-600 space-x-2">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">1-855-672-2788</span>
            </div>
            <Link to="/login">
              <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition">
                LOGIN
              </button>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-teal-600 transition"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <button
                    className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md font-medium"
                    onClick={() => handleDropdownToggle(item.name)}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </button>

                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="ml-4 mt-2 space-y-1">
                      {dropdownContent[item.name]?.map((dropdownItem, index) => (
                        <div key={index}>
                          {dropdownItem.hasSubMenu ? (
                            <div>
                              <button
                                className="flex items-center justify-between w-full px-2 py-1 text-sm font-medium text-gray-800"
                                onClick={() => handleSubMenuToggle(dropdownItem.name)}
                              >
                                <span>{dropdownItem.name}</span>
                                <ChevronDown
                                  className={`w-4 h-4 transition-transform ${activeSubMenu === dropdownItem.name ? 'rotate-180' : ''
                                    }`}
                                />
                              </button>
                              {activeSubMenu === dropdownItem.name && (
                                <div className="mt-1">
                                  {dropdownItem.subItems?.map((subItem, subIndex) => (
                                    <a
                                      key={subIndex}
                                      href={subItem.link}
                                      className="block px-6 py-1 text-sm text-gray-600 hover:text-teal-600 transition"
                                    >
                                      {subItem.name}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <a
                              href={dropdownItem.link}
                              className="block px-3 py-2 text-sm text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition"
                            >
                              {dropdownItem.name}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="px-4 py-4 border-t border-gray-100 space-y-3">
              <div className="flex items-center text-teal-600 space-x-2">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">1-855-672-2788</span>
              </div>
              <Link to="/login">
                <button className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition">
                  LOGIN
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;