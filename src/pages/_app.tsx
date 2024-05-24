import { Inter } from 'next/font/google';
import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { MantineProvider } from '@mantine/core';
import { theme } from 'lib/mantineTheme';

import '@mantine/core/styles.css';
import 'styles/globals.css';

// Using next/font instead of a manual setup, we get:
// - significantly easier setup
// - automatic best font practices
// - reduced layout shift
// - no network requests from the browser
const primaryFont = Inter({
    subsets: ['latin'],
    variable: '--primary-font',
});

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <MantineProvider theme={theme}>
            <main className={`${primaryFont.variable} font-sans`}>
                <Component props={pageProps} />
            </main>
        </MantineProvider>
    );
};

export default App;
