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
      <section className="py-16 lg:py-20 bg-health-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-[187px]">
          <div className="text-center mb-16">
            <div className="text-health-secondary text-lg font-bold uppercase tracking-wider mb-2">
              Get in touch
            </div>
            <h2 className="text-3xl lg:text-4xl font-heading text-health-primary">
              Contact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Emergency */}
            <div className="bg-health-accent rounded-lg p-8 text-center">
              <Phone className="w-10 h-9 text-health-primary mx-auto mb-4" strokeWidth={2} />
              <h3 className="text-lg font-bold text-health-primary uppercase mb-4">Emergency</h3>
              <div className="space-y-1">
                <p className="text-health-primary">(237) 681-812-255</p>
                <p className="text-health-primary">(237) 666-331-894</p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-health-secondary rounded-lg p-8 text-center">
              <MapPin className="w-8 h-9 text-health-accent mx-auto mb-4" strokeWidth={2} />
              <h3 className="text-lg font-bold text-health-accent uppercase mb-4">Location</h3>
              <div className="space-y-1">
                <p className="text-health-accent">0123 Some place</p>
                <p className="text-health-accent">9876 Some country</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-health-accent rounded-lg p-8 text-center">
              <Mail className="w-9 h-8 text-health-primary mx-auto mb-4" strokeWidth={2} />
              <h3 className="text-lg font-bold text-health-primary uppercase mb-4">Email</h3>
              <div className="space-y-1">
                <p className="text-health-primary">healtty@gmail.com</p>
                <p className="text-health-primary text-sm">healttystudios@gmail.com</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-health-accent rounded-lg p-8 text-center">
              <Clock className="w-8 h-8 text-health-primary mx-auto mb-4" strokeWidth={2} />
              <h3 className="text-lg font-bold text-health-primary uppercase mb-4">Working Hours</h3>
              <div className="space-y-1">
                <p className="text-health-primary">Mon-Sat 09:00-20:00</p>
                <p className="text-health-primary">Sunday Emergency only</p>
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
