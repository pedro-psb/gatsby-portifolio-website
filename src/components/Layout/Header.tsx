import {
  Box,
  Burger,
  Button,
  Center,
  Container,
  Group,
  Header,
  Menu,
  Stack,
  Title,
  createStyles,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { Link } from 'gatsby';
import React from 'react';
import MantineLogo from '../../assets/Logo';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '20px',
    marginTop: 30,
  },

  logo: {
    '& > svg path': {
      fill: theme.colors[theme.primaryColor],
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
      fontWeight: '900',
    },
  },

  linkLabel: {
    marginRight: 5,
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

interface HeaderActionProps {
  links: { link: string; label: string; links: { link: string; label: string }[] }[];
}

export function HeaderAction({ links }: HeaderActionProps) {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  function toggleBurger() {
    // toggle buger icon
    toggle();
  }

  // create menus and submenus
  const items = getMenuItems(links, classes);
  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={120}>
      <Container className={classes.inner} fluid>
        <Group>
          <Burger opened={opened} onClick={toggleBurger} className={classes.burger} size="sm" />
        </Group>
        <Stack spacing={5} className={classes.links}>
          <Center className={classes.logo}>
            {/* <MantineLogo size={28} /> */}
            <Link to="/" className={classes.titleLink}>
              <Title>pedro-pessoa|dev</Title>
            </Link>
          </Center>
          <Group>{items}</Group>
        </Stack>
        <Button radius="xl" sx={{ height: 30 }}>
          Download CV
        </Button>
      </Container>
    </Header>
  );
}
