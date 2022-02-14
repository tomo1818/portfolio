export type Product = {
  id: string,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  revisedAt: string,
  title: string,
  body: string,
  eye_catch: {
    url: string,
    height: number,
    width: number
  },
  category: {
    id: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    revisedAt: string,
    category: string
  },
  tag: [
    {
      id: string,
      createdAt: string,
      updatedAt: string,
      publishedAt: string,
      revisedAt: string,
      tag: string
    }
  ]
}
