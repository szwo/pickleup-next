import GamesList from 'components/GamesList';
import { type FC } from 'react';

const Home: FC = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <GamesList />
        </div>
    );
};

export default Home;
