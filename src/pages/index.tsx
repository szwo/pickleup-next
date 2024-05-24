import PostList from 'components/PostList';
import { type FC, useState } from 'react';

const Home: FC = () => {
    const [posts, setPosts] = useState([]);

    const handleFetchDataClick = async () => {
        const res = await fetch('/api/example');
        const { data } = await res.json();

        if (data) {
            setPosts(data);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-4">My Social Feed</h1>
            <button
                className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={handleFetchDataClick}
            >
                Fetch Some Posts!
            </button>
            <PostList posts={posts} />
        </div>
    );
};

export default Home;
