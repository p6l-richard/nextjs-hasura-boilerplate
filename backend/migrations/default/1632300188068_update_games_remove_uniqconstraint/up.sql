

alter table "public"."games" drop constraint "games_bgg_id_key";

DROP INDEX IF EXISTS "games_bgg_id_key";
