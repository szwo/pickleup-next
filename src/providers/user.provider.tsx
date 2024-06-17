import { createContext, useEffect, useState, type FC, type ReactNode } from 'react';
import { Player } from 'types';
import sampleUserData from '../../sampleData/users.json';

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
        setCurrentUser(sampleUserData.samplePlayer1);
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return null;
    }

    return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>;
};

export default UserProvider;
