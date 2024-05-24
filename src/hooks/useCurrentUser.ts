import { UserContext } from 'providers/user/user.provider';
import { useContext } from 'react';

const useCurrentUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useCurrentUser must be used within a UserProvider!');
    }

    return context;
};

export default useCurrentUser;
