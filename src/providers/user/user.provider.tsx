import { samplePlayer } from 'lib/sampleGameData';
import { createContext, useEffect, useState, type FC, type ReactNode } from 'react';
import { Player } from 'types';

export type UserContextType = Player;

export const UserContext = createContext<UserContextType | undefined>(undefined);
UserContext.displayName = 'UserContext';

type Props = {
    children: ReactNode;
};

const UserProvider: FC<Props> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState<UserContextType>();

    useEffect(() => {
        setCurrentUser(samplePlayer);
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return null;
    }

    return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>;
};

export default UserProvider;
