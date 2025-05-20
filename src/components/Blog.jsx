const Blog = () => {
    const blogPosts = [
      {
        title: "Top 10 Hidden Gems to Visit in India",
        image: "/src/assets/blog1.jpg",
        excerpt: "Explore offbeat travel spots in India that will amaze you with their beauty and serenity...",
        link: "#",
      },
      {
        title: "The Ultimate Goa Travel Itinerary",
        image: "/src/assets/blog2.jpg",
        excerpt: "Plan your next Goa trip with our perfect 5-day itinerary including beaches, nightlife, and food...",
        link: "#",
      },
      {
        title: "Cultural Etiquette Every Traveler Should Know",
        image: "/src/assets/culturaletiqutte.jpg",
        excerpt: "Traveling across India? Here are key cultural tips to help you connect with locals respectfully...",
        link: "#",
      },
    ];
  
    return (
      <section id="Blog" className="py-20 bg-white px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Travel Stories & Tips</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src={post.image} alt={post.title} className="w-full h-52 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <a href={post.link} className="text-blue-600 font-medium hover:underline">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Blog;