// import axios from 'axios';
export const state = () => ({
  list: [],
  currentSong: {},
});

// export const getters = {
//   getDashboardNotice(state) {
//     return state.dashboard_notice;
//   },
// };

export const mutations = {
  addSongToCurrent(state, payload) {
    state.currentSong = payload;
  },
  addNewSong(state, payload) {
    state.list = [
      ...state.list,
      {
        ...payload,
        id: state.list.length ? state.list[state.list.length - 1].id + 1 : 1,
      },
    ];
  },
  clearCurrent(state, payload) {
    state.currentSong = payload;
  },
};

export const actions = {};
