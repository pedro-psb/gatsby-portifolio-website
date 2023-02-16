import {
  ActionIcon,
  Burger,
  Button,
  Center,
  Container,
  Group,
  Header,
  MediaQuery,
  Menu,
  Paper,
  Stack,
  Title,
  Transition,
  createStyles,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconChevronDown,
} from '@tabler/icons-react';
import { Link } from 'gatsby';
import React from 'react';

const HEADER_HEIGHT = 60;
const HEADER_HEIGHT_MOBILE = 150;

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '20px',
    marginTop: 30,
    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'center',
    },
  },

  titleLink: {
    textDecoration: 'none',
    padding: 20,
    '& h1': {
      fontFamily: 'monospace',
      fontSize: theme.fontSizes.lg,
      color: theme.colors.gray[5],
    },
    '& :hover': {
      color: theme.colors.gray[4],
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontFamily: 'monospace',
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    '&:hover': {
      fontWeight: 900,
    },
  },

  linkLabel: {
    marginRight: 5,
  },
  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT_MOBILE,
    left: 0,
    right: 0,
    zIndex: 0,
    width: '100%',
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    boxShadow: theme.shadows.md,
    overflow: 'hidden',
    '& a': {
      marginBottom: 20,
      textAlign: 'center',
    },

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

function getMenuItems(links, classes) {
  const menu = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <Link to={link.link} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={12} stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link key={link.label} to={link.link} className={classes.link}>
        {link.label}
      </Link>
    );
  });
  return menu;
}

type socialLink = { name: string; url: string };

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
    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
      <Group
        spacing="xs"
        position="right"
        style={{ position: 'absolute', top: 30, right: 30 }}
        noWrap
      >
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
    </MediaQuery>
  );
}

interface HeaderActionProps {
  links: { link: string; label: string; links: { link: string; label: string }[] }[];
  socialLinks: socialLink[];
}

export function HeaderAction({ links, socialLinks }: HeaderActionProps) {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  function toggleBurger() {
    // toggle buger icon
    toggle();
  }

  // create menus and submenus
  const items = getMenuItems(links, classes);
  return (
    <Header height={150} sx={{ borderBottom: 0 }}>
      <Container className={classes.inner} fluid id="index-section">
        {/* Mobile menu */}
        <Group>
          <Burger opened={opened} onClick={toggleBurger} className={classes.burger} size="sm" />
        </Group>
        <Transition transition="pop-top-left" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>

        {/* desktop menu */}
        <Stack spacing={5} sx={{ textAlign: 'center', margin: 'auto' }}>
          <Link to="/" className={classes.titleLink}>
            <Title>pedro-pessoa|dev</Title>
          </Link>
          <Group className={classes.links}>{items}</Group>
        </Stack>
        {/* <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Button radius="xl" sx={{ height: 30, position: 'absolute', right: 15 }} variant="light">
            Download CV
          </Button>
        </MediaQuery> */}
        <SocialLinks socialLinks={socialLinks} />
      </Container>
    </Header>
  );
}
