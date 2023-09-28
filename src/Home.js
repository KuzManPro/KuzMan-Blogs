import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const{data: blogs, isPending, error} = useFetch('https://api.jsonbin.io/v3/b/6515daf854105e766fbb1b15');

    return ( 
        <div className="home">
            { error && <div>{ error } </div> }
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}
 
export default Home;