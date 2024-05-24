import { Inter } from 'next/font/google';
import type { AppProps } from 'next/app';
import 'styles/globals.css';
import type { FC } from 'react';

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
        <main className={`${primaryFont.variable} font-sans`}>
            <Component props={pageProps} />
        </main>
    );
};

export default App;
