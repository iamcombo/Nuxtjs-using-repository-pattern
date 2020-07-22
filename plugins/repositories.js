// 1. Import the General repository class into the Nuxtjs Plugin class and inject into Nuxtjs.

import createRepository from '~/repositories/Repository';
export default (ctx, inject) => {
  inject('repositories', createRepository(ctx.$axios))
}