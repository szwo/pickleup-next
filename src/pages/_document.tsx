import { ColorSchemeScript } from '@mantine/core';
import { Html, Head, Main, NextScript } from 'next/document';
import type { FC } from 'react';

const Document: FC = () => {
    return (
        <Html>
            <Head>
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
