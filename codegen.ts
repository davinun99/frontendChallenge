import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://blue-surf-1040009.us-east-1.aws.cloud.dgraph.io/graphql',
  documents: './src/components/**/*.{ts,tsx}',
  generates: {
    'src/generated/': {
      preset: 'client',
      plugins: [],
      config: {
        withHooks: true
      }
    }
  }
}

export default config
