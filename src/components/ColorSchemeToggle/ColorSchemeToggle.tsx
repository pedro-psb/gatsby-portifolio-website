import { Button, useMantineColorScheme } from '@mantine/core';
import React from 'react';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Button color={colorScheme === 'light' ? 'blue' : 'orange'} onClick={() => toggleColorScheme()}>
      {colorScheme === 'light' ? 'Dark color scheme' : 'Light color scheme'}
    </Button>
  );
}
