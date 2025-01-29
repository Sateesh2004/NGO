import { ActivityCard } from './activitycard';

const activities = [
  {
    title: 'Education Support',
    description: 'Providing warm clothes, educational materials, and support to children in need',
    imageUrl: '2.jpg',
  },
  {
    title: 'Women Empowerment',
    description: 'Organizing sewing and mehendi classes to help women become self-reliant',
    imageUrl: '/4.jpg',
  },
  {
    title: 'Eco-Conservation',
    description: 'Annual tree plantation drives and eco-friendly Ganesh idol making workshops',
    imageUrl: '/t4.jpg',
  },
  {
    title: 'Community Support',
    description: 'Providing rations and essential supplies to underprivileged families',
    imageUrl: 't3.jpg',
  },
];

export function ActivityList() {
  return (
    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {activities.map((activity) => (
        <ActivityCard
          key={activity.title}
          title={activity.title}
          description={activity.description}
          imageUrl={activity.imageUrl}
        />
      ))}
    </div>
  );
}