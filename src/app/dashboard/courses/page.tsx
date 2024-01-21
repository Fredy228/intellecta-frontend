import { Courses } from "@/components/screens/courses/Courses"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses | Intellecta",
  description: "Application for learning",
};


export default function CoursesPage() {
  return <Courses />
}
