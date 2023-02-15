import { Container, Text, Title, createStyles } from '@mantine/core';
import React from 'react';
import { data as mockData } from './ProjectCardMock';
import { CardGrid } from './ProjectCards';
import { Section } from './Section';

const useStyles = createStyles((theme) => ({
  supTitle: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 800,
    fontSize: theme.fontSizes.sm,
    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    letterSpacing: 0.5,
  },
  description: {
    textAlign: 'center',
    marginTop: theme.spacing.xs,
  },
}));

export function Projects({ projects = mockData }) {
  const { classes } = useStyles();
  return (
    <Section bgColor="gray.0" color="gray.0" id="project-section">
      <Text className={classes.supTitle}>Projects</Text>
      <Container size={660} p={0} mb={50}>
        <Text color="dimmed" className={classes.description}>
          These are my projects. Feel free to contact me!
        </Text>
      </Container>
      <CardGrid cards={projects} />
    </Section>
  );
}
