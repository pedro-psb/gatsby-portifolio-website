import { Accordion, Col, Container, Grid, Image, Text, Title, createStyles } from '@mantine/core';
import React from 'react';
import { Section } from './Section';
import imgs from './assets/chill.svg';

const useStyles = createStyles((theme) => ({
  title: {
    marginBottom: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  item: {
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
  },

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

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.';
export const defaultAbout = [
  { id: 1, question: 'How did you started programming?', answer: placeholder },
  { id: 2, question: 'What is your favorite stack?', answer: placeholder },
  { id: 3, question: 'Which tech areas interest you the most, currently?', answer: placeholder },
  { id: 4, question: 'Have any hobbies?', answer: placeholder },
  { id: 5, question: 'Space or tabs?', answer: placeholder },
];

const default_desc = 'Some info about me';
interface AboutProps {
  about: { id: number; question: string; answer: string }[];
  description: string;
}

export function AboutSection({ about = defaultAbout, description = default_desc }: AboutProps) {
  const { classes } = useStyles();
  return (
    <Section size="lg" bgColor="gray.0" color="gray.0" mb={0} pb={100} id="about-section">
      <Text className={classes.supTitle}>About me</Text>
      <Text color="dimmed" className={classes.description}>
        {description}
      </Text>
      <Grid id="faq-grid" gutter={50} mt={50}>
        <Col span={12} md={7}>
          <Accordion chevronPosition="right" defaultValue="#1" variant="separated">
            {about.map((item) => (
              <Accordion.Item key={item.id} className={classes.item} value={`#${item.id}`}>
                <Accordion.Control>{item.question}</Accordion.Control>
                <Accordion.Panel>{item.answer}</Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
        <Col span={12} md={5}>
          <Image src={imgs} alt="Frequently Asked Questions" />
        </Col>
      </Grid>
    </Section>
  );
}
