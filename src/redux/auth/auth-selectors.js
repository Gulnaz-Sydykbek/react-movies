export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUsername = state => state.auth.user.name;

export const getisFetchingCurrent = state => state.auth.isFetchingCurrentUser;

export const getToken = state => state.auth.token;
