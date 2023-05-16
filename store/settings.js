// import axios from 'axios';
export const state = () => ({
  dashboard_notice: {
    shown: true,
    message: 'Saturday & Sunday is our off day',
  },
});

// export const getters = {
//   getDashboardNotice(state) {
//     return state.dashboard_notice;
//   },
// };

export const mutations = {
  closeDashboardNotice(state) {
    state.dashboard_notice.shown = false;
  },
};

export const actions = {};
