import { Search, Phone, Clock, MapPin, Mail, ArrowRight, Linkedin, Facebook, Instagram, Quote } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Doctors() {
  return (
    <div className="min-h-screen bg-health-white font-body">
      {/* Top Header with Contact Info */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-health-white">
        <div className="absolute inset-0 bg-gradient-to-r from-health-white/50 to-health-white/50">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/56476ad4dce5e1125c6fb0641653f797c39ed3c5?width=2732" 
            alt="Medical professionals" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-health-accent rounded-full opacity-50"></div>
          <div className="absolute -bottom-32 -left-32 w-48 h-48 bg-health-secondary rounded-full opacity-30"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 lg:px-[187px] py-16 lg:py-20">
          <div className="text-health-primary mb-2">
            <span className="text-lg">Home / Doctors</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading text-health-primary mb-8">
            Our Doctors
          </h1>
        </div>

        {/* Bottom color bars */}
        <div className="absolute bottom-0 left-0 right-0 h-2 flex">
          <div className="bg-health-accent flex-1"></div>
          <div className="bg-health-primary flex-[2.7]"></div>
          <div className="bg-health-secondary flex-1"></div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 lg:py-20 bg-health-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-[187px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <DoctorCard key={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-16 lg:py-20">
        <div className="absolute inset-0">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/36ddcf5eaaecbef1f9368af5bccb8e8155f16ece?width=2732" 
            alt="Medical background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-health-secondary/60"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <Quote className="w-12 h-8 text-health-accent mx-auto mb-8" />
          
          <blockquote className="text-xl lg:text-2xl text-health-white leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.
          </blockquote>

          <div className="border-t border-health-accent w-56 mx-auto mb-6"></div>
          
          <cite className="text-xl lg:text-2xl text-health-white font-normal not-italic">
            John Doe
          </cite>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-4 h-4 rounded-full bg-health-white"></div>
            <div className="w-4 h-4 rounded-full bg-health-accent"></div>
            <div className="w-4 h-4 rounded-full bg-health-white"></div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-[187px]">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-health-secondary text-lg font-bold uppercase tracking-wider mb-2">
              Better Information, Better Health
            </div>
            <h2 className="text-3xl lg:text-4xl font-heading text-health-primary">
              News
            </h2>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {[...Array(4)].map((_, index) => (
              <NewsCard key={index} featured={index === 0} />
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2">
            <div className="w-4 h-4 rounded-full bg-health-accent"></div>
            <div className="w-4 h-4 rounded-full bg-health-primary"></div>
            <div className="w-4 h-4 rounded-full bg-health-accent"></div>
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
        <Footer />
    </div>
  );
}

// Doctor Card Component
function DoctorCard() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Doctor Image */}
      <div className="h-[350px] overflow-hidden">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/5aaa39c16be66dc62c3ecef1383bec2005b1eabd?width=634" 
          alt="Doctor" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Doctor Info */}
      <div className="bg-health-accent p-6 text-center">
        <h3 className="text-lg text-health-secondary mb-2">
          Doctor's Name
        </h3>
        <p className="text-lg font-bold text-health-secondary uppercase tracking-wider mb-6">
          NEUROLOGY
        </p>
        
        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mb-0">
          <Linkedin className="w-6 h-6 text-health-secondary hover:text-health-primary transition-colors cursor-pointer" />
          <Facebook className="w-6 h-6 text-health-secondary hover:text-health-primary transition-colors cursor-pointer" />
          <Instagram className="w-6 h-6 text-health-secondary hover:text-health-primary transition-colors cursor-pointer" />
        </div>
      </div>

      {/* View Profile Button */}
      <div className="bg-health-secondary">
        <button className="w-full py-3 text-health-accent font-medium hover:bg-opacity-90 transition-colors">
          View Profile
        </button>
      </div>
    </div>
  );
}

// News Card Component
function NewsCard({ featured = false }: { featured?: boolean }) {
  return (
    <div className={`bg-white rounded-lg overflow-hidden ${featured ? 'shadow-lg' : 'shadow-md'} hover:shadow-xl transition-shadow duration-300`}>
      <div className="flex">
        {/* News Image */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/07ea85d67ac9d0ace260c614ddd6e5049582310f?width=320" 
          alt="News" 
          className="w-40 h-[154px] object-cover rounded-l-lg"
        />
        
        {/* News Content */}
        <div className="flex-1 p-5">
          <div className="text-sm text-health-secondary mb-4">
            Monday 05, September 2021 | By Author
          </div>
          <h3 className="text-lg text-health-black leading-tight mb-4">
            This Article's Title goes Here,<br />
            but not too long.
          </h3>
          
          {/* Stats */}
          <div className="flex items-center gap-6 text-sm text-health-black">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border border-blue-400 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              </div>
              <span>68</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 text-red-400">♥</div>
              <span>86</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
