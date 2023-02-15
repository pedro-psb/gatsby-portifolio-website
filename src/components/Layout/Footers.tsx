import { ActionIcon, Anchor, Center, Group, createStyles } from '@mantine/core';
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import React from 'react';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 'auto',
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.xl}px ${theme.spacing.xl}px`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

function SocialLinks() {
  return (
    <Group spacing="xs" position="right" noWrap>
      <ActionIcon size="lg" variant="default" radius="xl">
        <IconBrandTwitter size={18} stroke={1.5} />
      </ActionIcon>
      <ActionIcon size="lg" variant="default" radius="xl">
        <IconBrandYoutube size={18} stroke={1.5} />
      </ActionIcon>
      <ActionIcon size="lg" variant="default" radius="xl">
        <IconBrandInstagram size={18} stroke={1.5} />
      </ActionIcon>
    </Group>
  );
}

interface FooterCenteredProps {
  links: { link: string; label: string }[];
  fixed?: boolean;
}

export function FooterCentered({ links, fixed }: FooterCenteredProps) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor color="dimmed" key={link.label} href={link.link} sx={{ lineHeight: 1 }} size="sm">
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      {!fixed ? (
        <div className={classes.inner}>
          {/* <MantineLogo size={28} /> */}
          <Group className={classes.links}>{items}</Group>
          <SocialLinks />
        </div>
      ) : (
        <Center>
          <div className={classes.inner}>
            <SocialLinks />
          </div>
        </Center>
      )}
    </div>
  );
}
