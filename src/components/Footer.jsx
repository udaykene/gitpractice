import React from "react";
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-gray-400 py-12 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              {/* Replace with your actual logo img tag */}
              <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
            </div>
            <h2 className="text-white text-xl font-bold">
              SunTouch Technology
            </h2>
          </div>
          <p className="text-sm leading-relaxed">
            We are a forward-thinking technology company dedicated to delivering
            innovative solutions that help businesses thrive in the digital age.
          </p>
          <div className="flex space-x-3">
            {[Instagram, Linkedin, Twitter, Facebook].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Icon size={18} className="text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-6">Services</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                App Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Platform Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Mobile Solutions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                AI & Automation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Cloud Hosting
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Consulting
              </a>
            </li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-white font-semibold mb-6">Get In Touch</h3>
          <div className="space-y-6 text-sm">
            <div className="flex items-start space-x-3">
              <Phone size={20} className="text-blue-500 mt-1" />
              <div>
                <p className="text-white font-medium">+91 75085 41325</p>
                <p className="text-xs text-gray-500">Mon-Fri 9am-6pm</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail size={20} className="text-blue-500 mt-1" />
              <div>
                <p className="text-white font-medium">
                  suntouchtechnology01@gmail.com
                </p>
                <p className="text-xs text-gray-500">
                  We'll respond within 24hrs
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin size={20} className="text-blue-500 mt-1" />
              <div>
                <p className="text-white font-medium">Chembur, Mumbai</p>
                <p className="text-xs text-gray-500">India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
        <p>© 2025 SunTouch Technology. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
