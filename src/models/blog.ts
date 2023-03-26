export class MBlogFilter {
  page: number = 1
  search: string = ''
  sortBy: string = 'id'
  order: string = 'asc'

  constructor(data?: MBlogFilter) {
    Object.assign(this, data)
  }
}

export class MBlogModel {
  id: number = 0
  title: string = ''
  content: string = ''
  image: string = ''

  constructor(data?: MBlogModel) {
    Object.assign(this, data)
  }
}
