import { useAuth, useUser } from '@clerk/nextjs';
import { createContext, useEffect, useState, type FC, type ReactNode } from 'react';
import { Player } from 'types';

export type UserContextType = Player;

export const UserContext = createContext<UserContextType | undefined>(undefined);
UserContext.displayName = 'UserContext';

type Props = {
    children: ReactNode;
};

const UserProvider: FC<Props> = ({ children }) => {
    const { isLoaded: isAuthLoaded, userId, sessionId } = useAuth();
    const { isLoaded: isUserLoaded, user } = useUser();
    const isLoaded = isAuthLoaded && isUserLoaded;

    const [currentUser, setCurrentUser] = useState<UserContextType>();

    useEffect(() => {
        if (isLoaded && isUserLoaded && userId && user) {
            const player: Player = {
                id: userId,
                firstName: user.firstName,
                lastName: user.lastName,
            };
            setCurrentUser(player);
        }
    }, [isLoaded, isUserLoaded, userId, sessionId, user]);

    if (!isLoaded) {
        return null;
    }

    return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>;
};

export default UserProvider;
