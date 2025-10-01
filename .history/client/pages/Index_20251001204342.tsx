import Header from "../components/Header";

export default function Index() {
  return (
    <div className="min-h-screen bg-healt-white font-body">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-medical-accent/30 to-transparent">
        <div className="absolute inset-0">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/51daed43868b281ed04bbac30f90811aceaa1821?width=2732" 
            alt="Medical professionals" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-medical-white/80 via-medical-white/40 to-transparent"></div>
        </div>
        
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-medical-accent/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-medical-secondary/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-32">
          <div className="max-w-2xl">
            <div className="text-medical-secondary text-lg font-bold tracking-wider uppercase mb-4">
              Caring for Life
            </div>
            <h1 className="font-yeseva text-4xl lg:text-5xl xl:text-6xl text-medical-primary mb-8 leading-tight">
              Leading the Way<br />
              in Medical Excellence
            </h1>
            <button className="bg-medical-accent text-medical-primary px-8 py-4 rounded-full font-medium hover:bg-medical-secondary hover:text-white transition-all duration-300">
              Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <div className="text-medical-secondary text-lg font-bold tracking-wider uppercase mb-4">
            Welcome to Medical
          </div>
          <h2 className="font-yeseva text-3xl lg:text-4xl text-medical-primary mb-6">
            A Great Place to Receive Care
          </h2>
          <p className="text-medical-black max-w-3xl mx-auto mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. 
            Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
          </p>
          <button className="text-medical-primary font-medium inline-flex items-center gap-2 hover:text-medical-secondary transition-colors">
            Learn More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/f80e38bd10f05ae75aacb000c378b42c9edcacd4?width=1984" 
              alt="Medical team" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-medical-accent via-medical-primary to-medical-secondary"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-medical-secondary/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-medical-secondary text-lg font-bold tracking-wider uppercase mb-4">
              Care you can believe in
            </div>
            <h2 className="font-yeseva text-3xl lg:text-4xl text-medical-primary">
              Our Services
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left column - Services */}
            <div className="bg-white border border-medical-primary/20 rounded-lg p-6 h-full">
              <div className="space-y-8">
                <div className="text-center p-6 border-b border-medical-primary/10">
                  <div className="w-12 h-12 bg-medical-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-medical-black font-medium">Free Checkup</h3>
                </div>

                <div className="text-center p-6 bg-medical-secondary text-white rounded-lg">
                  <div className="w-12 h-12 bg-medical-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-medical-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                    </svg>
                  </div>
                  <h3 className="text-medical-accent font-medium">Cardiogram</h3>
                </div>

                <div className="text-center p-6 border-b border-medical-primary/10">
                  <div className="w-12 h-12 bg-medical-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-medical-black font-medium">Dna Testing</h3>
                </div>

                <div className="text-center p-6">
                  <div className="w-12 h-12 bg-medical-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-medical-black font-medium">Blood Bank</h3>
                </div>
              </div>

              <div className="mt-8 bg-medical-secondary text-center py-3 rounded-b-lg">
                <span className="text-medical-accent font-medium">View All</span>
              </div>
            </div>

            {/* Middle column - Content */}
            <div className="space-y-6">
              <h3 className="text-medical-black text-2xl font-medium">
                A passion for putting patients first.
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-medical-secondary rounded-full flex-shrink-0"></div>
                  <span className="text-medical-black">A Passion for Healing</span>
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
                  <span className="text-medical-black">A Legacy of Excellence</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-medical-secondary rounded-full flex-shrink-0"></div>
                  <span className="text-medical-black">Always Caring</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-medical-black leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. 
                  Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. 
                  Consequat faucibus porttitor enim et.
                </p>
                <p className="text-medical-black leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. 
                  Convallis felis vitae tortor augue. Velit nascetur proin massa in.
                </p>
              </div>
            </div>

            {/* Right column - Images */}
            <div className="space-y-6">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8f8a2c0d437f246aeb67c5fdb04eed0a1cc1c146?width=648" 
                  alt="Medical service" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-medical-accent via-medical-primary to-medical-secondary"></div>
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ff9bf4ef8f0d6a313853340e1db5b61a75278ddf?width=648" 
                  alt="Medical service" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-medical-accent via-medical-primary to-medical-secondary"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Specialties Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-medical-secondary text-lg font-bold tracking-wider uppercase mb-4">
              Always Caring
            </div>
            <h2 className="font-yeseva text-3xl lg:text-4xl text-medical-primary">
              Our Specialties
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Neurology", highlighted: false },
              { name: "Bones", highlighted: true },
              { name: "Oncology", highlighted: false },
              { name: "Otorhinolaryngology", highlighted: false },
              { name: "Ophthalmology", highlighted: false },
              { name: "Cardiovascular", highlighted: false },
              { name: "Pulmonology", highlighted: false },
              { name: "Renal Medicine", highlighted: false },
              { name: "Gastroenterology", highlighted: false },
              { name: "Urology", highlighted: false },
              { name: "Dermatology", highlighted: false },
              { name: "Gynaecology", highlighted: false },
            ].map((specialty, index) => (
              <div 
                key={index}
                className={`relative h-44 rounded-lg border flex flex-col items-center justify-center p-4 transition-all duration-300 hover:shadow-lg ${
                  specialty.highlighted 
                    ? 'bg-medical-secondary text-white border-medical-secondary' 
                    : 'bg-white border-medical-primary/20 hover:border-medical-secondary'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                  specialty.highlighted ? 'bg-medical-accent' : 'bg-medical-secondary'
                }`}>
                  <svg className={`w-6 h-6 ${specialty.highlighted ? 'text-medical-secondary' : 'text-white'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className={`text-center font-medium ${
                  specialty.highlighted ? 'text-medical-accent' : 'text-medical-black'
                }`}>
                  {specialty.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-16 lg:py-24 relative">
        <div className="absolute inset-0">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/f7c38637b8d3c33da21a0140e0c36b709e2feab4?width=2732" 
            alt="Medical background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-medical-white/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-yeseva text-3xl lg:text-4xl text-medical-secondary mb-6">
                Book an Appointment
              </h2>
              <p className="text-medical-black leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. 
                Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
              </p>
            </div>
            
            {/* Appointment Form */}
            <div className="bg-medical-accent rounded-lg p-8">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-medical-secondary text-white p-4 rounded-tl-lg">
                  <label className="text-white font-medium">Name</label>
                </div>
                <div className="bg-medical-secondary text-white p-4 rounded-tr-lg relative">
                  <label className="text-white font-medium">Gender</label>
                  <svg className="w-4 h-4 text-medical-accent absolute right-4 top-1/2 transform -translate-y-1/2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="bg-medical-secondary text-white p-4">
                  <label className="text-white font-medium">Email</label>
                </div>
                <div className="bg-medical-secondary text-white p-4">
                  <label className="text-white font-medium">Phone</label>
                </div>
                <div className="bg-medical-secondary text-white p-4 relative">
                  <label className="text-white font-medium">Date</label>
                  <svg className="w-4 h-4 text-medical-accent absolute right-4 top-1/2 transform -translate-y-1/2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="bg-medical-secondary text-white p-4 relative">
                  <label className="text-white font-medium">Time</label>
                  <svg className="w-4 h-4 text-medical-accent absolute right-4 top-1/2 transform -translate-y-1/2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="bg-medical-secondary text-white p-4 relative">
                  <label className="text-white font-medium">Doctor</label>
                  <svg className="w-4 h-4 text-medical-accent absolute right-4 top-1/2 transform -translate-y-1/2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="bg-medical-secondary text-white p-4 relative">
                  <label className="text-white font-medium">Department</label>
                  <svg className="w-4 h-4 text-medical-accent absolute right-4 top-1/2 transform -translate-y-1/2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="bg-medical-secondary text-white p-4 mb-4 h-32">
                <label className="text-white font-medium">Message</label>
              </div>
              <button className="w-full bg-medical-accent text-medical-secondary py-3 rounded-b-lg font-medium uppercase hover:bg-white transition-colors">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-medical-secondary text-white p-6 rounded-lg flex items-center gap-4">
              <svg className="w-12 h-12 text-medical-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span className="text-white font-medium">Book an Appointment</span>
            </div>
            <div className="bg-medical-accent text-medical-primary p-6 rounded-lg flex items-center gap-4">
              <svg className="w-12 h-12 text-medical-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span className="text-medical-primary font-medium">Book an Appointment</span>
            </div>
            <div className="bg-medical-secondary text-white p-6 rounded-lg flex items-center gap-4">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span className="text-white font-medium">Book an Appointment</span>
            </div>
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
                image: "https://api.builder.io/api/v1/image/assets/TEMP/5aaa39c16be66dc62c3ecef1383bec2005b1eabd?width=634",
                name: "Doctor's Name",
                specialty: "Neurology"
              },
              { 
                image: "https://api.builder.io/api/v1/image/assets/TEMP/566e1976c2cff39918ec9eaee98c0f3fe75ab58f?width=634",
                name: "Doctor's Name",
                specialty: "Neurology"
              },
              { 
                image: "https://api.builder.io/api/v1/image/assets/TEMP/bc7ca31ce78b16ece159123964864a49f1674d4a?width=634",
                name: "Doctor's Name",
                specialty: "Neurology"
              },
            ].map((doctor, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
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
                    <a href="#" className="w-6 h-6 bg-medical-secondary rounded text-white flex items-center justify-center">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-6 h-6 bg-medical-secondary rounded text-white flex items-center justify-center">
                      <span className="sr-only">Facebook</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd"/>
                      </svg>
                    </a>
                    <a href="#" className="w-6 h-6 bg-medical-secondary rounded text-white flex items-center justify-center">
                      <span className="sr-only">Instagram</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.5 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="bg-medical-secondary text-center py-3">
                  <span className="text-medical-accent font-medium">View Profile</span>
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
              <div key={index} className={`bg-white rounded-lg overflow-hidden ${index === 0 ? 'shadow-lg' : ''}`}>
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
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>68</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
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
                <svg className="w-6 h-6 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-medical-primary text-lg font-bold uppercase mb-4">Emergency</h3>
              <div className="space-y-2 text-medical-primary">
                <p>(237) 681-812-255</p>
                <p>(237) 666-331-894</p>
              </div>
            </div>

            <div className="bg-medical-secondary rounded-lg p-8 text-center text-white">
              <div className="w-12 h-12 bg-transparent border-2 border-medical-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-medical-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-medical-accent text-lg font-bold uppercase mb-4">Location</h3>
              <div className="space-y-2 text-medical-accent">
                <p>0123 Some place</p>
                <p>9876 Some country</p>
              </div>
            </div>

            <div className="bg-medical-accent rounded-lg p-8 text-center">
              <div className="w-12 h-12 bg-transparent border-2 border-medical-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-medical-primary text-lg font-bold uppercase mb-4">Email</h3>
              <div className="space-y-2 text-medical-primary">
                <p>healtty@gmail.com</p>
                <p className="text-sm">healttystudios@gmail.com</p>
              </div>
            </div>

            <div className="bg-medical-accent rounded-lg p-8 text-center">
              <div className="w-12 h-12 bg-transparent border-2 border-medical-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
              </div>
              <h3 className="text-medical-primary text-lg font-bold uppercase mb-4">Working Hours</h3>
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
              <h3 className="text-white text-lg font-semibold mb-6">Important Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:text-medical-accent transition-colors">Appointment</a></li>
                <li><a href="#" className="text-white hover:text-medical-accent transition-colors">Doctors</a></li>
                <li><a href="#" className="text-white hover:text-medical-accent transition-colors">Services</a></li>
                <li><a href="#" className="text-white hover:text-medical-accent transition-colors">About Us</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-3">
                <li className="text-white">Call: (+62) 812-8000-7814</li>
                <li className="text-white">Email: unggarmadi@gmail.com</li>
                <li className="text-white">Address: 0123 Some place</li>
                <li className="text-white">Some country</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Newsletter</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-l-lg text-medical-primary bg-medical-accent placeholder-medical-primary/70"
                />
                <button className="bg-medical-accent px-4 py-3 rounded-r-lg">
                  <svg className="w-5 h-5 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
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
              <a href="#" className="w-8 h-8 bg-medical-accent rounded-full flex items-center justify-center hover:bg-white transition-colors">
                <svg className="w-5 h-5 text-medical-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-medical-accent rounded-full flex items-center justify-center hover:bg-white transition-colors">
                <svg className="w-5 h-5 text-medical-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-medical-accent rounded-full flex items-center justify-center hover:bg-white transition-colors">
                <svg className="w-5 h-5 text-medical-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.5 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
