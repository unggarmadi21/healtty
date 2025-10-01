import { Search, ChevronRight, Phone, Clock, MapPin, Mail, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <div className="min-h-screen bg-health-white font-body">
      {/* Top Header with Contact Info */}
     <Header />

      {/* Hero Section */}
      <section className="relative bg-health-white">
        <div className="absolute inset-0 bg-gradient-to-r from-health-white/50 to-health-white/50">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/7ea641c760ff1d1f2508d4cdf85ceb014cc642b7?width=2732" 
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
            <span className="text-lg">Home / Services</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading text-health-primary mb-8">
            Our Services
          </h1>
        </div>

        {/* Bottom color bars */}
        <div className="absolute bottom-0 left-0 right-0 h-2 flex">
          <div className="bg-health-accent flex-1"></div>
          <div className="bg-health-primary flex-[2.7]"></div>
          <div className="bg-health-secondary flex-1"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20 bg-health-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-[187px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <ServiceCard key={index} isHovered={index === 0} />
            ))}
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

// Service Card Component
function ServiceCard({ isHovered = false }: { isHovered?: boolean }) {
  return (
    <div className={`bg-white rounded-lg border border-health-primary/10 overflow-hidden group hover:shadow-lg transition-all duration-300 ${isHovered ? 'shadow-lg' : ''}`}>
      {/* Image Container */}
      <div className="relative h-[300px] overflow-hidden">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/97158bf3c04d8429341130444696d60b573ab9c6?width=634" 
          alt="Medical service" 
          className="w-full h-full object-cover"
        />
        
        {/* Overlay for hovered state */}
        {isHovered && (
          <div className="absolute inset-0 bg-health-secondary/80 flex items-center justify-center">
            <div className="w-12 h-12 bg-health-accent rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-health-accent"></div>
            </div>
          </div>
        )}
        
        {/* Icon for non-hovered state */}
        {!isHovered && (
          <div className="absolute bottom-5 right-5 w-20 h-20 bg-health-secondary rounded-full flex items-center justify-center">
            <div className="w-7 h-7 bg-health-accent"></div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-2xl font-medium text-health-primary mb-3">
          Free Checkup
        </h3>
        <p className="text-health-black leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.
        </p>
        <button className="flex items-center gap-2 text-health-primary hover:text-health-secondary transition-colors group">
          <span>Learn More</span>
          <ArrowRight className="w-3 h-3 text-health-secondary group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
