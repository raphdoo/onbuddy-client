import { chat, messagin, people, task } from "./../../assets/Assets";

export const featureData: {
  title: string;
  description: string;
  imageSrc: string;
}[] = [
  {
    title: "Task Management",
    description:
      "To reduce the time taken to complete onboarding tasks. It also creates, prioritizes, delegates, and monitors tasks to ensure they are completed within given deadlines.",
    imageSrc: `${task}`,
  },
  {
    title: "Employee Training and Onboarding",
    description:
      "improve the data accuracy related to employee onboarding by standardizing the onboarding process.",
    imageSrc: `${people}`,
  },
  {
    title: "In Messaging  ",
    description:
      "Effective communication between HR and new hires It is also is a text-based, one-to-one conversation",
    imageSrc: `${messagin}`,
  },
  {
    title: "In Messaging  ",
    description:
      "Effective communication between HR and new hires It is also is a text-based, one-to-one conversation",
    imageSrc: `${chat}`,
  },
];
