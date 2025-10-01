   export default function Header() {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
   
     return (
      <footer className="bg-medical-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Logo and Description */}
            <div>
              <div className="font-yeseva text-3xl font-normal mb-4">
                <span className="text-white">Healt</span>
                <span className="text-medical-primary">ty</span>
              </div>
              <p className="text-white leading-relaxed">
                Leading the Way in Medical Excellence, Trusted Care.
              </p>
            </div>

            {/* Important Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">
                Important Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-medical-accent transition-colors"
                  >
                    Appointment
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-medical-accent transition-colors"
                  >
                    Doctors
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-medical-accent transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-medical-accent transition-colors"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li className="text-white">Call: (+62) 812-8000-7814</li>
                <li className="text-white">Email: unggarmadi@gmail.com</li>
                <li className="text-white">Address: 0123 Some place</li>
                <li className="text-white">Some country</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">
                Newsletter
              </h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-l-lg text-medical-primary bg-medical-accent placeholder-medical-primary/70"
                />
                <button className="bg-medical-accent px-4 py-3 rounded-r-lg">
                  <svg
                    className="w-5 h-5 text-medical-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-medical-accent pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-white">
              © 2025 Hospital's name All Rights Reserved by MADI_SITE
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 bg-medical-accent rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <svg
                  className="w-5 h-5 text-medical-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-medical-accent rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <svg
                  className="w-5 h-5 text-medical-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-medical-accent rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <svg
                  className="w-5 h-5 text-medical-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.5 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
}
