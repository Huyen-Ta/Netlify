export const Posts = [
  {
    id: 1,
    title: 'Program',
    text: 'This is Program',
    userId: 12,
    comments: [
      {
        id: 1,
        text: 'Hello',
        user: {
          id: 1,
          name: 'Huyen',
        },
      },
      {
        id: 2,
        text: 'Hi',
        user: {
          id: 2,
          name: 'Huyen Ta',
        },
      },
    ],
  },
  {
    id: 2,
    title: 'Product',
    text: 'This is Product',
    comments: [
      {
        id: 3,
        text: 'Hello',
      },
      {
        id: 4,
        text: 'Hi',
      },
    ],
  },
  {
    id: 3,
    title: 'Release',
    text: 'This is Release',
    comments: [
      {
        id: 5,
        text: 'Hello',
      },
      {
        id: 6,
        text: 'Hi',
      },
    ],
  },
]

export const Comments = [
  {
    id: 1,
    text: 'Hello',
    postId: 1,
    post: Posts[0],
  },
  {
    id: 2,
    text: 'Hi',
    postId: 2,
    post: Posts[1],
  },
]
