import React from "react";
import './Blog.css'
import Footer from "../../components/Footer/Footer";

// بيانات وهمية للمقالات
const blogPosts = [
  { id: 1, title: "Top 5 Accessories for Your Smartphone", summary: "Check out the latest smartphone accessories to upgrade your mobile experience.", image: "/src/img/blog1.png" },
  { id: 2, title: "Healthy Living Tips", summary: "Learn simple and effective ways to stay fit and healthy every day.", image: "/src/img/blog2.jpg" },
  { id: 3, title: "Kitchen Hacks You Need", summary: "Make cooking easier and faster with these clever kitchen hacks.", image: "/src/img/blog3.jpg" },
  { id: 4, title: "Latest Tech Trends", summary: "Stay updated with the newest technology trends in 2026.", image: "/src/img/blog4.jpg" },
];

function Blog() {
  return (
    <div className="blogPage">
      {/* Hero Section */}
      <div className="blogHero">
        <h1>Our Blog</h1>
        <p>Tips, news, and updates about our products</p>
      </div>

      {/* Blog Cards */}
      <div className="blogCards container">
        {blogPosts.map((post) => (
          <div className="blogCard" key={post.id}>
            <img src={post.image} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>

      <Footer/>
    </div>
  );
}

export default Blog;