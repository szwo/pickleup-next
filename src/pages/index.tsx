import GamesList from 'components/GamesList';
import { type FC } from 'react';
import { sampleData } from 'lib/sampleGameData';

const Home: FC = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            {/* <button
                className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={handleFetchDataClick}
            >
                Fetch Some Posts!
            </button> */}
            <GamesList games={sampleData} />
        </div>
    );
};

export default Home;
