'use client';
import React from 'react';
import Link from 'next/link';

const NinthSection = () => {
  return (
    <><footer className="bg-white text-black py-12 px-4">
          <div className="max-w-7xl mx-auto">
              {/* Top Section - Four Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                  {/* Company Column */}
                  <div>
                      <h3 className="text-lg font-semibold mb-4">Company</h3>
                      <ul className="space-y-2">
                          <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
                          <li><Link href="/portfolio" className="hover:text-blue-400">Portfolio</Link></li>
                          <li><Link href="/blog" className="hover:text-blue-400">Blog</Link></li>
                          <li><Link href="/careers" className="hover:text-blue-400">Careers</Link></li>
                          <li><Link href="/contact" className="hover:text-blue-400">Contact Us</Link></li>
                      </ul>
                  </div>

                  {/* Solutions Column */}
                  <div>
                      <h3 className="text-lg font-semibold mb-4">Solutions</h3>
                      <ul className="space-y-2">
                          <li><Link href="/solutions/apps-discovery" className="hover:text-blue-400">Apps Discovery Services</Link></li>
                          <li><Link href="/solutions/team-augmentation" className="hover:text-blue-400">Team Augmentation</Link></li>
                          <li><Link href="/solutions/enterprise-apps" className="hover:text-blue-400">Enterprise App Development</Link></li>
                          <li><Link href="/solutions/arvr-apps" className="hover:text-blue-400">AR/VR Application Development</Link></li>
                          <li><Link href="/solutions/iot-apps" className="hover:text-blue-400">IoT Application Development</Link></li>
                          <li><Link href="/solutions/wearables-apps" className="hover:text-blue-400">Wearables Apps Development</Link></li>
                          <li><Link href="/solutions/field-sales" className="hover:text-blue-400">Field Sales Apps Development</Link></li>
                          <li><Link href="/solutions/on-demand-apps" className="hover:text-blue-400">On-Demand Apps Development</Link></li>
                      </ul>
                  </div>

                  {/* Technologies Column */}
                  <div>
                      <h3 className="text-lg font-semibold mb-4">Technologies</h3>
                      <ul className="space-y-2">
                          <li><Link href="/technologies/ios" className="hover:text-blue-400">iOS</Link></li>
                          <li><Link href="/technologies/android" className="hover:text-blue-400">Android</Link></li>
                          <li><Link href="/technologies/react-native" className="hover:text-blue-400">React Native</Link></li>
                          <li><Link href="/technologies/flutter" className="hover:text-blue-400">Flutter</Link></li>
                          <li><Link href="/technologies/ionic" className="hover:text-blue-400">Ionic</Link></li>
                          <li><Link href="/technologies/xamarin" className="hover:text-blue-400">Xamarin</Link></li>
                          <li><Link href="/technologies/nativescript" className="hover:text-blue-400">NativeScript</Link></li>
                          <li><Link href="/technologies/html5" className="hover:text-blue-400">HTML5</Link></li>
                          <li><Link href="/technologies/sencha" className="hover:text-blue-400">Sencha</Link></li>
                      </ul>
                  </div>

                  {/* Industries Column */}
                  <div>
                      <h3 className="text-lg font-semibold mb-4">Industries</h3>
                      <ul className="space-y-2">
                          <li><Link href="/industries/retail" className="hover:text-blue-400">Retail</Link></li>
                          <li><Link href="/industries/agriculture" className="hover:text-blue-400">Agriculture</Link></li>
                          <li><Link href="/industries/healthcare" className="hover:text-blue-400">Healthcare</Link></li>
                          <li><Link href="/industries/pharmaceutical" className="hover:text-blue-400">Pharmaceutical</Link></li>
                          <li><Link href="/industries/manufacturing" className="hover:text-blue-400">Manufacturing</Link></li>
                          <li><Link href="/industries/automotive" className="hover:text-blue-400">Automotive</Link></li>
                          <li><Link href="/industries/logistics" className="hover:text-blue-400">Logistics</Link></li>
                          <li><Link href="/industries/education" className="hover:text-blue-400">Education</Link></li>
                      </ul>
                  </div>
              </div>

              {/* Office Locations */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  <div>
                      <h4 className="text-md font-semibold mb-2">US Office</h4>
                      <p>Belmont, California - 1301 Shoreway Road, Suite 160, Belmont, CA 94002</p>
                      <p>Pleasanton, California - 6701 Koll Center Parkway, #250 Pleasanton, CA 94566</p>
                      <p>Tel: +1 408 365 4638</p>
                      <p>Support: +1 (408) 512 1812</p>
                  </div>
                  <div>
                      <h4 className="text-md font-semibold mb-2">Bulgaria Office</h4>
                      <p>49 Bacho Kiro Street, Sofia, 1000, Bulgaria</p>
                  </div>
                  <div>
                      <h4 className="text-md font-semibold mb-2">Canada Office</h4>
                      <p>895 Don Mills Road, Two Morneau Shepell Centre, Suite 900, Toronto, Ontario, M3C 1W3, Canada</p>
                  </div>
                  <div>
                      <h4 className="text-md font-semibold mb-2">UK Office</h4>
                      <p>Export House, Cawsey Way, Woking Surrey, GU21 6QX</p>
                      <p>Tel: +44 (0) 1483 66111</p>
                  </div>
                  <div>
                      <h4 className="text-md font-semibold mb-2">Pakistan Office</h4>
                      <p>Nova Bloom Tower, Plot 26, Block B, SMCH Society, Main Shahrah-e-Faisal, Karachi</p>
                      <p>First Floor, Blue Mall 8-R, M.M Alam Road Gulberg III, Lahore</p>
                      <p>Tel: +92-21-3432 3721-4</p>
                  </div>
                  <div>
                      <h4 className="text-md font-semibold mb-2">UAE Office</h4>
                      <p>Dubai, UAE - Dubai Internet City, 1st Floor, Building Number 12, Premises ED 29, Dubai, UAE</p>
                      <p>Tel: +971-55-6540154</p>
                      <p>Tel: +971-04-2505173</p>
                  </div>
                  <div>
                      <h4 className="text-md font-semibold mb-2">Mexico Office</h4>
                      <p>Amado Nervo #2200, Edificio Esfera 1</p>
                      <p>piso 4, Col. Jardines del Sol, CP. 45050, Zapopan, Jalisco, Mexico</p>
                  </div>
              </div>
          </div>
      </footer>
      <div className="bg-gray-200 text-gray-800 py-4 px-4">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                  {/* Left Section - Copyright and Policies */}
                  <div className="text-sm space-y-1 mb-4 md:mb-0">
                      <p>© 2025, Nova Bloom Software Inc., All rights reserved.</p>
                      <div>
                          <Link href="/privacy" className="hover:text-blue-600 mr-2">Privacy policy and terms of use</Link>
                          <Link href="/cookie" className="hover:text-blue-600">Cookie Policy</Link>
                      </div>
                  </div>

                  {/* Right Section - Social Media */}
                  <div className="text-sm flex items-center space-x-4">
                      <span>Follow us on</span>
                      <a href="https://www.facebook.com/Nova Bloom" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                          <svg className="w-5 h-5 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                          </svg>
                      </a>
                      <a href="https://www.linkedin.com/company/Nova Bloom" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                          <svg className="w-5 h-5 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM7.5 20.5h-2.5V9h2.5v11.5zM6 8C4.895 8 4 7.105 4 6s.895-2 2-2 2 .895 2 2-1.062 2-2 2zm12.5 12.5h-2.5v-6c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v6h-2.5V9h2.5v1.167c.412-.728 1.167-1.167 2-1.167 1.378 0 2.5 1.122 2.5 2.5V20.5z" />
                          </svg>
                      </a>
                      <a href="https://www.instagram.com/Nova Bloom" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                          <svg className="w-5 h-5 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.233.317 2.742.673.575.404.883 1.01 1.286 1.413.403.403.999.711 1.413 1.286.356.509.611 1.376.673 2.742.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.317 2.233-.673 2.742-.404.575-1.01.883-1.413 1.286-.403.403-.711.999-1.286 1.413-.509.356-1.376.611-2.742.673-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.233-.317-2.742-.673-.575-.404-.883-1.01-1.286-1.413-.403-.403-.999-.711-1.413-1.286-.356-.509-.611-1.376-.673-2.742-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.317-2.233.673-2.742.404-.575 1.01-.883 1.413-1.286.403-.403.711-.999 1.286-1.413.509-.356 1.376-.611 2.742-.673 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.67.014-4.95.072-1.315.065-2.211.309-2.995.655-.896.407-1.645.941-2.39 1.686-.745.745-1.279 1.494-1.686 2.39-.346.784-.59 1.68-.655 2.995-.058 1.28-.072 1.691-.072 4.95s.014 3.67.072 4.95c.065 1.315.309 2.211.655 2.995.407.896.941 1.645 1.686 2.39.745.745 1.494 1.279 2.39 1.686.784.346 1.68.59 2.995.655 1.28.058 1.691.072 4.95.072s3.67-.014 4.95-.072c1.315-.065 2.211-.309 2.995-.655.896-.407 1.645-.941 2.39-1.686.745-.745 1.279-1.494 1.686-2.39.346-.784.59-1.68.655-2.995.058-1.28.072-1.691.072-4.95s-.014-3.67-.072-4.95c-.065-1.315-.309-2.211-.655-2.995-.407-.896-.941-1.645-1.686-2.39-.745-.745-1.494-1.279-2.39-1.686-.784-.346-1.68-.59-2.995-.655-1.28-.058-1.691-.072-4.95-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441-.645-1.441-1.441s.645-1.441 1.441-1.441 1.441.645 1.441 1.441-.645 1.441-1.441 1.441z" />
                          </svg>
                      </a>
                  </div>
              </div>
          </div></>

  );
};

export default NinthSection;