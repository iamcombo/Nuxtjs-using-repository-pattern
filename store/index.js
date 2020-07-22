export const state = () => ({
  news: [],
})

export const mutations = {
  set_news(state, payload) {
    state.news = payload
  }
}

export const actions = {
  async get_news({commit}) {
    const res = await this.$repositories.news.all()
    commit('set_news',res.data)
  }
}