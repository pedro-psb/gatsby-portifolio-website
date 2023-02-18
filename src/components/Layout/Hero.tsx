import { Container, Text, Title, createStyles } from '@mantine/core';

import React from 'react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: 150,
    paddingBottom: 150,

    '@media (max-width: 755px)': {
      paddingTop: 10,
      paddingBottom: 60,
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
    paddingRight: 15,
    borderRightStyle: 'solid',
    borderRightWidth: 2,
    borderColor: theme.colors[theme.primaryColor][1],
  },

  dots: {
    position: 'absolute',
    // color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.violet[0],

    '@media (max-width: 755px)': {
      display: 'none',
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: 'right',
    fontWeight: 800,
    fontSize: 24,
    letterSpacing: -1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '@media (max-width: 520px)': {
      fontSize: 20,
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
  },

  description: {
    textAlign: 'right',

    '@media (max-width: 520px)': {
      textAlign: 'left',
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: 'flex',
    justifyContent: 'center',

    '@media (max-width: 520px)': {
      flexDirection: 'column',
    },
  },

  control: {
    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    '@media (max-width: 520px)': {
      height: 42,
      fontSize: theme.fontSizes.md,

      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

const defaultText =
  'Today, I work mainly with fullstack python/typescript. When I started, I decided to focus on python for backend development and later I dived in frontend and design systems too, focusing in the the React ecosystem';

export function HeroText({ description = defaultText }: { description: string }) {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} >
      <div className={classes.inner}>
        <Title className={classes.title}>
          Hello! I'm a{' '}
          <Text component="span" className={classes.highlight} inherit>
            software engineer
          </Text>{' '}
          from Brazil
        </Title>

        <Container p={0} size={500}>
          <Text size="lg" color="dimmed" className={classes.description}>
            {description}
          </Text>
        </Container>

        <div className={classes.controls}>
          {/* <Button className={classes.control} size="lg" variant="default" color="gray">
            Book a demo
          </Button>
          <Button className={classes.control} size="lg">
            Purchase a license
          </Button> */}
        </div>
      </div>
    </Container>
  );
}
