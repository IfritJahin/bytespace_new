import type { Course } from "@/components/CourseCard";

export const courses: Course[] = [
  { title: "Learn Figma from Basic", img: "/course 1.jpg", learners: ["/p1.png", "/p2.png", "/p3.png", "/p4.png"] },
  { title: "Build Digital Asset", img: "/course2.jpg", learners: ["/p5.png", "/p6.png", "/p7.png", "/p8.png"] },
  { title: "the Power of Big Data", img: "/course3.jpg", learners: ["/p9.png", "/p1.png", "/p5.png", "/p3.png"] },
  { title: "Balancing Productivity and Wellbeing", img: "/course4.jpg", learners: ["/p2.png", "/p6.png", "/p4.png", "/p9.png"] },
  { title: "Mastering Money Management", img: "/course5.jpg", learners: ["/p7.png", "/p3.png", "/p8.png", "/p1.png"] },
  { title: "From Idea to Startup Success", img: "/course6.jpg", learners: ["/p4.png", "/p9.png", "/p2.png", "/p6.png"] },
].map((c) => ({
  ...c,
  author: "pumpsoft studio",
  rating: 4.5,
  price: "$25",
  level: "Beginner",
  meta: ["17 Lessons", "2 hours 16 mins", "59 Comments"],
}));
