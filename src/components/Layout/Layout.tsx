import { Box, ColorScheme, ColorSchemeProvider, Container, MantineProvider } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import React, { useState } from 'react';
import { FooterCentered } from './Footers';
import { HeaderAction } from './Header';
import { header_links } from './HeaderLinks';

interface LayoutProps {
  children: React.ReactNode;
  socialLinks: any[];
}

export default function Layout({ children, socialLinks }: LayoutProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      {/* Add your theme here */}
      <MantineProvider
        theme={{ colorScheme, primaryColor: 'violet' }}
        withGlobalStyles
        withNormalizeCSS
      >
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <HeaderAction links={header_links} />
          {children}
          <FooterCentered links={header_links} socialLinks={socialLinks} />
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
