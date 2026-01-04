import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id:1},
        {title: 'My new website 2', body: 'lorem ipsum...', author: 'mario', id:2}
    ]);

    return (  
        <div className="home">
       
           {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                </div>
           ))}
        </div>
    );
}
 
export default Home;