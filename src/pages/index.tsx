import GamesList from 'components/GamesList';
import { type FC } from 'react';
import { sampleData } from 'lib/sampleGameData';
import { Button, Group } from '@mantine/core';

const Home: FC = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-4">Upcoming Games</h1>
            {/* <button
                className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={handleFetchDataClick}
            >
                Fetch Some Posts!
            </button> */}
            <GamesList games={sampleData} />
            <Group mt={50} justify="center">
                <Button size="xl">Demo Mantine</Button>
            </Group>
        </div>
    );
};

export default Home;
