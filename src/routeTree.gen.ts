/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as GalleryImport } from './routes/gallery'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const GalleryRoute = GalleryImport.update({
  path: '/gallery',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/gallery': {
      id: '/gallery'
      path: '/gallery'
      fullPath: '/gallery'
      preLoaderRoute: typeof GalleryImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({ IndexRoute, GalleryRoute })

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/gallery"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/gallery": {
      "filePath": "gallery.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
