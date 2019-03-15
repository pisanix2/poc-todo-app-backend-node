create table public.todo (
  id serial not null,
  title varchar(255),
  "createdAt" timestamp,
  "updatedAt" timestamp,
  "deletedAt" timestamp
);