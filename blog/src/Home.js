import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id:1},
        {title: 'My new website 2', body: 'lorem ipsum...', author: 'mario', id:2}
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() =>{
        console.log('use effect ran');
    }, [name])

    return (  
        <div className="home">
       
           <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
           <button onClick={() => setName('luigi')}>change name</button>
           <p>{name}</p>
        </div>
    );
}
 
export default Home;