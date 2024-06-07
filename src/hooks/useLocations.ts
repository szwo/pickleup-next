import { LocationsContext } from 'providers/locations.provider';
import { useContext } from 'react';

const useLocations = () => {
    const context = useContext(LocationsContext);

    if (!context) {
        throw new Error('useLocations must be used within a LocationsProvider!');
    }

    return context;
};

export default useLocations;
