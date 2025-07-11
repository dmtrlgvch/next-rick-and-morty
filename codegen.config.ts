import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://rickandmortyapi.com/graphql",
  documents: ["src/graphql/**/*.graphql"],
  generates: {
    "./src/graphql/__generated__/index.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
      config: {
        useTypeImports: true,
        withHooks: true,
        apolloReactHooksImportFrom: "@apollo/client",
        scalars: {
          Upload: "File",
        },
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
