import { ColorSchemeScript } from '@mantine/core';
import { Html, Head, Main, NextScript } from 'next/document';
import type { FC } from 'react';

const Document: FC = () => {
    return (
        <Html>
            <Head>
                <script src="https://kit.fontawesome.com/e9f61d020b.js" async crossOrigin="anonymous" />
                <ColorSchemeScript defaultColorScheme="auto" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
