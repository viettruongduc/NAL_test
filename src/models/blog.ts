export class MBlogModal {
  page: number = 1
  search: string = ''
  sortBy: string = 'id'
  order: string = 'asc'

  constructor(data?: MBlogModal) {
    Object.assign(this, data)
  }
}
