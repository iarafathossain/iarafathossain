export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  avatar?: string;
  platform: "LinkedIn" | "Freelancer.com";
  platformUrl: string;
  rating?: number;
  review: string[];
}

export const testimonials: Testimonial[] = [
  {
    id: "maria-lindfors",
    name: "Maria Lindfors",
    designation: "Co-Founder, OmaApply",
    avatar: "/avatar/maria.jpeg",
    platform: "LinkedIn",
    platformUrl: "https://www.linkedin.com/in/iarafathossain/",
    review: [
      "I had the opportunity to work with Arafat during his time at OmaApply, where I am a Co-Founder and he worked as part of our tech team.",
      "Arafat proved to be a flexible and adaptable team member who was able to work effectively in a fast-paced startup environment. He handled changing priorities well and maintained a professional and solution-oriented approach, including during demanding and high-pressure situations.",
      "Strenght of Arafat is his ability to work independently within his area of expertise. He takes responsibility for his work, approaches challenges with a practical mindset, and is able to adapt when circumstances or requirements change.",
      "From a founder’s perspective, I particularly appreciated his reliability, flexibility, and ability to remain focused when the team was working under pressure. Communication with him was always fluent.",
      "I warmly recommend Arafat to tech positions.",
    ],
  },
  {
    id: "richard",
    name: "Richard",
    designation: "Professional grade writing",
    avatar: "/avatar/richard.webp",
    platform: "Freelancer.com",
    platformUrl: "https://www.freelancer.com/u/arafatWebDev",
    rating: 5,
    review: [
      "Excellent designer with a great eye for detail. Completes all revisions as requested and provides a first class product. Will be using him again for sure.",
    ],
  },
];
