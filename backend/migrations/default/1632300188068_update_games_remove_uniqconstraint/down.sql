

CREATE  INDEX "games_bgg_id_key" on
  "public"."games" using btree ("bgg_id");

alter table "public"."games" add constraint "games_bgg_id_key" unique ("bgg_id");
