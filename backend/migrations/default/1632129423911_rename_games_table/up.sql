

alter table "public"."feeds" rename to "games";


alter table "public"."games" rename column "author_id" to "user_id";

alter table "public"."games" alter column "user_id" drop not null;

alter table "public"."games" add column "title" text
 not null;

alter table "public"."games" rename column "title" to "name";

alter table "public"."games" add column "description" text
 null;

alter table "public"."games" add column "bgg_id" integer
 not null unique;

alter table "public"."games" add column "image" text
 null;

alter table "public"."games" drop column "body" cascade;
