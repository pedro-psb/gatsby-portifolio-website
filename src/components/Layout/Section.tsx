import { Container, ContainerProps, createStyles } from '@mantine/core';
import React from 'react';

const useStyle = createStyles((theme, { minHeight: _minHeight, color, bgColor }: SectionProps) => ({
  fluidWrapper: {
    backgroundColor: bgColor === '' ? 'white' : theme.fn.themeColor(bgColor),
    width: '100%',
    paddingBottom: 0,
    paddingTop: 0,
  },
  wrapper: {
    backgroundColor: color === '' ? 'white' : theme.fn.themeColor(color),
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.lg,
    minHeight: _minHeight,
  },
}));

interface SectionProps {
  minHeight?: number;
  color?: string;
  bgColor?: string;
}

export function Section({
  minHeight = 300,
  color = '',
  bgColor = '',
  ...props
}: SectionProps & ContainerProps) {
  const { classes, cx } = useStyle({ minHeight, color, bgColor });
  if (props.fluid) {
    return (
      <Container fluid className={cx(classes.wrapper, classes.fluidWrapper)}>
        {props.children}
      </Container>
    );
  }

  return (
    <Container className={classes.fluidWrapper} fluid>
      <Container size="lg" className={classes.wrapper} {...props}>
        {props.children}
      </Container>
    </Container>
  );
}
