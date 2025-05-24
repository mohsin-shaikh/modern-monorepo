# Supabase API

## Start the local Supabase server

```bash
supabase start
```

## Reset the database

```bash
supabase db reset
```

## Generate the types

```bash
supabase gen types --lang=typescript --local --schema public > ../../packages/supabase/src/types/db.ts
```