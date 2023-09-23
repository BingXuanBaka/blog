import { getPosts } from "./posts"

export function getPostsDates(): { year: number, availableMonths: number[] }[] {
  const posts = getPosts()
  const years = new Set(posts.map(post =>
    new Date(post.date).getFullYear()
  ))

  const result = new Map<number, Set<number>>()

  years.forEach(value => {
    result.set(
      value,
      new Set(
        posts.filter(e => new Date(e.date).getFullYear() == value)
          .map(e => new Date(e.date).getMonth() + 1)
      )
    )
  })

  return [...result.entries()]
    .map(it => {
      return { year: it[0], availableMonths: [...it[1]] }
    })
}

export function getPostsByYearAndMonth(year: number, month: number): postInfo[] {
  const posts = getPosts()
  const filteredPost = posts.filter(
    post => {
      const date = new Date(post.date)
      return (
        date.getMonth() === month - 1 &&
        date.getFullYear() === year
      )
    }
  )

  return filteredPost
}