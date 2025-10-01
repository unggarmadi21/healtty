import Header from "../components/Header";

export default function About() {
  return (
    <div className="min-h-screen bg-health-white font-body">
      <Header />

      {/* Hero/SubHead Section */}
      <section className="relative h-64 bg-health-white">
        <div className="absolute inset-0 bg-gradient-to-r from-health-white/50 to-health-white/50">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/56476ad4dce5e1125c6fb0641653f797c39ed3c5?width=2732"
            alt="Medical background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/50"></div>
        </div>

        {/* Decorative circles */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-32 h-32 bg-medical-accent/50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-medical-secondary/30 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-center">
          <div className="text-medical-primary text-lg mb-2">Home / About</div>
          <h1 className="font-yeseva text-4xl lg:text-5xl text-medical-primary">
            About us
          </h1>
        </div>

        {/* Bottom decorative bar */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-medical-accent via-medical-primary to-medical-secondary"></div>
      </section>

      {/* Main About Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Image */}
            <div className="order-2 lg:order-1">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b29b5c616479db28b9ce2bbda8c53e3003f6b5f0?width=816"
                alt="Medical professionals"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Right column - Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-6">
                <div className="text-medical-secondary text-lg font-bold tracking-wider uppercase mb-4">
                  Welcome to Hospital name
                </div>
                <h2 className="font-yeseva text-3xl lg:text-4xl xl:text-5xl text-medical-primary mb-8 leading-tight">
                  Best Care for Your
                  <br />
                  Good Health
                </h2>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-medical-secondary rounded-full flex-shrink-0"></div>
                  <span className="text-medical-black">
                    A Passion for Healing
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-medical-secondary rounded-full flex-shrink-0"></div>
                  <span className="text-medical-black">5-Star Care</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-medical-secondary rounded-full flex-shrink-0"></div>
                  <span className="text-medical-black">All our best</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-medical-secondary rounded-full flex-shrink-0"></div>
                  <span className="text-medical-black">Believe in Us</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-medical-secondary rounded-full flex-shrink-0"></div>
                  <span className="text-medical-black">Always Caring</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-medical-secondary rounded-full flex-shrink-0"></div>
                  <span className="text-medical-black">
                    A Legacy of Excellence
                  </span>
                </div>
              </div>

              {/* Description paragraphs */}
              <div className="space-y-4">
                <p className="text-medical-black leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque tortor ornare ornare. Quisque
                  placerat scelerisque tortor ornare ornare Convallis felis
                  vitae tortor augue. Velit nascetur proin massa in. Consequat
                  faucibus porttitor enim et.
                </p>
                <p className="text-medical-black leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque. Convallis felis vitae tortor
                  augue. Velit nascetur proin massa in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 relative">
        <div className="absolute inset-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/36ddcf5eaaecbef1f9368af5bccb8e8155f16ece?width=2732"
            alt="Medical background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-medical-secondary/60"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 lg:px-8 text-center">
          {/* Quote icon */}
          <div className="mb-8">
            <svg
              className="w-12 h-8 mx-auto text-medical-accent"
              fill="currentColor"
              viewBox="0 0 45 30"
            >
              <path d="M26.25 0V18.75H36.5625L30 30H38.4375L45 18.75V0H26.25ZM0 18.75H10.3125L3.75 30H12.1875L18.75 18.75V0H0V18.75Z" />
            </svg>
          </div>

          {/* Testimonial text */}
          <blockquote className="text-white text-xl lg:text-2xl font-normal leading-relaxed mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare. Quisque placerat
            scelerisque felis vitae tortor augue. Velit nascetur Consequat
            faucibus porttitor enim et.
          </blockquote>

          {/* Divider line */}
          <div className="w-56 h-px bg-medical-accent mx-auto mb-6"></div>

          {/* Author */}
          <div className="text-white text-xl lg:text-2xl font-normal mb-8">
            John Doe
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2">
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <div className="w-4 h-4 bg-medical-accent rounded-full"></div>
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Our Doctors Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-medical-secondary text-lg font-bold tracking-wider uppercase mb-4">
              Trusted Care
            </div>
            <h2 className="font-yeseva text-3xl lg:text-4xl text-medical-primary">
              Our Doctors
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {[
              {
                image:
                  "https://api.builder.io/api/v1/image/assets/TEMP/5aaa39c16be66dc62c3ecef1383bec2005b1eabd?width=634",
                name: "Doctor's Name",
                specialty: "Neurology",
              },
              {
                image:
                  "https://api.builder.io/api/v1/image/assets/TEMP/566e1976c2cff39918ec9eaee98c0f3fe75ab58f?width=634",
                name: "Doctor's Name",
                specialty: "Neurology",
              },
              {
                image:
                  "https://api.builder.io/api/v1/image/assets/TEMP/bc7ca31ce78b16ece159123964864a49f1674d4a?width=634",
                name: "Doctor's Name",
                specialty: "Neurology",
              },
            ].map((doctor, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-medical-accent p-6">
                  <h3 className="text-medical-secondary text-lg font-medium mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-medical-secondary text-lg font-bold tracking-wider uppercase mb-4">
                    {doctor.specialty}
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="w-6 h-6 bg-medical-secondary rounded text-white flex items-center justify-center"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-6 h-6 bg-medical-secondary rounded text-white flex items-center justify-center"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg
                        className="w-4 h-4"
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
                      className="w-6 h-6 bg-medical-secondary rounded text-white flex items-center justify-center"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        className="w-4 h-4"
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
                <div className="bg-medical-secondary text-center py-3">
                  <span className="text-medical-accent font-medium">
                    View Profile
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2">
            <div className="w-4 h-4 bg-medical-accent rounded-full"></div>
            <div className="w-4 h-4 bg-medical-primary rounded-full"></div>
            <div className="w-4 h-4 bg-medical-accent rounded-full"></div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-medical-secondary text-lg font-bold tracking-wider uppercase mb-4">
              Better information, Better health
            </div>
            <h2 className="font-yeseva text-3xl lg:text-4xl text-medical-primary">
              News
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {[1, 2, 3, 4].map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg overflow-hidden ${index === 0 ? "shadow-lg" : ""}`}
              >
                <div className="flex">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/07ea85d67ac9d0ace260c614ddd6e5049582310f?width=320"
                    alt="News article"
                    className="w-40 h-32 object-cover"
                  />
                  <div className="p-6 flex-1">
                    <div className="text-medical-secondary text-sm mb-2">
                      Monday 05, September 2021 | By Author
                    </div>
                    <h3 className="text-medical-black text-lg leading-tight mb-4">
                      This Article's Title goes Here, but not too long.
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-medical-black">
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        <span>68</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4 text-red-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>86</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2">
            <div className="w-4 h-4 bg-medical-accent rounded-full"></div>
            <div className="w-4 h-4 bg-medical-primary rounded-full"></div>
            <div className="w-4 h-4 bg-medical-accent rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-medical-secondary text-lg font-bold tracking-wider uppercase mb-4">
              Get in touch
            </div>
            <h2 className="font-yeseva text-3xl lg:text-4xl text-medical-primary">
              Contact
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-medical-accent rounded-lg p-8 text-center">
              <div className="w-12 h-12 bg-transparent border-2 border-medical-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-6 h-6 text-medical-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-medical-primary text-lg font-bold uppercase mb-4">
                Emergency
              </h3>
              <div className="space-y-2 text-medical-primary">
                <p>(237) 681-812-255</p>
                <p>(237) 666-331-894</p>
              </div>
            </div>

            <div className="bg-medical-secondary rounded-lg p-8 text-center text-white">
              <div className="w-12 h-12 bg-transparent border-2 border-medical-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-6 h-6 text-medical-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-medical-accent text-lg font-bold uppercase mb-4">
                Location
              </h3>
              <div className="space-y-2 text-medical-accent">
                <p>0123 Some place</p>
                <p>9876 Some country</p>
              </div>
            </div>

            <div className="bg-medical-accent rounded-lg p-8 text-center">
              <div className="w-12 h-12 bg-transparent border-2 border-medical-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-6 h-6 text-medical-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-medical-primary text-lg font-bold uppercase mb-4">
                Email
              </h3>
              <div className="space-y-2 text-medical-primary">
                <p>healtty@gmail.com</p>
                <p className="text-sm">healttystudios@gmail.com</p>
              </div>
            </div>

            <div className="bg-medical-accent rounded-lg p-8 text-center">
              <div className="w-12 h-12 bg-transparent border-2 border-medical-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-6 h-6 text-medical-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
              </div>
              <h3 className="text-medical-primary text-lg font-bold uppercase mb-4">
                Working Hours
              </h3>
              <div className="space-y-2 text-medical-primary">
                <p>Mon-Sat 09:00-20:00</p>
                <p>Sunday Emergency only</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <button className="bg-health-white px-4 py-3 rounded-r-lg hover:bg-primary transition-colors" type="submit">
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
    </div>
  );
}
