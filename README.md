# codeguides
#
### START
Install npm modules: run `npm i`

Run the build script: run `npm run build`

Start the application: run `npm start`
#
### Linting

Linting will be done with each commit, but if you want to check for errors you can run:

for js and jsx files: `npm run lint:js`

for css files: `npm run lint:css`
#
**import - sort order:** 
- `import "./index.css"`: side effect imports (css)
- `import React from "react"`: packages
- `import Input from "@/components/Input"`: aliases
- `import From from "./Form"`: relative

Can be automatically fixed with `npm run lint:js:fix`
#
### Prettier

Run `npm run format` for code formatting. The script will be run with each commit, also.
#
### Testing
`npm test`
 
watch: `npm run test:watch`
 
update snapshots: `npm run test:update`

coverage: `npm run test:coverage`