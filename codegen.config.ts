import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://rickandmortyapi.com/graphql",
  documents: ["src/graphql/**/*.graphql"],
  generates: {
    // "./src/graphql/__generated__/": {
    //   preset: "client",
    //   plugins: [],
    //   config: {
    //     useTypeImports: true,
    //     documentMode: "documentNode",
    //     strictScalars: true,
    //     nonOptionalTypename: true,
    //     scalars: {
    //       Upload: "File",
    //       DateTime: "string",
    //       Date: "string",
    //       Time: "string",
    //       JSON: "Record<string, any>",
    //       JSONObject: "Record<string, any>",
    //     },
    //   },
    // },
    "./src/graphql/__generated__/index.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
      config: {
        useTypeImports: true,
        withHooks: true,
        // withHOC: false,
        // withComponent: false,
        apolloReactHooksImportFrom: "@apollo/client",
        scalars: {
          Upload: "File",
        },
      },
    },
  },
  ignoreNoDocuments: true,
  watch: true,
};

export default config;
