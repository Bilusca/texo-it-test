const proxy = [
  {
    context: '/api',
    target: 'https://tools.texoit.com/backend-java',
    pathRewrite: {'^/api': ''}
  }
]
