import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';
import GamesList from 'components/GamesList';
import { type FC } from 'react';

const Home: FC = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <GamesList />
            </SignedIn>
        </div>
    );
};

export default Home;
