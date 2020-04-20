
export const state = () => ({
  news: [],
  staff: [],
  photos: [],
  schedule: [],
});

export const mutations = {
  addData (state, {key, info}) {
    state[key] = info;
  }
};
export const actions = {
  nuxtServerInit (vueContext, context) {
    return context.app.$axios.$get('/db.json')
      .then(res => {
        for(let key in res.data) {
          vueContext.commit('addData', {key, info:res.data[key]})
        }
      })
      .catch( err => console.log(err))
  }
};

export const getters = {
  allNews: state => state.news,
  staff: state => state.staff,
  getPhotos: state => state.photos,
  getSchedule: state => state.schedule,
};
