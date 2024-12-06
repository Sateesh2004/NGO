import { ActivityCard } from './activitycard';

const activities = [
  {
    title: 'Education Support',
    description: 'Providing warm clothes, educational materials, and support to children in need',
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Women Empowerment',
    description: 'Organizing sewing and mehendi classes to help women become self-reliant',
    imageUrl: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Eco-Conservation',
    description: 'Annual tree plantation drives and eco-friendly Ganesh idol making workshops',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Community Support',
    description: 'Providing rations and essential supplies to underprivileged families',
    imageUrl: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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