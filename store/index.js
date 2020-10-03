export const state = () => ({
  news: [],
  staff: [],
  photos: [],
  schedule: [],
  services: [],
});

export const mutations = {
  addData(state, { key, info }) {
    state[key] = info;
  },
};
export const actions = {
  nuxtServerInit(vueContext, context) {
    return context.app.$axios.$get('/db.json')
      .then((res) => {
        Object.keys(res.data).forEach((key) => vueContext.commit('addData', { key, info: res.data[key] }));
      });
  },
};

export const getters = {
  allNews: (state) => state.news,
  staff: (state) => state.staff,
  photos: (state) => state.photos,
  services: (state) => state.services,
  getSchedule: (state) => state.schedule,
};
