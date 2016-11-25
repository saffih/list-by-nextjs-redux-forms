# list-by-nextjs-redux-forms
Playing with next.js + redux-forms
# next.js
The next.js provides micor framework with react/webpack and babel. The pages directory serves the requests and delegate to the app in src dir

# bootstrap

# redux
redux paradigms are used (taken to extreme, idiomatic).

- actions - packages under actions includes the actions creators and action type nested under the package "name"
- components - components which are "react" pure.
- containers - having presentational view for each of the components having no UI - only logic binding actions and states to properties of components.
- reducers - one combined reducer, combined from indifidual package "name" reducers.

# Naming
Naming is simple for a component "name" (in components) having "name"View in containers

# Running with node
requires npm or yarn
- in app directory
  - npm run dev
  - yarn dev


# Optional docker
Running in docker while using app dir mounted for external node_modules and sources
Docker for starting & developing with node in docker.
- source helpers.sh
- build
- updev

dcleanup - clean the images docker-compose

Alternative - building the packages inside the docker and mount the sources.
that would freeze the packages as well while source is external.
