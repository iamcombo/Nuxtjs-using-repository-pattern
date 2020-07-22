<template>
  <div>
    <div class="pagination shadow-md">
      <div class="flex justify-center pt-3">
        <button name="provious">
          <svg class="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <span>1/5</span>
        <button name="next">
          <svg class="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
    <br>
    <div>
      <div v-for="(item, i) in news" :key="i" class="bg-white shadow-md px-6 py-6 my-2">
        <div class="grid grid-cols-10">
          <div class="col-span-1 font-bold">{{item.points}}</div>
          <div class="col-span-9">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  async fetch({ store }) {
    await store.dispatch('get_news')
  },
  computed: {
    ...mapState({
      news: (state) => {
        return state.news
      }
    })
  }
}
</script>

<style scoped>
.pagination {
  width: 100%;
  height: 50px;
  background: #fff;
}
.news-content {
  background: #fff;
}
</style>