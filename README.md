# Smiling-radio

This project use:
- [Bun](https://bun.com/docs) `Package Manager`
- [Biome](https://biomejs.dev/guides/getting-started/) `Linter and Formater`
- [Typescript](https://www.typescriptlang.org/docs/)
- [Express](https://expressjs.com/en/starter/installing.html) 
- [Bruno](https://open-vsx.org/vscode/item?itemName=bruno-api-client.bruno) `VsCode extension for testing the endpoints` 

## MonoRepo Architecture
```text
├───apps
│   ├───backend          ===> ExpressJS 
│   │   └───src
│   │       └───index.ts ===> Main Entrypoint          
│   └───frontend         ===> Nuxt
│       └───src
└───packages
    ├───database         ===> (@repo/database) Prisma
    │   └───src
    └───shared-types     ===> (@repo/shared-types) Typescript interfaces shared 
        └───src
```
> `/src` folders should contains all source code that needs compilation in apps/packages !  

## First pull of the project
Run these commands at the root directory:
```bash
bun install # Installs the required dependancies
bun run dev # Start the project with 'start --watch'

# Then you're ready to go !
```
Others usefull comands:
- To build the project: 
`
bun run build
`
- To lint:
`bun run lint`
- To format all files with biome:
`bun run format`
