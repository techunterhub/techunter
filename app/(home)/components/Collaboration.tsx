"use client";
import { Container, Title, Text, Button, Card, SimpleGrid, ThemeIcon, Group } from '@mantine/core';
import { IconUsers, IconBulb, IconSend } from '@tabler/icons-react';

const features = [
  {
    icon: IconUsers,
    title: 'Community',
    description: 'Join our friendly tech-loving community',
  },
  {
    icon: IconBulb,
    title: 'Innovation',
    description: 'Turn your innovative ideas into reality',
  },
  {
    icon: IconSend,
    title: 'Reach Out',
    description: "Let's create something amazing together",
  },
];

export function Collaboration() {
  const items = features.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" padding="xl">
      <ThemeIcon
        size={56}
        radius="md"
        variant="light"
        color={feature.icon === IconBulb ? 'yellow' : feature.icon === IconSend ? 'blue' : 'grape'}
      >
        <feature.icon size={26} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" fw={500} mt="md">
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py={80}>
      <Group justify="center">
        <Title order={2} ta="center" className="text-purple-800">
          COLLABORATION
        </Title>
      </Group>

      <Card withBorder radius="md" mt={30} padding="xl">
        <Title order={2} ta="center" mt="sm" className="text-indigo-700 !mx-auto">
          Collaborate with Techunter
        </Title>
        <Text c="dimmed" ta="center" mt="md">
          Bringing Ideas to Life Together!
        </Text>

        <Text ta="center" mt="md">
          At Techunter, we&apos;re not just about learning; we&apos;re a friendly community that loves to collaborate and share ideas. 
          We believe that great things happen when we work together, and we want to help turn your ideas into reality!
        </Text>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {items}
        </SimpleGrid>

        <Group justify="center" mt="xl">
          <Button size="lg" variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
            Contact us
          </Button>
        </Group>
      </Card>
    </Container>
  );
}

export default Collaboration;

