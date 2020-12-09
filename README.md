## Introduction

Reproduction for https://github.com/prisma/prisma/issues/4280

## Steps

1. Create a free tier heroku postgres and grab the connection url
2. Paste the url prisma/.env and add `?connection_limit=10` to the url
3. Run `npx prisma migrate-legacy save --experimental && npx prisma migrate-legacy up --experimental` to bootstrap. New migrate doesn't work with heroku yet due to shadow database permission issues
4. After that is done, run `yarn start`. You will see after some inserts, timeouts will start to roll.


## Version used 
```
Environment variables loaded from prisma/.env
@prisma/cli          : 2.14.0-dev.4
@prisma/client       : 2.14.0-dev.4
Current platform     : darwin
Query Engine         : query-engine 833ab05d2a20e822f6736a39a27de4fc8f6b3e49 (at node_modules/@prisma/engines/query-engine-darwin)
Migration Engine     : migration-engine-cli 833ab05d2a20e822f6736a39a27de4fc8f6b3e49 (at node_modules/@prisma/engines/migration-engine-darwin)
Introspection Engine : introspection-core 833ab05d2a20e822f6736a39a27de4fc8f6b3e49 (at node_modules/@prisma/engines/introspection-engine-darwin)
Format Binary        : prisma-fmt 833ab05d2a20e822f6736a39a27de4fc8f6b3e49 (at node_modules/@prisma/engines/prisma-fmt-darwin)
Studio               : 0.330.0

```

