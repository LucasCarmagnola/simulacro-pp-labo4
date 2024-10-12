import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: "", redirectTo: "Peliculas", pathMatch: "full"},
    {
        path: 'Peliculas', loadComponent: () => import('./common/components/peliculas/peliculas.component')
        .then((c) => c.PeliculasComponent)
    },
    {
        path: 'AltaPelicula', loadComponent: () => import('./common/components/alta-pelicula/alta-pelicula.component')
        .then((c) => c.AltaPeliculaComponent)
    },
    {
        path: 'AltaActor', loadComponent: () => import('./common/components//alta-actor/alta-actor.component')
        .then((c) => c.AltaActorComponent)
    },
    {
        path: 'Actores', loadComponent: () => import('./common/components/actores/actores.component')
        .then((c) => c.ActoresComponent)
    },
];
