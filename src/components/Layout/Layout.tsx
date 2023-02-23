import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import BgImage from './BgImage';
import { FooterCentered } from './Footers';
import { HeaderAction } from './Header';
import { header_links } from './HeaderLinks';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  // TODO add dark mode colorscheme
  // useHotkeys([['mod+J', () => toggleColorScheme()]]);
  const socialLinksQuery = useStaticQuery(graphql`
    query SocialLinks {
      site {
        siteMetadata {
          title
          social {
            name
            url
          }
        }
      }
    }
  `);
  const socialLinks = socialLinksQuery.site.siteMetadata.social;

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
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
          <BgImage />
          <HeaderAction links={header_links} socialLinks={socialLinks} />
          {children}
          <FooterCentered links={header_links} socialLinks={socialLinks} />
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
