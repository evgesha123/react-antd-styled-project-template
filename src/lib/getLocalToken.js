export const getLocalToken = () => localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null;

