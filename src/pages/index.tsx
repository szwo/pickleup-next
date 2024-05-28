import GamesList from 'components/GamesList';
import { useEffect, useState, type FC } from 'react';
import { Loader } from '@mantine/core';

const Home: FC = () => {
    const [isLoading, setIsloading] = useState(true);
    const [gamesList, setGamesList] = useState([]);

    useEffect(() => {
        const fetchGameData = async () => {
            setIsloading(true);
            const res = await fetch('/api/games');
            const data = await res.json();
            setGamesList(data);
            setIsloading(false);
        };

        fetchGameData();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center">
            {/* <button
                className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={handleFetchDataClick}
            >
                Fetch Some Posts!
            </button> */}
            {isLoading ? <Loader /> : <GamesList games={gamesList} />}
        </div>
    );
};

export default Home;
