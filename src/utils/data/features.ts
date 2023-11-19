import { chat, messagin, people, task } from './../../assets/Assets';

export const featureData: {
  title: string;
  description: string;
  imageSrc: string;
}[] = [
  {
    title: 'Task Management',
    description:
      'Reduce the time taken to complete your onboarding tasks significantly by over 80% by scheduling, prioritizing, and monitoring assigned tasks.',
    imageSrc: `${task}`,
  },
  {
    title: 'Employee Onboarding and Training',
    description:
      'Improve the data accuracy related to employee onboarding by standardizing the onboarding process.',
    imageSrc: `${people}`,
  },
  {
    title: 'Team building',
    description:
      'Messaging and Socials features alllow effective communication between HR and new hires',
    imageSrc: `${messagin}`,
  },
  {
    title: 'Event Mangement  ',
    description: 'A one-touch event management platform for new hires',
    imageSrc: `${chat}`,
  },
];
