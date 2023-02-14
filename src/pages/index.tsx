import { Space, Title } from '@mantine/core';
import React from 'react';
import { HeroText } from '../components/Layout/Hero';
import Layout from '../components/Layout/Layout';
import { Projects } from '../components/Layout/Projects';

export default function HomePage() {
  return (
    <Layout>
      <Space h={50} />
      <HeroText />
      <Projects />
    </Layout>
  );
}
