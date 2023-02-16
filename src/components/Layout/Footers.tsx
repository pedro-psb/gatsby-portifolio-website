import { ActionIcon, Anchor, Group, Text, createStyles } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react';
import React from 'react';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 'auto',
    margin: 'auto',
    width: '100%',
    [theme.fn.largerThan('md')]: {
      width: theme.breakpoints.md,
    },
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
      '& :nth-child(1)': {
        order: 3,
      },
      '& :nth-child(2)': {
        order: 1,
      },
      '& :nth-child(3)': {
        order: 2,
      },
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

function SocialLinks({ socialLinks }: { socialLinks: socialLink[] }) {
  const iconStyle = {
    size: 20,
    stroke: 1.5,
  };
  const iconMap = {
    twitter: <IconBrandTwitter size={iconStyle.size} stroke={iconStyle.stroke} />,
    linkedin: <IconBrandLinkedin size={iconStyle.size} stroke={iconStyle.stroke} />,
    github: <IconBrandGithub size={iconStyle.size} stroke={iconStyle.stroke} />,
  };
  return (
    <Group spacing="xs" position="right" noWrap>
      {socialLinks.map((social) => (
        <ActionIcon
          size="lg"
          variant="default"
          radius="xl"
          component="a"
          href={social.url}
          target="_blank"
          rel="noreferrer"
        >
          {iconMap[social.name.toLowerCase()]}
        </ActionIcon>
      ))}
    </Group>
  );
}

type socialLink = { name: string; url: string };

interface FooterCenteredProps {
  links: { link: string; label: string }[];
  socialLinks: socialLink[];
}

export function FooterCentered({ links, socialLinks }: FooterCenteredProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Group my="md">
          <Text color="dimmed" size="sm" style={{ fontStyle: 'italic' }}>
            2023 &copy; Pedro Pessoa
          </Text>
        </Group>
        <Group className={classes.links}>
          {links.map((link) => (
            <Anchor
              color="dimmed"
              key={link.label}
              href={link.link}
              sx={{ lineHeight: 1 }}
              size="sm"
            >
              {link.label}
            </Anchor>
          ))}
        </Group>
        <SocialLinks socialLinks={socialLinks} />
      </div>
    </div>
  );
}
