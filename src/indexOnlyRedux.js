export const GET_REPOS = 'aqua-pura-app/repos/LOAD';
export const GET_REPOS_SUCCESS = 'aqua-pura-app/repos/LOAD_SUCCESS';
export const GET_REPOS_FAIL = 'aqua-pura-app/repos/LOAD_FAIL';
export const GET_CLIENTS = 'aqua-pura-app/repos/CLIENT';
export const GET_CLIENTS_SUCCESS = 'aqua-pura-app/repos/CLIENT_SUCCESS';
export const GET_CLIENTS_FAIL = 'aqua-pura-app/repos/CLIENT_FAIL';

export default function reducer(state = { repos: [],clients:[] }, action) {
  switch (action.type) {
    case GET_REPOS:
      return { ...state, loading: true };
    case GET_REPOS_SUCCESS:
      return { ...state, loading: false, repos: action.payload.data };
    case GET_REPOS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories'
      };
    case GET_CLIENTS:
      return { ...state, loading: true };
    case GET_CLIENTS_SUCCESS:
      return { ...state, loading: false, clients: action.payload.data };
    case GET_CLIENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories'
      };
    default:
      return state;
  }
}

export function listRepos(user) {
  return {
    type: GET_REPOS,
    payload: {
      request: {
        url: `Inventario/01/R0001`
      }
    }
  };
}

export function listClients(user) {
  return {
    type: GET_CLIENTS,
    payload: {
      request: {
        url: `Clientes`
      }
    }
  };
}