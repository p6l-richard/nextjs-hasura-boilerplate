
alter table "public"."games" alter column "body" drop not null;
alter table "public"."games" add column "body" text;



-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."games" add column "image" text
--  null;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."games" add column "bgg_id" integer
--  not null unique;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."games" add column "description" text
--  null;

alter table "public"."games" rename column "name" to "title";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."games" add column "title" text
--  not null;

alter table "public"."games" alter column "user_id" set not null;

alter table "public"."games" rename column "user_id" to "author_id";

alter table "public"."games" rename to "feeds";
