import { fetcher } from 'lib/fetch';
import { API_ROUTES } from 'lib/routes';
import { createContext, type FC, type ReactNode } from 'react';
import useSWR from 'swr';
import type { Location } from 'types';

export type LocationsContextType = Record<string, Location>;

export const LocationsContext = createContext<LocationsContextType | undefined>(undefined);
LocationsContext.displayName = 'LocationsContext';

type Props = {
    children: ReactNode;
};

const LocationsProvider: FC<Props> = ({ children }) => {
    const { data, isLoading } = useSWR<LocationsContextType>(API_ROUTES.locations, fetcher);

    if (isLoading) {
        return null;
    }

    return <LocationsContext.Provider value={data}>{children}</LocationsContext.Provider>;
};

export default LocationsProvider;
