// import axios from 'axios';
export const state = () => ({
  dashboard_notice: {
    shown: true,
    message: 'Saturday & Sunday is our off day',
  },
  nav_handle: true,
});

export const getters = {
  // getDashboardNotice(state) {
  //   return state.dashboard_notice;
  // },
  // get_nav_handle(state) {
  //   return state.nav_handle;
  // },
};

export const mutations = {
  closeDashboardNotice(state) {
    state.dashboard_notice.shown = false;
  },
  navUpdate(state) {
    state.nav_handle = !state.nav_handle;
    // console.log(state.nav_handle);
  },
};

export const actions = {};
