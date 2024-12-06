# Dungeons and Dragons Utilities

## Create Tables in Turso

```bash
    npx prisma migrate diff \
    --from-empty \
    --to-schema-datamodel prisma/schema.prisma \
    --script > baseline1.sql
```

```bash
    turso db "database name" shell < baseline.sql
```