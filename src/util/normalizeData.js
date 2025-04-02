export const normalizeData = (data) => {
  if (!data) return null
  return {
    id: data.id,
    title: data.attributes.title,
    content: data.attributes.content,
    category: data.attributes.category.data?.attributes.name || 'Uncategorized',
    author: data.attributes.author.data?.attributes.name || 'Anonymous',
  }
}
