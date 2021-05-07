export const routes = [
    { path: '/' ,       action: 'agregar'},
    { path: '/pagina1', action: 'listar'},
    { path: '/pagina2', action: 'buscar'}
];

export const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

export const findActionByPath = (path, routes) => routes.find(r=> r.path == path || undefined );