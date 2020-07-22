// 4.Import Individual Repository into Repository.js

import NewsRepository from '~/repositories/NewsRepository'

export default ($axios) => ({
  news: NewsRepository($axios),
})