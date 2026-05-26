import { getCourses } from '@/lib/supabase'
import CourseCard from './CourseCard'

const MOCK_COURSES = [
  { id: '1', title: 'Advanced React Patterns', progress: 75, icon_name: 'Code2' },
  { id: '2', title: 'System Design Fundamentals', progress: 42, icon_name: 'Network' },
  { id: '3', title: 'TypeScript Deep Dive', progress: 88, icon_name: 'FileCode' },
  { id: '4', title: 'Node.js & Microservices', progress: 30, icon_name: 'Server' },
]

export default async function CourseGrid() {
  const { data, error } = await getCourses()
  const courses = data || MOCK_COURSES

  if (error && !data) {
    console.warn('Using mock data — Supabase not connected:', error)
  }

  return (
    <>
      {courses.map((course, index) => (
        <CourseCard key={course.id} course={course} index={index} />
      ))}
    </>
  )
}