import { useState } from "react";
import Layout from "../components/Layout";
import SubHead from "../components/SubHead";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Phone, MapPin, Mail, Clock, ArrowRight, Eye, Heart } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const newsArticles = [
    {
      id: 1,
      title: "This Article's Title goes Here, but not too long.",
      date: "Monday 05, September 2021",
      author: "By Author",
      views: 68,
      likes: 86,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "This Article's Title goes Here, but not too long.",
      date: "Monday 05, September 2021",
      author: "By Author",
      views: 68,
      likes: 86,
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "This Article's Title goes Here, but not too long.",
      date: "Monday 05, September 2021",
      author: "By Author",
      views: 68,
      likes: 86,
      image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "This Article's Title goes Here, but not too long.",
      date: "Monday 05, September 2021",
      author: "By Author",
      views: 68,
      likes: 86,
      image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400&h=300&fit=crop",
    },
  ];

  return (
    <Layout>
      <Header />
      <SubHead title="Our Contacts" breadcrumb="Home / Contact" />

      {/* Map Section */}
      <section className="w-full px-4 md:px-8 lg:px-[187px] py-8 md:py-12">
        <div className="w-full h-64 md:h-96 lg:h-[450px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="w-full px-4 md:px-8 lg:px-[187px] py-8 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left - Form */}
          <div className="w-full lg:w-1/2">
            <div className="mb-6 md:mb-8">
              <p className="text-primary text-base md:text-lg font-bold uppercase tracking-widest mb-2">Get in touch</p>
              <h2 className="font-yeseva text-2xl md:text-3xl text-primary">Contact</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-0">
              <div className="flex flex-col md:flex-row gap-0">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="flex-1 bg-health-secondary text-white placeholder:text-white px-5 py-3 md:py-4 md:rounded-tl-md focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="flex-1 bg-health-secondary text-white placeholder:text-white px-5 py-3 md:py-4 md:rounded-tr-md focus:outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-health-secondary text-white placeholder:text-white px-5 py-3 md:py-4 focus:outline-none"
              />
              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full bg-health-secondary text-white placeholder:text-white px-5 py-3 md:py-4 focus:outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full bg-health-primary text-secondary px-5 py-3 md:py-4 rounded-b-md font-medium uppercase hover:bg-health-secondary/90 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right - Contact Cards */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Emergency */}
            <div className="bg-health-secondary rounded-md p-6 md:p-8">
              <Phone className="w-10 h-10 text-secondary mb-4" strokeWidth={2} />
              <h3 className="text-secondary text-lg font-bold uppercase mb-3">Emergency</h3>
              <p className="text-secondary text-base">(237) 681-812-255</p>
              <p className="text-secondary text-base">(237) 666-331-894</p>
            </div>

            {/* Location */}
            <div className="bg-health-secondary rounded-md p-6 md:p-8">
              <MapPin className="w-8 h-9 text-accent mb-4" strokeWidth={2} />
              <h3 className="text-accent text-lg font-bold uppercase mb-3">Location</h3>
              <p className="text-accent text-base">0123 Some place</p>
              <p className="text-accent text-base">9876 Some country</p>
            </div>

            {/* Email */}
            <div className="bg-health-secondary rounded-md p-6 md:p-8">
              <Mail className="w-9 h-8 text-secondary mb-4" strokeWidth={2} />
              <h3 className="text-secondary text-lg font-bold uppercase mb-3">Email</h3>
              <p className="text-secondary text-base">fildineeesoe@gmil.com</p>
              <p className="text-secondary text-sm">myebstudios@gmail.com</p>
            </div>

            {/* Working Hours */}
            <div className="bg-health-secondary rounded-md p-6 md:p-8">
              <Clock className="w-8 h-8 text-secondary mb-4" strokeWidth={2} />
              <h3 className="text-secondary text-lg font-bold uppercase mb-3">Working Hours</h3>
              <p className="text-secondary text-base">Mon-Sat 09:00-20:00</p>
              <p className="text-secondary text-base">Sunday Emergency only</p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="w-full bg-health-white py-12 md:py-16">
        <div className="px-4 md:px-8 lg:px-[187px]">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-secondary text-base md:text-lg font-bold uppercase tracking-widest mb-2">
              Better information, Better health
            </p>
            <h2 className="font-yeseva text-2xl md:text-3xl text-primary">News</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
            {newsArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-md shadow-sm hover:shadow-md transition-shadow overflow-hidden flex"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-40 h-40 object-cover rounded-l-md"
                />
                <div className="flex-1 p-5">
                  <p className="text-secondary text-sm mb-2">{article.date} | {article.author}</p>
                  <h3 className="text-black text-base md:text-lg leading-snug mb-4">{article.title}</h3>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4 text-blue-500" />
                      {article.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
                      {article.likes}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-accent"></div>
            <div className="w-5 h-5 rounded-full bg-primary"></div>
            <div className="w-5 h-5 rounded-full bg-accent"></div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}
