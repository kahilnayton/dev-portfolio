export type CardProps = {
  [key: string]: BlogCardProps
}

export type BlogCardProps = {
  uid: string
  title: any
  blog_image?: Record<string, string>
  project_image?: Record<string, string>
  preview_text: string
  release_date: string
  _meta?: any
  variant?: string
  
}
