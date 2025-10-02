import Layout from "../components/Layout";
import SubHead from "../components/SubHead";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowRight, Calendar, User, Eye, Heart, Search, Phone, MapPin, Mail, Clock } from "lucide-react";

export default function News() {
  const articles = [
    {
      id: 1,
      title: "A passion for putting patients first",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....",
      date: "Monday 05, September 2021",
      author: "By Author",
      views: 68,
      likes: 86,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "A passion for putting patients first",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....",
      date: "Monday 05, September 2021",
      author: "By Author",
      views: 68,
      likes: 86,
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "A passion for putting patients first",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....",
      date: "Monday 05, September 2021",
      author: "By Author",
      views: 68,
      likes: 86,
      image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "A passion for putting patients first",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....",
      date: "Monday 05, September 2021",
      author: "By Author",
      views: 68,
      likes: 86,
      image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=800&h=600&fit=crop",
    },
  ];

  const recentPosts = [
    { id: 1, title: "This Article's Title goes Here, but not too long.", date: "Monday 05, September 2021", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&h=120&fit=crop" },
    { id: 2, title: "This Article's Title goes Here, but not too long.", date: "Monday 05, September 2021", image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=120&h=120&fit=crop" },
    { id: 3, title: "This Article's Title goes Here, but not too long.", date: "Monday 05, September 2021", image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=120&h=120&fit=crop" },
    { id: 4, title: "This Article's Title goes Here, but not too long.", date: "Monday 05, September 2021", image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=120&h=120&fit=crop" },
    { id: 5, title: "This Article's Title goes Here, but not too long.", date: "Monday 05, September 2021", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=120&h=120&fit=crop" },
    { id: 6, title: "This Article's Title goes Here, but not too long.", date: "Monday 05, September 2021", image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=120&h=120&fit=crop" },
  ];

  const categories = [
    { name: "Surgery", count: 3 },
    { name: "Health Care", count: 5 },
    { name: "Medical", count: 8 },
    { name: "Professional", count: 10 },
  ];

  return (
    <Layout>
      
      <SubHead title="Blog Posts" breadcrumb="Home / News" />

      <div className="w-full px-4 md:px-8 lg:px-[187px] py-8 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-8 md:space-y-12">
            {articles.map((article) => (
              <article key={article.id} className="space-y-4 md:space-y-6">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-64 md:h-96 object-cover rounded-md"
                />
                
                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base">
                  <span className="flex items-center gap-2 text-primary">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-2 text-secondary">
                    <User className="w-4 h-4" />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-blue-500" />
                    {article.views}
                  </span>
                  <span className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
                    {article.likes}
                  </span>
                </div>

                <h2 className="font-yeseva text-2xl md:text-3xl text-primary">{article.title}</h2>
                <p className="text-black text-base leading-relaxed">{article.excerpt}</p>

                <button className="inline-flex items-center gap-2 bg-accent text-primary px-6 md:px-8 py-3 rounded-full hover:bg-accent/90 transition-colors">
                  Read More
                  <ArrowRight className="w-5 h-5 text-secondary" />
                </button>
              </article>
            ))}

            {/* Pagination */}
            <div className="flex items-center justify-between pt-8">
              <button className="flex items-center gap-2 text-primary/30 text-sm md:text-base" disabled>
                <ArrowRight className="w-5 h-5 rotate-180" />
                Previous Page
              </button>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <span className="text-black">1 -</span>
                <span className="text-secondary">2</span>
                <span className="text-black">-</span>
                <span className="text-secondary">3</span>
                <span className="text-black">-</span>
                <span className="text-secondary">4</span>
                <span className="text-black">-</span>
                <span className="text-secondary">5</span>
              </div>
              <button className="flex items-center gap-2 text-primary text-sm md:text-base hover:text-secondary transition-colors">
                Next Page
                <ArrowRight className="w-5 h-5 text-secondary" />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 xl:w-96 space-y-6 md:space-y-8">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-secondary text-white placeholder:text-white/80 px-5 py-3 md:py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-accent" />
            </div>

            {/* Recent Posts */}
            <div className="border border-primary/20 rounded-md p-5 bg-white/50">
              <h3 className="font-yeseva text-2xl md:text-3xl text-primary mb-6">Recent Posts</h3>
              <div className="space-y-4 md:space-y-5">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex gap-3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 rounded-md object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-secondary text-xs mb-1">{post.date}</p>
                      <p className="text-black text-sm leading-tight line-clamp-2">{post.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="border border-primary/20 rounded-md p-5 bg-white/50">
              <h3 className="font-yeseva text-2xl md:text-3xl text-primary mb-6">Categories</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className="flex items-center justify-between bg-white/50 rounded-md px-5 py-3 hover:bg-accent/20 transition-colors cursor-pointer"
                  >
                    <span className="text-black text-lg">{category.name}</span>
                    <span className="bg-secondary text-white text-sm px-2 py-0.5 rounded-full min-w-[24px] text-center">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Contact Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="px-4 md:px-8 lg:px-[187px]">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-secondary text-base md:text-lg font-bold uppercase tracking-widest mb-2">Get in touch</p>
            <h2 className="font-yeseva text-2xl md:text-3xl text-primary">Contact</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-accent rounded-md p-6 text-center">
              <Phone className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="text-secondary text-lg font-bold uppercase mb-3">Emergency</h3>
              <p className="text-secondary text-sm">(237) 681-812-255</p>
              <p className="text-secondary text-sm">(237) 666-331-894</p>
            </div>

            <div className="bg-secondary rounded-md p-6 text-center">
              <MapPin className="w-8 h-9 text-accent mx-auto mb-4" />
              <h3 className="text-accent text-lg font-bold uppercase mb-3">Location</h3>
              <p className="text-accent text-sm">0123 Some place</p>
              <p className="text-accent text-sm">9876 Some country</p>
            </div>

            <div className="bg-accent rounded-md p-6 text-center">
              <Mail className="w-9 h-7 text-secondary mx-auto mb-4" />
              <h3 className="text-secondary text-lg font-bold uppercase mb-3">Email</h3>
              <p className="text-secondary text-sm">healtty@gmail.com</p>
              <p className="text-secondary text-xs">healttystudios@gmail.com</p>
            </div>

            <div className="bg-accent rounded-md p-6 text-center">
              <Clock className="w-8 h-8 text-secondary mx-auto mb-4" />
              <h3 className="text-secondary text-lg font-bold uppercase mb-3">Working Hours</h3>
              <p className="text-secondary text-sm">Mon-Sat 09:00-20:00</p>
              <p className="text-secondary text-sm">Sunday Emergency only</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
