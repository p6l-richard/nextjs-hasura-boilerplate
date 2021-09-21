import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
import * as React from "react";
import * as ApolloReactComponents from "@apollo/client/react/components";
import * as ApolloReactHoc from "@apollo/client/react/hoc";
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} & { [P in K]-?: NonNullable<T[P]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: string;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars["Int"]>;
  _gt?: Maybe<Scalars["Int"]>;
  _gte?: Maybe<Scalars["Int"]>;
  _in?: Maybe<Array<Scalars["Int"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Int"]>;
  _lte?: Maybe<Scalars["Int"]>;
  _neq?: Maybe<Scalars["Int"]>;
  _nin?: Maybe<Array<Scalars["Int"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars["String"]>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: "accounts";
  access_token?: Maybe<Scalars["String"]>;
  access_token_expires?: Maybe<Scalars["timestamptz"]>;
  compound_id: Scalars["String"];
  created_at: Scalars["timestamptz"];
  id: Scalars["uuid"];
  provider_account_id: Scalars["String"];
  provider_id: Scalars["String"];
  provider_type: Scalars["String"];
  refresh_token?: Maybe<Scalars["String"]>;
  updated_at: Scalars["timestamptz"];
  user_id: Scalars["uuid"];
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: "accounts_aggregate";
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: "accounts_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Accounts_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: Maybe<Array<Accounts_Bool_Exp>>;
  _not?: Maybe<Accounts_Bool_Exp>;
  _or?: Maybe<Array<Accounts_Bool_Exp>>;
  access_token?: Maybe<String_Comparison_Exp>;
  access_token_expires?: Maybe<Timestamptz_Comparison_Exp>;
  compound_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  provider_account_id?: Maybe<String_Comparison_Exp>;
  provider_id?: Maybe<String_Comparison_Exp>;
  provider_type?: Maybe<String_Comparison_Exp>;
  refresh_token?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint */
  AccountsPkey = "accounts_pkey",
}

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  access_token?: Maybe<Scalars["String"]>;
  access_token_expires?: Maybe<Scalars["timestamptz"]>;
  compound_id?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  provider_account_id?: Maybe<Scalars["String"]>;
  provider_id?: Maybe<Scalars["String"]>;
  provider_type?: Maybe<Scalars["String"]>;
  refresh_token?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: "accounts_max_fields";
  access_token?: Maybe<Scalars["String"]>;
  access_token_expires?: Maybe<Scalars["timestamptz"]>;
  compound_id?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  provider_account_id?: Maybe<Scalars["String"]>;
  provider_id?: Maybe<Scalars["String"]>;
  provider_type?: Maybe<Scalars["String"]>;
  refresh_token?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: "accounts_min_fields";
  access_token?: Maybe<Scalars["String"]>;
  access_token_expires?: Maybe<Scalars["timestamptz"]>;
  compound_id?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  provider_account_id?: Maybe<Scalars["String"]>;
  provider_id?: Maybe<Scalars["String"]>;
  provider_type?: Maybe<Scalars["String"]>;
  refresh_token?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: "accounts_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>;
};

/** on conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns?: Array<Accounts_Update_Column>;
  where?: Maybe<Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "accounts". */
export type Accounts_Order_By = {
  access_token?: Maybe<Order_By>;
  access_token_expires?: Maybe<Order_By>;
  compound_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  provider_account_id?: Maybe<Order_By>;
  provider_id?: Maybe<Order_By>;
  provider_type?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: accounts */
export type Accounts_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  AccessToken = "access_token",
  /** column name */
  AccessTokenExpires = "access_token_expires",
  /** column name */
  CompoundId = "compound_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  ProviderAccountId = "provider_account_id",
  /** column name */
  ProviderId = "provider_id",
  /** column name */
  ProviderType = "provider_type",
  /** column name */
  RefreshToken = "refresh_token",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  access_token?: Maybe<Scalars["String"]>;
  access_token_expires?: Maybe<Scalars["timestamptz"]>;
  compound_id?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  provider_account_id?: Maybe<Scalars["String"]>;
  provider_id?: Maybe<Scalars["String"]>;
  provider_type?: Maybe<Scalars["String"]>;
  refresh_token?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  AccessToken = "access_token",
  /** column name */
  AccessTokenExpires = "access_token_expires",
  /** column name */
  CompoundId = "compound_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  ProviderAccountId = "provider_account_id",
  /** column name */
  ProviderId = "provider_id",
  /** column name */
  ProviderType = "provider_type",
  /** column name */
  RefreshToken = "refresh_token",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** columns and relationships of "games" */
export type Games = {
  __typename?: "games";
  bgg_id: Scalars["Int"];
  created_at: Scalars["timestamptz"];
  description?: Maybe<Scalars["String"]>;
  id: Scalars["uuid"];
  image?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  updated_at: Scalars["timestamptz"];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** aggregated selection of "games" */
export type Games_Aggregate = {
  __typename?: "games_aggregate";
  aggregate?: Maybe<Games_Aggregate_Fields>;
  nodes: Array<Games>;
};

/** aggregate fields of "games" */
export type Games_Aggregate_Fields = {
  __typename?: "games_aggregate_fields";
  avg?: Maybe<Games_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Games_Max_Fields>;
  min?: Maybe<Games_Min_Fields>;
  stddev?: Maybe<Games_Stddev_Fields>;
  stddev_pop?: Maybe<Games_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Games_Stddev_Samp_Fields>;
  sum?: Maybe<Games_Sum_Fields>;
  var_pop?: Maybe<Games_Var_Pop_Fields>;
  var_samp?: Maybe<Games_Var_Samp_Fields>;
  variance?: Maybe<Games_Variance_Fields>;
};

/** aggregate fields of "games" */
export type Games_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Games_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "games" */
export type Games_Aggregate_Order_By = {
  avg?: Maybe<Games_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Games_Max_Order_By>;
  min?: Maybe<Games_Min_Order_By>;
  stddev?: Maybe<Games_Stddev_Order_By>;
  stddev_pop?: Maybe<Games_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Games_Stddev_Samp_Order_By>;
  sum?: Maybe<Games_Sum_Order_By>;
  var_pop?: Maybe<Games_Var_Pop_Order_By>;
  var_samp?: Maybe<Games_Var_Samp_Order_By>;
  variance?: Maybe<Games_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "games" */
export type Games_Arr_Rel_Insert_Input = {
  data: Array<Games_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Games_On_Conflict>;
};

/** aggregate avg on columns */
export type Games_Avg_Fields = {
  __typename?: "games_avg_fields";
  bgg_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "games" */
export type Games_Avg_Order_By = {
  bgg_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "games". All fields are combined with a logical 'AND'. */
export type Games_Bool_Exp = {
  _and?: Maybe<Array<Games_Bool_Exp>>;
  _not?: Maybe<Games_Bool_Exp>;
  _or?: Maybe<Array<Games_Bool_Exp>>;
  bgg_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "games" */
export enum Games_Constraint {
  /** unique or primary key constraint */
  FeedsPkey = "feeds_pkey",
  /** unique or primary key constraint */
  GamesBggIdKey = "games_bgg_id_key",
}

/** input type for incrementing numeric columns in table "games" */
export type Games_Inc_Input = {
  bgg_id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "games" */
export type Games_Insert_Input = {
  bgg_id?: Maybe<Scalars["Int"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type Games_Max_Fields = {
  __typename?: "games_max_fields";
  bgg_id?: Maybe<Scalars["Int"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "games" */
export type Games_Max_Order_By = {
  bgg_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Games_Min_Fields = {
  __typename?: "games_min_fields";
  bgg_id?: Maybe<Scalars["Int"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "games" */
export type Games_Min_Order_By = {
  bgg_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "games" */
export type Games_Mutation_Response = {
  __typename?: "games_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Games>;
};

/** on conflict condition type for table "games" */
export type Games_On_Conflict = {
  constraint: Games_Constraint;
  update_columns?: Array<Games_Update_Column>;
  where?: Maybe<Games_Bool_Exp>;
};

/** Ordering options when selecting data from "games". */
export type Games_Order_By = {
  bgg_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: games */
export type Games_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "games" */
export enum Games_Select_Column {
  /** column name */
  BggId = "bgg_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  Name = "name",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "games" */
export type Games_Set_Input = {
  bgg_id?: Maybe<Scalars["Int"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** aggregate stddev on columns */
export type Games_Stddev_Fields = {
  __typename?: "games_stddev_fields";
  bgg_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "games" */
export type Games_Stddev_Order_By = {
  bgg_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Games_Stddev_Pop_Fields = {
  __typename?: "games_stddev_pop_fields";
  bgg_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "games" */
export type Games_Stddev_Pop_Order_By = {
  bgg_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Games_Stddev_Samp_Fields = {
  __typename?: "games_stddev_samp_fields";
  bgg_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "games" */
export type Games_Stddev_Samp_Order_By = {
  bgg_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Games_Sum_Fields = {
  __typename?: "games_sum_fields";
  bgg_id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "games" */
export type Games_Sum_Order_By = {
  bgg_id?: Maybe<Order_By>;
};

/** update columns of table "games" */
export enum Games_Update_Column {
  /** column name */
  BggId = "bgg_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  Name = "name",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** aggregate var_pop on columns */
export type Games_Var_Pop_Fields = {
  __typename?: "games_var_pop_fields";
  bgg_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "games" */
export type Games_Var_Pop_Order_By = {
  bgg_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Games_Var_Samp_Fields = {
  __typename?: "games_var_samp_fields";
  bgg_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "games" */
export type Games_Var_Samp_Order_By = {
  bgg_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Games_Variance_Fields = {
  __typename?: "games_variance_fields";
  bgg_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "games" */
export type Games_Variance_Order_By = {
  bgg_id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "games" */
  delete_games?: Maybe<Games_Mutation_Response>;
  /** delete single row from the table: "games" */
  delete_games_by_pk?: Maybe<Games>;
  /** delete data from the table: "sessions" */
  delete_sessions?: Maybe<Sessions_Mutation_Response>;
  /** delete single row from the table: "sessions" */
  delete_sessions_by_pk?: Maybe<Sessions>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "verification_requests" */
  delete_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** delete single row from the table: "verification_requests" */
  delete_verification_requests_by_pk?: Maybe<Verification_Requests>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "games" */
  insert_games?: Maybe<Games_Mutation_Response>;
  /** insert a single row into the table: "games" */
  insert_games_one?: Maybe<Games>;
  /** insert data into the table: "sessions" */
  insert_sessions?: Maybe<Sessions_Mutation_Response>;
  /** insert a single row into the table: "sessions" */
  insert_sessions_one?: Maybe<Sessions>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "verification_requests" */
  insert_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** insert a single row into the table: "verification_requests" */
  insert_verification_requests_one?: Maybe<Verification_Requests>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update data of the table: "games" */
  update_games?: Maybe<Games_Mutation_Response>;
  /** update single row of the table: "games" */
  update_games_by_pk?: Maybe<Games>;
  /** update data of the table: "sessions" */
  update_sessions?: Maybe<Sessions_Mutation_Response>;
  /** update single row of the table: "sessions" */
  update_sessions_by_pk?: Maybe<Sessions>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "verification_requests" */
  update_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** update single row of the table: "verification_requests" */
  update_verification_requests_by_pk?: Maybe<Verification_Requests>;
};

/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_GamesArgs = {
  where: Games_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Games_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_SessionsArgs = {
  where: Sessions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Sessions_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_Verification_RequestsArgs = {
  where: Verification_Requests_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Verification_Requests_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_GamesArgs = {
  objects: Array<Games_Insert_Input>;
  on_conflict?: Maybe<Games_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Games_OneArgs = {
  object: Games_Insert_Input;
  on_conflict?: Maybe<Games_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_SessionsArgs = {
  objects: Array<Sessions_Insert_Input>;
  on_conflict?: Maybe<Sessions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Sessions_OneArgs = {
  object: Sessions_Insert_Input;
  on_conflict?: Maybe<Sessions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Verification_RequestsArgs = {
  objects: Array<Verification_Requests_Insert_Input>;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Verification_Requests_OneArgs = {
  object: Verification_Requests_Insert_Input;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _set?: Maybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _set?: Maybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_GamesArgs = {
  _inc?: Maybe<Games_Inc_Input>;
  _set?: Maybe<Games_Set_Input>;
  where: Games_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Games_By_PkArgs = {
  _inc?: Maybe<Games_Inc_Input>;
  _set?: Maybe<Games_Set_Input>;
  pk_columns: Games_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_SessionsArgs = {
  _inc?: Maybe<Sessions_Inc_Input>;
  _set?: Maybe<Sessions_Set_Input>;
  where: Sessions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Sessions_By_PkArgs = {
  _inc?: Maybe<Sessions_Inc_Input>;
  _set?: Maybe<Sessions_Set_Input>;
  pk_columns: Sessions_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Verification_RequestsArgs = {
  _set?: Maybe<Verification_Requests_Set_Input>;
  where: Verification_Requests_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Verification_Requests_By_PkArgs = {
  _set?: Maybe<Verification_Requests_Set_Input>;
  pk_columns: Verification_Requests_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "games" */
  games: Array<Games>;
  /** An aggregate relationship */
  games_aggregate: Games_Aggregate;
  /** fetch data from the table: "games" using primary key columns */
  games_by_pk?: Maybe<Games>;
  /** fetch data from the table: "sessions" */
  sessions: Array<Sessions>;
  /** fetch aggregated fields from the table: "sessions" */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "verification_requests" */
  verification_requests: Array<Verification_Requests>;
  /** fetch aggregated fields from the table: "verification_requests" */
  verification_requests_aggregate: Verification_Requests_Aggregate;
  /** fetch data from the table: "verification_requests" using primary key columns */
  verification_requests_by_pk?: Maybe<Verification_Requests>;
};

export type Query_RootAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

export type Query_RootAccounts_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootGamesArgs = {
  distinct_on?: Maybe<Array<Games_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Games_Order_By>>;
  where?: Maybe<Games_Bool_Exp>;
};

export type Query_RootGames_AggregateArgs = {
  distinct_on?: Maybe<Array<Games_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Games_Order_By>>;
  where?: Maybe<Games_Bool_Exp>;
};

export type Query_RootGames_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootSessionsArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};

export type Query_RootSessions_AggregateArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};

export type Query_RootSessions_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootVerification_RequestsArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

export type Query_RootVerification_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

export type Query_RootVerification_Requests_By_PkArgs = {
  id: Scalars["uuid"];
};

/** columns and relationships of "sessions" */
export type Sessions = {
  __typename?: "sessions";
  access_token: Scalars["String"];
  created_at: Scalars["timestamptz"];
  expires: Scalars["timestamptz"];
  id: Scalars["uuid"];
  session_token: Scalars["String"];
  updated_at: Scalars["timestamptz"];
  user_id: Scalars["Int"];
};

/** aggregated selection of "sessions" */
export type Sessions_Aggregate = {
  __typename?: "sessions_aggregate";
  aggregate?: Maybe<Sessions_Aggregate_Fields>;
  nodes: Array<Sessions>;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_Fields = {
  __typename?: "sessions_aggregate_fields";
  avg?: Maybe<Sessions_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Sessions_Max_Fields>;
  min?: Maybe<Sessions_Min_Fields>;
  stddev?: Maybe<Sessions_Stddev_Fields>;
  stddev_pop?: Maybe<Sessions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sessions_Stddev_Samp_Fields>;
  sum?: Maybe<Sessions_Sum_Fields>;
  var_pop?: Maybe<Sessions_Var_Pop_Fields>;
  var_samp?: Maybe<Sessions_Var_Samp_Fields>;
  variance?: Maybe<Sessions_Variance_Fields>;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sessions_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Sessions_Avg_Fields = {
  __typename?: "sessions_avg_fields";
  user_id?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export type Sessions_Bool_Exp = {
  _and?: Maybe<Array<Sessions_Bool_Exp>>;
  _not?: Maybe<Sessions_Bool_Exp>;
  _or?: Maybe<Array<Sessions_Bool_Exp>>;
  access_token?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expires?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  session_token?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "sessions" */
export enum Sessions_Constraint {
  /** unique or primary key constraint */
  SessionsPkey = "sessions_pkey",
}

/** input type for incrementing numeric columns in table "sessions" */
export type Sessions_Inc_Input = {
  user_id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "sessions" */
export type Sessions_Insert_Input = {
  access_token?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  expires?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  session_token?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Sessions_Max_Fields = {
  __typename?: "sessions_max_fields";
  access_token?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  expires?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  session_token?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["Int"]>;
};

/** aggregate min on columns */
export type Sessions_Min_Fields = {
  __typename?: "sessions_min_fields";
  access_token?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  expires?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  session_token?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["Int"]>;
};

/** response of any mutation on the table "sessions" */
export type Sessions_Mutation_Response = {
  __typename?: "sessions_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Sessions>;
};

/** on conflict condition type for table "sessions" */
export type Sessions_On_Conflict = {
  constraint: Sessions_Constraint;
  update_columns?: Array<Sessions_Update_Column>;
  where?: Maybe<Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "sessions". */
export type Sessions_Order_By = {
  access_token?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  session_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: sessions */
export type Sessions_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "sessions" */
export enum Sessions_Select_Column {
  /** column name */
  AccessToken = "access_token",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Expires = "expires",
  /** column name */
  Id = "id",
  /** column name */
  SessionToken = "session_token",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "sessions" */
export type Sessions_Set_Input = {
  access_token?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  expires?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  session_token?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Sessions_Stddev_Fields = {
  __typename?: "sessions_stddev_fields";
  user_id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Sessions_Stddev_Pop_Fields = {
  __typename?: "sessions_stddev_pop_fields";
  user_id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Sessions_Stddev_Samp_Fields = {
  __typename?: "sessions_stddev_samp_fields";
  user_id?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Sessions_Sum_Fields = {
  __typename?: "sessions_sum_fields";
  user_id?: Maybe<Scalars["Int"]>;
};

/** update columns of table "sessions" */
export enum Sessions_Update_Column {
  /** column name */
  AccessToken = "access_token",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Expires = "expires",
  /** column name */
  Id = "id",
  /** column name */
  SessionToken = "session_token",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** aggregate var_pop on columns */
export type Sessions_Var_Pop_Fields = {
  __typename?: "sessions_var_pop_fields";
  user_id?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Sessions_Var_Samp_Fields = {
  __typename?: "sessions_var_samp_fields";
  user_id?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Sessions_Variance_Fields = {
  __typename?: "sessions_variance_fields";
  user_id?: Maybe<Scalars["Float"]>;
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "games" */
  games: Array<Games>;
  /** An aggregate relationship */
  games_aggregate: Games_Aggregate;
  /** fetch data from the table: "games" using primary key columns */
  games_by_pk?: Maybe<Games>;
  /** fetch data from the table: "sessions" */
  sessions: Array<Sessions>;
  /** fetch aggregated fields from the table: "sessions" */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "verification_requests" */
  verification_requests: Array<Verification_Requests>;
  /** fetch aggregated fields from the table: "verification_requests" */
  verification_requests_aggregate: Verification_Requests_Aggregate;
  /** fetch data from the table: "verification_requests" using primary key columns */
  verification_requests_by_pk?: Maybe<Verification_Requests>;
};

export type Subscription_RootAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};

export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootGamesArgs = {
  distinct_on?: Maybe<Array<Games_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Games_Order_By>>;
  where?: Maybe<Games_Bool_Exp>;
};

export type Subscription_RootGames_AggregateArgs = {
  distinct_on?: Maybe<Array<Games_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Games_Order_By>>;
  where?: Maybe<Games_Bool_Exp>;
};

export type Subscription_RootGames_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootSessionsArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};

export type Subscription_RootSessions_AggregateArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};

export type Subscription_RootSessions_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootVerification_RequestsArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

export type Subscription_RootVerification_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

export type Subscription_RootVerification_Requests_By_PkArgs = {
  id: Scalars["uuid"];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars["timestamptz"]>;
  _gt?: Maybe<Scalars["timestamptz"]>;
  _gte?: Maybe<Scalars["timestamptz"]>;
  _in?: Maybe<Array<Scalars["timestamptz"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamptz"]>;
  _lte?: Maybe<Scalars["timestamptz"]>;
  _neq?: Maybe<Scalars["timestamptz"]>;
  _nin?: Maybe<Array<Scalars["timestamptz"]>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: "users";
  created_at: Scalars["timestamptz"];
  email: Scalars["String"];
  email_verified?: Maybe<Scalars["timestamptz"]>;
  /** fetch data from the table: "games" */
  games: Array<Games>;
  /** An aggregate relationship */
  games_aggregate: Games_Aggregate;
  id: Scalars["uuid"];
  image?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at: Scalars["timestamptz"];
};

/** columns and relationships of "users" */
export type UsersGamesArgs = {
  distinct_on?: Maybe<Array<Games_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Games_Order_By>>;
  where?: Maybe<Games_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersGames_AggregateArgs = {
  distinct_on?: Maybe<Array<Games_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Games_Order_By>>;
  where?: Maybe<Games_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: "users_aggregate";
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: "users_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  email_verified?: Maybe<Timestamptz_Comparison_Exp>;
  games?: Maybe<Games_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = "users_pkey",
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  email_verified?: Maybe<Scalars["timestamptz"]>;
  games?: Maybe<Games_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: "users_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  email_verified?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: "users_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  email_verified?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: "users_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_verified?: Maybe<Order_By>;
  games_aggregate?: Maybe<Games_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Email = "email",
  /** column name */
  EmailVerified = "email_verified",
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  Name = "name",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  email_verified?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Email = "email",
  /** column name */
  EmailVerified = "email_verified",
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  Name = "name",
  /** column name */
  UpdatedAt = "updated_at",
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars["uuid"]>;
  _gt?: Maybe<Scalars["uuid"]>;
  _gte?: Maybe<Scalars["uuid"]>;
  _in?: Maybe<Array<Scalars["uuid"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["uuid"]>;
  _lte?: Maybe<Scalars["uuid"]>;
  _neq?: Maybe<Scalars["uuid"]>;
  _nin?: Maybe<Array<Scalars["uuid"]>>;
};

/** columns and relationships of "verification_requests" */
export type Verification_Requests = {
  __typename?: "verification_requests";
  created_at: Scalars["timestamptz"];
  expires: Scalars["timestamptz"];
  id: Scalars["uuid"];
  identifier: Scalars["String"];
  token: Scalars["String"];
  updated_at: Scalars["timestamptz"];
};

/** aggregated selection of "verification_requests" */
export type Verification_Requests_Aggregate = {
  __typename?: "verification_requests_aggregate";
  aggregate?: Maybe<Verification_Requests_Aggregate_Fields>;
  nodes: Array<Verification_Requests>;
};

/** aggregate fields of "verification_requests" */
export type Verification_Requests_Aggregate_Fields = {
  __typename?: "verification_requests_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Verification_Requests_Max_Fields>;
  min?: Maybe<Verification_Requests_Min_Fields>;
};

/** aggregate fields of "verification_requests" */
export type Verification_Requests_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Verification_Requests_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "verification_requests". All fields are combined with a logical 'AND'. */
export type Verification_Requests_Bool_Exp = {
  _and?: Maybe<Array<Verification_Requests_Bool_Exp>>;
  _not?: Maybe<Verification_Requests_Bool_Exp>;
  _or?: Maybe<Array<Verification_Requests_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expires?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  identifier?: Maybe<String_Comparison_Exp>;
  token?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "verification_requests" */
export enum Verification_Requests_Constraint {
  /** unique or primary key constraint */
  VerificationRequestsPkey = "verification_requests_pkey",
}

/** input type for inserting data into table "verification_requests" */
export type Verification_Requests_Insert_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  expires?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  identifier?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Verification_Requests_Max_Fields = {
  __typename?: "verification_requests_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  expires?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  identifier?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate min on columns */
export type Verification_Requests_Min_Fields = {
  __typename?: "verification_requests_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  expires?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  identifier?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** response of any mutation on the table "verification_requests" */
export type Verification_Requests_Mutation_Response = {
  __typename?: "verification_requests_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Verification_Requests>;
};

/** on conflict condition type for table "verification_requests" */
export type Verification_Requests_On_Conflict = {
  constraint: Verification_Requests_Constraint;
  update_columns?: Array<Verification_Requests_Update_Column>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

/** Ordering options when selecting data from "verification_requests". */
export type Verification_Requests_Order_By = {
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  identifier?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: verification_requests */
export type Verification_Requests_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "verification_requests" */
export enum Verification_Requests_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Expires = "expires",
  /** column name */
  Id = "id",
  /** column name */
  Identifier = "identifier",
  /** column name */
  Token = "token",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "verification_requests" */
export type Verification_Requests_Set_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  expires?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  identifier?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** update columns of table "verification_requests" */
export enum Verification_Requests_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Expires = "expires",
  /** column name */
  Id = "id",
  /** column name */
  Identifier = "identifier",
  /** column name */
  Token = "token",
  /** column name */
  UpdatedAt = "updated_at",
}

export type InsertGameMutationVariables = Exact<{
  user_id: Scalars["uuid"];
  name: Scalars["String"];
  bgg_id: Scalars["Int"];
  description?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["String"]>;
}>;

export type InsertGameMutation = {
  __typename?: "mutation_root";
  insert_games_one?: Maybe<{ __typename?: "games"; bgg_id: number }>;
};

export type UpdateUserMutationVariables = Exact<{
  userId: Scalars["uuid"];
  name?: Maybe<Scalars["String"]>;
}>;

export type UpdateUserMutation = {
  __typename?: "mutation_root";
  update_users?: Maybe<{
    __typename?: "users_mutation_response";
    returning: Array<{ __typename?: "users"; id: any; name?: Maybe<string> }>;
  }>;
};

export type FetchUserQueryVariables = Exact<{
  userId: Scalars["uuid"];
}>;

export type FetchUserQuery = {
  __typename?: "query_root";
  users_by_pk?: Maybe<{ __typename?: "users"; id: any; name?: Maybe<string> }>;
};

export type FetchGamesSubscriptionVariables = Exact<{ [key: string]: never }>;

export type FetchGamesSubscription = {
  __typename?: "subscription_root";
  games: Array<{
    __typename?: "games";
    id: any;
    created_at: string;
    name: string;
    image?: Maybe<string>;
    bgg_id: number;
    description?: Maybe<string>;
    user?: Maybe<{
      __typename?: "users";
      id: any;
      name?: Maybe<string>;
      image?: Maybe<string>;
    }>;
  }>;
};

export const InsertGameDocument = gql`
  mutation insertGame(
    $user_id: uuid!
    $name: String!
    $bgg_id: Int!
    $description: String
    $image: String
  ) {
    insert_games_one(
      object: {
        user_id: $user_id
        name: $name
        bgg_id: $bgg_id
        description: $description
        image: $image
      }
    ) {
      bgg_id
    }
  }
`;
export type InsertGameMutationFn = Apollo.MutationFunction<
  InsertGameMutation,
  InsertGameMutationVariables
>;
export type InsertGameComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    InsertGameMutation,
    InsertGameMutationVariables
  >,
  "mutation"
>;

export const InsertGameComponent = (props: InsertGameComponentProps) => (
  <ApolloReactComponents.Mutation<
    InsertGameMutation,
    InsertGameMutationVariables
  >
    mutation={InsertGameDocument}
    {...props}
  />
);

export type InsertGameProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    InsertGameMutation,
    InsertGameMutationVariables
  >;
} & TChildProps;
export function withInsertGame<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    InsertGameMutation,
    InsertGameMutationVariables,
    InsertGameProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    InsertGameMutation,
    InsertGameMutationVariables,
    InsertGameProps<TChildProps, TDataName>
  >(InsertGameDocument, {
    alias: "insertGame",
    ...operationOptions,
  });
}

/**
 * __useInsertGameMutation__
 *
 * To run a mutation, you first call `useInsertGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertGameMutation, { data, loading, error }] = useInsertGameMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      name: // value for 'name'
 *      bgg_id: // value for 'bgg_id'
 *      description: // value for 'description'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useInsertGameMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertGameMutation,
    InsertGameMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InsertGameMutation, InsertGameMutationVariables>(
    InsertGameDocument,
    options
  );
}
export type InsertGameMutationHookResult = ReturnType<
  typeof useInsertGameMutation
>;
export type InsertGameMutationResult =
  Apollo.MutationResult<InsertGameMutation>;
export type InsertGameMutationOptions = Apollo.BaseMutationOptions<
  InsertGameMutation,
  InsertGameMutationVariables
>;
export const UpdateUserDocument = gql`
  mutation updateUser($userId: uuid!, $name: String) {
    update_users(where: { id: { _eq: $userId } }, _set: { name: $name }) {
      returning {
        id
        name
      }
    }
  }
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export type UpdateUserComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >,
  "mutation"
>;

export const UpdateUserComponent = (props: UpdateUserComponentProps) => (
  <ApolloReactComponents.Mutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >
    mutation={UpdateUserDocument}
    {...props}
  />
);

export type UpdateUserProps<
  TChildProps = {},
  TDataName extends string = "mutate"
> = {
  [key in TDataName]: Apollo.MutationFunction<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >;
} & TChildProps;
export function withUpdateUser<
  TProps,
  TChildProps = {},
  TDataName extends string = "mutate"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateUserMutation,
    UpdateUserMutationVariables,
    UpdateUserProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateUserMutation,
    UpdateUserMutationVariables,
    UpdateUserProps<TChildProps, TDataName>
  >(UpdateUserDocument, {
    alias: "updateUser",
    ...operationOptions,
  });
}

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options
  );
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
export type UpdateUserMutationResult =
  Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export const FetchUserDocument = gql`
  query fetchUser($userId: uuid!) {
    users_by_pk(id: $userId) {
      id
      name
    }
  }
`;
export type FetchUserComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    FetchUserQuery,
    FetchUserQueryVariables
  >,
  "query"
> &
  ({ variables: FetchUserQueryVariables; skip?: boolean } | { skip: boolean });

export const FetchUserComponent = (props: FetchUserComponentProps) => (
  <ApolloReactComponents.Query<FetchUserQuery, FetchUserQueryVariables>
    query={FetchUserDocument}
    {...props}
  />
);

export type FetchUserProps<
  TChildProps = {},
  TDataName extends string = "data"
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    FetchUserQuery,
    FetchUserQueryVariables
  >;
} & TChildProps;
export function withFetchUser<
  TProps,
  TChildProps = {},
  TDataName extends string = "data"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    FetchUserQuery,
    FetchUserQueryVariables,
    FetchUserProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    FetchUserQuery,
    FetchUserQueryVariables,
    FetchUserProps<TChildProps, TDataName>
  >(FetchUserDocument, {
    alias: "fetchUser",
    ...operationOptions,
  });
}

/**
 * __useFetchUserQuery__
 *
 * To run a query within a React component, call `useFetchUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFetchUserQuery(
  baseOptions: Apollo.QueryHookOptions<FetchUserQuery, FetchUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchUserQuery, FetchUserQueryVariables>(
    FetchUserDocument,
    options
  );
}
export function useFetchUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchUserQuery,
    FetchUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchUserQuery, FetchUserQueryVariables>(
    FetchUserDocument,
    options
  );
}
export type FetchUserQueryHookResult = ReturnType<typeof useFetchUserQuery>;
export type FetchUserLazyQueryHookResult = ReturnType<
  typeof useFetchUserLazyQuery
>;
export type FetchUserQueryResult = Apollo.QueryResult<
  FetchUserQuery,
  FetchUserQueryVariables
>;
export const FetchGamesDocument = gql`
  subscription fetchGames {
    games(order_by: { created_at: desc }) {
      id
      created_at
      name
      image
      bgg_id
      description
      user {
        id
        name
        image
      }
    }
  }
`;
export type FetchGamesComponentProps = Omit<
  ApolloReactComponents.SubscriptionComponentOptions<
    FetchGamesSubscription,
    FetchGamesSubscriptionVariables
  >,
  "subscription"
>;

export const FetchGamesComponent = (props: FetchGamesComponentProps) => (
  <ApolloReactComponents.Subscription<
    FetchGamesSubscription,
    FetchGamesSubscriptionVariables
  >
    subscription={FetchGamesDocument}
    {...props}
  />
);

export type FetchGamesProps<
  TChildProps = {},
  TDataName extends string = "data"
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    FetchGamesSubscription,
    FetchGamesSubscriptionVariables
  >;
} & TChildProps;
export function withFetchGames<
  TProps,
  TChildProps = {},
  TDataName extends string = "data"
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    FetchGamesSubscription,
    FetchGamesSubscriptionVariables,
    FetchGamesProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withSubscription<
    TProps,
    FetchGamesSubscription,
    FetchGamesSubscriptionVariables,
    FetchGamesProps<TChildProps, TDataName>
  >(FetchGamesDocument, {
    alias: "fetchGames",
    ...operationOptions,
  });
}

/**
 * __useFetchGamesSubscription__
 *
 * To run a query within a React component, call `useFetchGamesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useFetchGamesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchGamesSubscription({
 *   variables: {
 *   },
 * });
 */
export function useFetchGamesSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    FetchGamesSubscription,
    FetchGamesSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    FetchGamesSubscription,
    FetchGamesSubscriptionVariables
  >(FetchGamesDocument, options);
}
export type FetchGamesSubscriptionHookResult = ReturnType<
  typeof useFetchGamesSubscription
>;
export type FetchGamesSubscriptionResult =
  Apollo.SubscriptionResult<FetchGamesSubscription>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Int_comparison_exp: Int_Comparison_Exp;
  String: ResolverTypeWrapper<Scalars["String"]>;
  String_comparison_exp: String_Comparison_Exp;
  accounts: ResolverTypeWrapper<Accounts>;
  accounts_aggregate: ResolverTypeWrapper<Accounts_Aggregate>;
  accounts_aggregate_fields: ResolverTypeWrapper<Accounts_Aggregate_Fields>;
  accounts_bool_exp: Accounts_Bool_Exp;
  accounts_constraint: Accounts_Constraint;
  accounts_insert_input: Accounts_Insert_Input;
  accounts_max_fields: ResolverTypeWrapper<Accounts_Max_Fields>;
  accounts_min_fields: ResolverTypeWrapper<Accounts_Min_Fields>;
  accounts_mutation_response: ResolverTypeWrapper<Accounts_Mutation_Response>;
  accounts_on_conflict: Accounts_On_Conflict;
  accounts_order_by: Accounts_Order_By;
  accounts_pk_columns_input: Accounts_Pk_Columns_Input;
  accounts_select_column: Accounts_Select_Column;
  accounts_set_input: Accounts_Set_Input;
  accounts_update_column: Accounts_Update_Column;
  games: ResolverTypeWrapper<Games>;
  games_aggregate: ResolverTypeWrapper<Games_Aggregate>;
  games_aggregate_fields: ResolverTypeWrapper<Games_Aggregate_Fields>;
  games_aggregate_order_by: Games_Aggregate_Order_By;
  games_arr_rel_insert_input: Games_Arr_Rel_Insert_Input;
  games_avg_fields: ResolverTypeWrapper<Games_Avg_Fields>;
  games_avg_order_by: Games_Avg_Order_By;
  games_bool_exp: Games_Bool_Exp;
  games_constraint: Games_Constraint;
  games_inc_input: Games_Inc_Input;
  games_insert_input: Games_Insert_Input;
  games_max_fields: ResolverTypeWrapper<Games_Max_Fields>;
  games_max_order_by: Games_Max_Order_By;
  games_min_fields: ResolverTypeWrapper<Games_Min_Fields>;
  games_min_order_by: Games_Min_Order_By;
  games_mutation_response: ResolverTypeWrapper<Games_Mutation_Response>;
  games_on_conflict: Games_On_Conflict;
  games_order_by: Games_Order_By;
  games_pk_columns_input: Games_Pk_Columns_Input;
  games_select_column: Games_Select_Column;
  games_set_input: Games_Set_Input;
  games_stddev_fields: ResolverTypeWrapper<Games_Stddev_Fields>;
  games_stddev_order_by: Games_Stddev_Order_By;
  games_stddev_pop_fields: ResolverTypeWrapper<Games_Stddev_Pop_Fields>;
  games_stddev_pop_order_by: Games_Stddev_Pop_Order_By;
  games_stddev_samp_fields: ResolverTypeWrapper<Games_Stddev_Samp_Fields>;
  games_stddev_samp_order_by: Games_Stddev_Samp_Order_By;
  games_sum_fields: ResolverTypeWrapper<Games_Sum_Fields>;
  games_sum_order_by: Games_Sum_Order_By;
  games_update_column: Games_Update_Column;
  games_var_pop_fields: ResolverTypeWrapper<Games_Var_Pop_Fields>;
  games_var_pop_order_by: Games_Var_Pop_Order_By;
  games_var_samp_fields: ResolverTypeWrapper<Games_Var_Samp_Fields>;
  games_var_samp_order_by: Games_Var_Samp_Order_By;
  games_variance_fields: ResolverTypeWrapper<Games_Variance_Fields>;
  games_variance_order_by: Games_Variance_Order_By;
  mutation_root: ResolverTypeWrapper<{}>;
  order_by: Order_By;
  query_root: ResolverTypeWrapper<{}>;
  sessions: ResolverTypeWrapper<Sessions>;
  sessions_aggregate: ResolverTypeWrapper<Sessions_Aggregate>;
  sessions_aggregate_fields: ResolverTypeWrapper<Sessions_Aggregate_Fields>;
  sessions_avg_fields: ResolverTypeWrapper<Sessions_Avg_Fields>;
  sessions_bool_exp: Sessions_Bool_Exp;
  sessions_constraint: Sessions_Constraint;
  sessions_inc_input: Sessions_Inc_Input;
  sessions_insert_input: Sessions_Insert_Input;
  sessions_max_fields: ResolverTypeWrapper<Sessions_Max_Fields>;
  sessions_min_fields: ResolverTypeWrapper<Sessions_Min_Fields>;
  sessions_mutation_response: ResolverTypeWrapper<Sessions_Mutation_Response>;
  sessions_on_conflict: Sessions_On_Conflict;
  sessions_order_by: Sessions_Order_By;
  sessions_pk_columns_input: Sessions_Pk_Columns_Input;
  sessions_select_column: Sessions_Select_Column;
  sessions_set_input: Sessions_Set_Input;
  sessions_stddev_fields: ResolverTypeWrapper<Sessions_Stddev_Fields>;
  sessions_stddev_pop_fields: ResolverTypeWrapper<Sessions_Stddev_Pop_Fields>;
  sessions_stddev_samp_fields: ResolverTypeWrapper<Sessions_Stddev_Samp_Fields>;
  sessions_sum_fields: ResolverTypeWrapper<Sessions_Sum_Fields>;
  sessions_update_column: Sessions_Update_Column;
  sessions_var_pop_fields: ResolverTypeWrapper<Sessions_Var_Pop_Fields>;
  sessions_var_samp_fields: ResolverTypeWrapper<Sessions_Var_Samp_Fields>;
  sessions_variance_fields: ResolverTypeWrapper<Sessions_Variance_Fields>;
  subscription_root: ResolverTypeWrapper<{}>;
  timestamptz: ResolverTypeWrapper<Scalars["timestamptz"]>;
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  users: ResolverTypeWrapper<Users>;
  users_aggregate: ResolverTypeWrapper<Users_Aggregate>;
  users_aggregate_fields: ResolverTypeWrapper<Users_Aggregate_Fields>;
  users_bool_exp: Users_Bool_Exp;
  users_constraint: Users_Constraint;
  users_insert_input: Users_Insert_Input;
  users_max_fields: ResolverTypeWrapper<Users_Max_Fields>;
  users_min_fields: ResolverTypeWrapper<Users_Min_Fields>;
  users_mutation_response: ResolverTypeWrapper<Users_Mutation_Response>;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_select_column: Users_Select_Column;
  users_set_input: Users_Set_Input;
  users_update_column: Users_Update_Column;
  uuid: ResolverTypeWrapper<Scalars["uuid"]>;
  uuid_comparison_exp: Uuid_Comparison_Exp;
  verification_requests: ResolverTypeWrapper<Verification_Requests>;
  verification_requests_aggregate: ResolverTypeWrapper<Verification_Requests_Aggregate>;
  verification_requests_aggregate_fields: ResolverTypeWrapper<Verification_Requests_Aggregate_Fields>;
  verification_requests_bool_exp: Verification_Requests_Bool_Exp;
  verification_requests_constraint: Verification_Requests_Constraint;
  verification_requests_insert_input: Verification_Requests_Insert_Input;
  verification_requests_max_fields: ResolverTypeWrapper<Verification_Requests_Max_Fields>;
  verification_requests_min_fields: ResolverTypeWrapper<Verification_Requests_Min_Fields>;
  verification_requests_mutation_response: ResolverTypeWrapper<Verification_Requests_Mutation_Response>;
  verification_requests_on_conflict: Verification_Requests_On_Conflict;
  verification_requests_order_by: Verification_Requests_Order_By;
  verification_requests_pk_columns_input: Verification_Requests_Pk_Columns_Input;
  verification_requests_select_column: Verification_Requests_Select_Column;
  verification_requests_set_input: Verification_Requests_Set_Input;
  verification_requests_update_column: Verification_Requests_Update_Column;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"];
  Float: Scalars["Float"];
  Int: Scalars["Int"];
  Int_comparison_exp: Int_Comparison_Exp;
  String: Scalars["String"];
  String_comparison_exp: String_Comparison_Exp;
  accounts: Accounts;
  accounts_aggregate: Accounts_Aggregate;
  accounts_aggregate_fields: Accounts_Aggregate_Fields;
  accounts_bool_exp: Accounts_Bool_Exp;
  accounts_insert_input: Accounts_Insert_Input;
  accounts_max_fields: Accounts_Max_Fields;
  accounts_min_fields: Accounts_Min_Fields;
  accounts_mutation_response: Accounts_Mutation_Response;
  accounts_on_conflict: Accounts_On_Conflict;
  accounts_order_by: Accounts_Order_By;
  accounts_pk_columns_input: Accounts_Pk_Columns_Input;
  accounts_set_input: Accounts_Set_Input;
  games: Games;
  games_aggregate: Games_Aggregate;
  games_aggregate_fields: Games_Aggregate_Fields;
  games_aggregate_order_by: Games_Aggregate_Order_By;
  games_arr_rel_insert_input: Games_Arr_Rel_Insert_Input;
  games_avg_fields: Games_Avg_Fields;
  games_avg_order_by: Games_Avg_Order_By;
  games_bool_exp: Games_Bool_Exp;
  games_inc_input: Games_Inc_Input;
  games_insert_input: Games_Insert_Input;
  games_max_fields: Games_Max_Fields;
  games_max_order_by: Games_Max_Order_By;
  games_min_fields: Games_Min_Fields;
  games_min_order_by: Games_Min_Order_By;
  games_mutation_response: Games_Mutation_Response;
  games_on_conflict: Games_On_Conflict;
  games_order_by: Games_Order_By;
  games_pk_columns_input: Games_Pk_Columns_Input;
  games_set_input: Games_Set_Input;
  games_stddev_fields: Games_Stddev_Fields;
  games_stddev_order_by: Games_Stddev_Order_By;
  games_stddev_pop_fields: Games_Stddev_Pop_Fields;
  games_stddev_pop_order_by: Games_Stddev_Pop_Order_By;
  games_stddev_samp_fields: Games_Stddev_Samp_Fields;
  games_stddev_samp_order_by: Games_Stddev_Samp_Order_By;
  games_sum_fields: Games_Sum_Fields;
  games_sum_order_by: Games_Sum_Order_By;
  games_var_pop_fields: Games_Var_Pop_Fields;
  games_var_pop_order_by: Games_Var_Pop_Order_By;
  games_var_samp_fields: Games_Var_Samp_Fields;
  games_var_samp_order_by: Games_Var_Samp_Order_By;
  games_variance_fields: Games_Variance_Fields;
  games_variance_order_by: Games_Variance_Order_By;
  mutation_root: {};
  query_root: {};
  sessions: Sessions;
  sessions_aggregate: Sessions_Aggregate;
  sessions_aggregate_fields: Sessions_Aggregate_Fields;
  sessions_avg_fields: Sessions_Avg_Fields;
  sessions_bool_exp: Sessions_Bool_Exp;
  sessions_inc_input: Sessions_Inc_Input;
  sessions_insert_input: Sessions_Insert_Input;
  sessions_max_fields: Sessions_Max_Fields;
  sessions_min_fields: Sessions_Min_Fields;
  sessions_mutation_response: Sessions_Mutation_Response;
  sessions_on_conflict: Sessions_On_Conflict;
  sessions_order_by: Sessions_Order_By;
  sessions_pk_columns_input: Sessions_Pk_Columns_Input;
  sessions_set_input: Sessions_Set_Input;
  sessions_stddev_fields: Sessions_Stddev_Fields;
  sessions_stddev_pop_fields: Sessions_Stddev_Pop_Fields;
  sessions_stddev_samp_fields: Sessions_Stddev_Samp_Fields;
  sessions_sum_fields: Sessions_Sum_Fields;
  sessions_var_pop_fields: Sessions_Var_Pop_Fields;
  sessions_var_samp_fields: Sessions_Var_Samp_Fields;
  sessions_variance_fields: Sessions_Variance_Fields;
  subscription_root: {};
  timestamptz: Scalars["timestamptz"];
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  users: Users;
  users_aggregate: Users_Aggregate;
  users_aggregate_fields: Users_Aggregate_Fields;
  users_bool_exp: Users_Bool_Exp;
  users_insert_input: Users_Insert_Input;
  users_max_fields: Users_Max_Fields;
  users_min_fields: Users_Min_Fields;
  users_mutation_response: Users_Mutation_Response;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_set_input: Users_Set_Input;
  uuid: Scalars["uuid"];
  uuid_comparison_exp: Uuid_Comparison_Exp;
  verification_requests: Verification_Requests;
  verification_requests_aggregate: Verification_Requests_Aggregate;
  verification_requests_aggregate_fields: Verification_Requests_Aggregate_Fields;
  verification_requests_bool_exp: Verification_Requests_Bool_Exp;
  verification_requests_insert_input: Verification_Requests_Insert_Input;
  verification_requests_max_fields: Verification_Requests_Max_Fields;
  verification_requests_min_fields: Verification_Requests_Min_Fields;
  verification_requests_mutation_response: Verification_Requests_Mutation_Response;
  verification_requests_on_conflict: Verification_Requests_On_Conflict;
  verification_requests_order_by: Verification_Requests_Order_By;
  verification_requests_pk_columns_input: Verification_Requests_Pk_Columns_Input;
  verification_requests_set_input: Verification_Requests_Set_Input;
};

export type CachedDirectiveArgs = {
  refresh?: Scalars["Boolean"];
  ttl?: Scalars["Int"];
};

export type CachedDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = CachedDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AccountsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["accounts"] = ResolversParentTypes["accounts"]
> = {
  access_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  access_token_expires?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  compound_id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  provider_account_id?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  provider_id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  provider_type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  refresh_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["accounts_aggregate"] = ResolversParentTypes["accounts_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["accounts_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["accounts"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["accounts_aggregate_fields"] = ResolversParentTypes["accounts_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    RequireFields<Accounts_Aggregate_FieldsCountArgs, never>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["accounts_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["accounts_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["accounts_max_fields"] = ResolversParentTypes["accounts_max_fields"]
> = {
  access_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  access_token_expires?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  compound_id?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  provider_account_id?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  provider_id?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  provider_type?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  refresh_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  user_id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["accounts_min_fields"] = ResolversParentTypes["accounts_min_fields"]
> = {
  access_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  access_token_expires?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  compound_id?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  provider_account_id?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  provider_id?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  provider_type?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  refresh_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  user_id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["accounts_mutation_response"] = ResolversParentTypes["accounts_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["accounts"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GamesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["games"] = ResolversParentTypes["games"]
> = {
  bgg_id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["users"]>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Games_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["games_aggregate"] = ResolversParentTypes["games_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["games_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["games"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Games_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["games_aggregate_fields"] = ResolversParentTypes["games_aggregate_fields"]
> = {
  avg?: Resolver<
    Maybe<ResolversTypes["games_avg_fields"]>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    RequireFields<Games_Aggregate_FieldsCountArgs, never>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["games_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["games_min_fields"]>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes["games_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["games_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["games_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes["games_sum_fields"]>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes["games_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes["games_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["games_variance_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Games_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["games_avg_fields"] = ResolversParentTypes["games_avg_fields"]
> = {
  bgg_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Games_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["games_max_fields"] = ResolversParentTypes["games_max_fields"]
> = {
  bgg_id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  user_id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Games_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["games_min_fields"] = ResolversParentTypes["games_min_fields"]
> = {
  bgg_id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  user_id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Games_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["games_mutation_response"] = ResolversParentTypes["games_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes["games"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Games_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["games_stddev_fields"] = ResolversParentTypes["games_stddev_fields"]
> = {
  bgg_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Games_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["games_stddev_pop_fields"] = ResolversParentTypes["games_stddev_pop_fields"]
> = {
  bgg_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Games_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["games_stddev_samp_fields"] = ResolversParentTypes["games_stddev_samp_fields"]
> = {
  bgg_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Games_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["games_sum_fields"] = ResolversParentTypes["games_sum_fields"]
> = {
  bgg_id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Games_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["games_var_pop_fields"] = ResolversParentTypes["games_var_pop_fields"]
> = {
  bgg_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Games_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["games_var_samp_fields"] = ResolversParentTypes["games_var_samp_fields"]
> = {
  bgg_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Games_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["games_variance_fields"] = ResolversParentTypes["games_variance_fields"]
> = {
  bgg_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mutation_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["mutation_root"] = ResolversParentTypes["mutation_root"]
> = {
  delete_accounts?: Resolver<
    Maybe<ResolversTypes["accounts_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_AccountsArgs, "where">
  >;
  delete_accounts_by_pk?: Resolver<
    Maybe<ResolversTypes["accounts"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Accounts_By_PkArgs, "id">
  >;
  delete_games?: Resolver<
    Maybe<ResolversTypes["games_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_GamesArgs, "where">
  >;
  delete_games_by_pk?: Resolver<
    Maybe<ResolversTypes["games"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Games_By_PkArgs, "id">
  >;
  delete_sessions?: Resolver<
    Maybe<ResolversTypes["sessions_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_SessionsArgs, "where">
  >;
  delete_sessions_by_pk?: Resolver<
    Maybe<ResolversTypes["sessions"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Sessions_By_PkArgs, "id">
  >;
  delete_users?: Resolver<
    Maybe<ResolversTypes["users_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_UsersArgs, "where">
  >;
  delete_users_by_pk?: Resolver<
    Maybe<ResolversTypes["users"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Users_By_PkArgs, "id">
  >;
  delete_verification_requests?: Resolver<
    Maybe<ResolversTypes["verification_requests_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Verification_RequestsArgs, "where">
  >;
  delete_verification_requests_by_pk?: Resolver<
    Maybe<ResolversTypes["verification_requests"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Verification_Requests_By_PkArgs, "id">
  >;
  insert_accounts?: Resolver<
    Maybe<ResolversTypes["accounts_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_AccountsArgs, "objects">
  >;
  insert_accounts_one?: Resolver<
    Maybe<ResolversTypes["accounts"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Accounts_OneArgs, "object">
  >;
  insert_games?: Resolver<
    Maybe<ResolversTypes["games_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_GamesArgs, "objects">
  >;
  insert_games_one?: Resolver<
    Maybe<ResolversTypes["games"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Games_OneArgs, "object">
  >;
  insert_sessions?: Resolver<
    Maybe<ResolversTypes["sessions_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_SessionsArgs, "objects">
  >;
  insert_sessions_one?: Resolver<
    Maybe<ResolversTypes["sessions"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Sessions_OneArgs, "object">
  >;
  insert_users?: Resolver<
    Maybe<ResolversTypes["users_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_UsersArgs, "objects">
  >;
  insert_users_one?: Resolver<
    Maybe<ResolversTypes["users"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Users_OneArgs, "object">
  >;
  insert_verification_requests?: Resolver<
    Maybe<ResolversTypes["verification_requests_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Verification_RequestsArgs, "objects">
  >;
  insert_verification_requests_one?: Resolver<
    Maybe<ResolversTypes["verification_requests"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Verification_Requests_OneArgs, "object">
  >;
  update_accounts?: Resolver<
    Maybe<ResolversTypes["accounts_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_AccountsArgs, "where">
  >;
  update_accounts_by_pk?: Resolver<
    Maybe<ResolversTypes["accounts"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Accounts_By_PkArgs, "pk_columns">
  >;
  update_games?: Resolver<
    Maybe<ResolversTypes["games_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_GamesArgs, "where">
  >;
  update_games_by_pk?: Resolver<
    Maybe<ResolversTypes["games"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Games_By_PkArgs, "pk_columns">
  >;
  update_sessions?: Resolver<
    Maybe<ResolversTypes["sessions_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_SessionsArgs, "where">
  >;
  update_sessions_by_pk?: Resolver<
    Maybe<ResolversTypes["sessions"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Sessions_By_PkArgs, "pk_columns">
  >;
  update_users?: Resolver<
    Maybe<ResolversTypes["users_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_UsersArgs, "where">
  >;
  update_users_by_pk?: Resolver<
    Maybe<ResolversTypes["users"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Users_By_PkArgs, "pk_columns">
  >;
  update_verification_requests?: Resolver<
    Maybe<ResolversTypes["verification_requests_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Verification_RequestsArgs, "where">
  >;
  update_verification_requests_by_pk?: Resolver<
    Maybe<ResolversTypes["verification_requests"]>,
    ParentType,
    ContextType,
    RequireFields<
      Mutation_RootUpdate_Verification_Requests_By_PkArgs,
      "pk_columns"
    >
  >;
};

export type Query_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["query_root"] = ResolversParentTypes["query_root"]
> = {
  accounts?: Resolver<
    Array<ResolversTypes["accounts"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootAccountsArgs, never>
  >;
  accounts_aggregate?: Resolver<
    ResolversTypes["accounts_aggregate"],
    ParentType,
    ContextType,
    RequireFields<Query_RootAccounts_AggregateArgs, never>
  >;
  accounts_by_pk?: Resolver<
    Maybe<ResolversTypes["accounts"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootAccounts_By_PkArgs, "id">
  >;
  games?: Resolver<
    Array<ResolversTypes["games"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootGamesArgs, never>
  >;
  games_aggregate?: Resolver<
    ResolversTypes["games_aggregate"],
    ParentType,
    ContextType,
    RequireFields<Query_RootGames_AggregateArgs, never>
  >;
  games_by_pk?: Resolver<
    Maybe<ResolversTypes["games"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootGames_By_PkArgs, "id">
  >;
  sessions?: Resolver<
    Array<ResolversTypes["sessions"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootSessionsArgs, never>
  >;
  sessions_aggregate?: Resolver<
    ResolversTypes["sessions_aggregate"],
    ParentType,
    ContextType,
    RequireFields<Query_RootSessions_AggregateArgs, never>
  >;
  sessions_by_pk?: Resolver<
    Maybe<ResolversTypes["sessions"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootSessions_By_PkArgs, "id">
  >;
  users?: Resolver<
    Array<ResolversTypes["users"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootUsersArgs, never>
  >;
  users_aggregate?: Resolver<
    ResolversTypes["users_aggregate"],
    ParentType,
    ContextType,
    RequireFields<Query_RootUsers_AggregateArgs, never>
  >;
  users_by_pk?: Resolver<
    Maybe<ResolversTypes["users"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootUsers_By_PkArgs, "id">
  >;
  verification_requests?: Resolver<
    Array<ResolversTypes["verification_requests"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootVerification_RequestsArgs, never>
  >;
  verification_requests_aggregate?: Resolver<
    ResolversTypes["verification_requests_aggregate"],
    ParentType,
    ContextType,
    RequireFields<Query_RootVerification_Requests_AggregateArgs, never>
  >;
  verification_requests_by_pk?: Resolver<
    Maybe<ResolversTypes["verification_requests"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootVerification_Requests_By_PkArgs, "id">
  >;
};

export type SessionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions"] = ResolversParentTypes["sessions"]
> = {
  access_token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  expires?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  session_token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_aggregate"] = ResolversParentTypes["sessions_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["sessions_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["sessions"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_aggregate_fields"] = ResolversParentTypes["sessions_aggregate_fields"]
> = {
  avg?: Resolver<
    Maybe<ResolversTypes["sessions_avg_fields"]>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    RequireFields<Sessions_Aggregate_FieldsCountArgs, never>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["sessions_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["sessions_min_fields"]>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes["sessions_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["sessions_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["sessions_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes["sessions_sum_fields"]>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes["sessions_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes["sessions_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["sessions_variance_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_avg_fields"] = ResolversParentTypes["sessions_avg_fields"]
> = {
  user_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_max_fields"] = ResolversParentTypes["sessions_max_fields"]
> = {
  access_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  expires?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  session_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  user_id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_min_fields"] = ResolversParentTypes["sessions_min_fields"]
> = {
  access_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  expires?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  session_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  user_id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_mutation_response"] = ResolversParentTypes["sessions_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["sessions"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_stddev_fields"] = ResolversParentTypes["sessions_stddev_fields"]
> = {
  user_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_stddev_pop_fields"] = ResolversParentTypes["sessions_stddev_pop_fields"]
> = {
  user_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_stddev_samp_fields"] = ResolversParentTypes["sessions_stddev_samp_fields"]
> = {
  user_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_sum_fields"] = ResolversParentTypes["sessions_sum_fields"]
> = {
  user_id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_var_pop_fields"] = ResolversParentTypes["sessions_var_pop_fields"]
> = {
  user_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_var_samp_fields"] = ResolversParentTypes["sessions_var_samp_fields"]
> = {
  user_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_variance_fields"] = ResolversParentTypes["sessions_variance_fields"]
> = {
  user_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["subscription_root"] = ResolversParentTypes["subscription_root"]
> = {
  accounts?: SubscriptionResolver<
    Array<ResolversTypes["accounts"]>,
    "accounts",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootAccountsArgs, never>
  >;
  accounts_aggregate?: SubscriptionResolver<
    ResolversTypes["accounts_aggregate"],
    "accounts_aggregate",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootAccounts_AggregateArgs, never>
  >;
  accounts_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["accounts"]>,
    "accounts_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootAccounts_By_PkArgs, "id">
  >;
  games?: SubscriptionResolver<
    Array<ResolversTypes["games"]>,
    "games",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootGamesArgs, never>
  >;
  games_aggregate?: SubscriptionResolver<
    ResolversTypes["games_aggregate"],
    "games_aggregate",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootGames_AggregateArgs, never>
  >;
  games_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["games"]>,
    "games_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootGames_By_PkArgs, "id">
  >;
  sessions?: SubscriptionResolver<
    Array<ResolversTypes["sessions"]>,
    "sessions",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootSessionsArgs, never>
  >;
  sessions_aggregate?: SubscriptionResolver<
    ResolversTypes["sessions_aggregate"],
    "sessions_aggregate",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootSessions_AggregateArgs, never>
  >;
  sessions_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["sessions"]>,
    "sessions_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootSessions_By_PkArgs, "id">
  >;
  users?: SubscriptionResolver<
    Array<ResolversTypes["users"]>,
    "users",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUsersArgs, never>
  >;
  users_aggregate?: SubscriptionResolver<
    ResolversTypes["users_aggregate"],
    "users_aggregate",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUsers_AggregateArgs, never>
  >;
  users_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["users"]>,
    "users_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUsers_By_PkArgs, "id">
  >;
  verification_requests?: SubscriptionResolver<
    Array<ResolversTypes["verification_requests"]>,
    "verification_requests",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootVerification_RequestsArgs, never>
  >;
  verification_requests_aggregate?: SubscriptionResolver<
    ResolversTypes["verification_requests_aggregate"],
    "verification_requests_aggregate",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootVerification_Requests_AggregateArgs, never>
  >;
  verification_requests_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["verification_requests"]>,
    "verification_requests_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootVerification_Requests_By_PkArgs, "id">
  >;
};

export interface TimestamptzScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["timestamptz"], any> {
  name: "timestamptz";
}

export type UsersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users"] = ResolversParentTypes["users"]
> = {
  created_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  email_verified?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  games?: Resolver<
    Array<ResolversTypes["games"]>,
    ParentType,
    ContextType,
    RequireFields<UsersGamesArgs, never>
  >;
  games_aggregate?: Resolver<
    ResolversTypes["games_aggregate"],
    ParentType,
    ContextType,
    RequireFields<UsersGames_AggregateArgs, never>
  >;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_aggregate"] = ResolversParentTypes["users_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["users_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["users"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_aggregate_fields"] = ResolversParentTypes["users_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    RequireFields<Users_Aggregate_FieldsCountArgs, never>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["users_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["users_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_max_fields"] = ResolversParentTypes["users_max_fields"]
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  email_verified?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_min_fields"] = ResolversParentTypes["users_min_fields"]
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  email_verified?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_mutation_response"] = ResolversParentTypes["users_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes["users"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UuidScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["uuid"], any> {
  name: "uuid";
}

export type Verification_RequestsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["verification_requests"] = ResolversParentTypes["verification_requests"]
> = {
  created_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  expires?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["verification_requests_aggregate"] = ResolversParentTypes["verification_requests_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["verification_requests_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes["verification_requests"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["verification_requests_aggregate_fields"] = ResolversParentTypes["verification_requests_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    RequireFields<Verification_Requests_Aggregate_FieldsCountArgs, never>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["verification_requests_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["verification_requests_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["verification_requests_max_fields"] = ResolversParentTypes["verification_requests_max_fields"]
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  expires?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  identifier?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  token?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["verification_requests_min_fields"] = ResolversParentTypes["verification_requests_min_fields"]
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  expires?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  identifier?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  token?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["verification_requests_mutation_response"] = ResolversParentTypes["verification_requests_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["verification_requests"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  accounts?: AccountsResolvers<ContextType>;
  accounts_aggregate?: Accounts_AggregateResolvers<ContextType>;
  accounts_aggregate_fields?: Accounts_Aggregate_FieldsResolvers<ContextType>;
  accounts_max_fields?: Accounts_Max_FieldsResolvers<ContextType>;
  accounts_min_fields?: Accounts_Min_FieldsResolvers<ContextType>;
  accounts_mutation_response?: Accounts_Mutation_ResponseResolvers<ContextType>;
  games?: GamesResolvers<ContextType>;
  games_aggregate?: Games_AggregateResolvers<ContextType>;
  games_aggregate_fields?: Games_Aggregate_FieldsResolvers<ContextType>;
  games_avg_fields?: Games_Avg_FieldsResolvers<ContextType>;
  games_max_fields?: Games_Max_FieldsResolvers<ContextType>;
  games_min_fields?: Games_Min_FieldsResolvers<ContextType>;
  games_mutation_response?: Games_Mutation_ResponseResolvers<ContextType>;
  games_stddev_fields?: Games_Stddev_FieldsResolvers<ContextType>;
  games_stddev_pop_fields?: Games_Stddev_Pop_FieldsResolvers<ContextType>;
  games_stddev_samp_fields?: Games_Stddev_Samp_FieldsResolvers<ContextType>;
  games_sum_fields?: Games_Sum_FieldsResolvers<ContextType>;
  games_var_pop_fields?: Games_Var_Pop_FieldsResolvers<ContextType>;
  games_var_samp_fields?: Games_Var_Samp_FieldsResolvers<ContextType>;
  games_variance_fields?: Games_Variance_FieldsResolvers<ContextType>;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
  sessions?: SessionsResolvers<ContextType>;
  sessions_aggregate?: Sessions_AggregateResolvers<ContextType>;
  sessions_aggregate_fields?: Sessions_Aggregate_FieldsResolvers<ContextType>;
  sessions_avg_fields?: Sessions_Avg_FieldsResolvers<ContextType>;
  sessions_max_fields?: Sessions_Max_FieldsResolvers<ContextType>;
  sessions_min_fields?: Sessions_Min_FieldsResolvers<ContextType>;
  sessions_mutation_response?: Sessions_Mutation_ResponseResolvers<ContextType>;
  sessions_stddev_fields?: Sessions_Stddev_FieldsResolvers<ContextType>;
  sessions_stddev_pop_fields?: Sessions_Stddev_Pop_FieldsResolvers<ContextType>;
  sessions_stddev_samp_fields?: Sessions_Stddev_Samp_FieldsResolvers<ContextType>;
  sessions_sum_fields?: Sessions_Sum_FieldsResolvers<ContextType>;
  sessions_var_pop_fields?: Sessions_Var_Pop_FieldsResolvers<ContextType>;
  sessions_var_samp_fields?: Sessions_Var_Samp_FieldsResolvers<ContextType>;
  sessions_variance_fields?: Sessions_Variance_FieldsResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  timestamptz?: GraphQLScalarType;
  users?: UsersResolvers<ContextType>;
  users_aggregate?: Users_AggregateResolvers<ContextType>;
  users_aggregate_fields?: Users_Aggregate_FieldsResolvers<ContextType>;
  users_max_fields?: Users_Max_FieldsResolvers<ContextType>;
  users_min_fields?: Users_Min_FieldsResolvers<ContextType>;
  users_mutation_response?: Users_Mutation_ResponseResolvers<ContextType>;
  uuid?: GraphQLScalarType;
  verification_requests?: Verification_RequestsResolvers<ContextType>;
  verification_requests_aggregate?: Verification_Requests_AggregateResolvers<ContextType>;
  verification_requests_aggregate_fields?: Verification_Requests_Aggregate_FieldsResolvers<ContextType>;
  verification_requests_max_fields?: Verification_Requests_Max_FieldsResolvers<ContextType>;
  verification_requests_min_fields?: Verification_Requests_Min_FieldsResolvers<ContextType>;
  verification_requests_mutation_response?: Verification_Requests_Mutation_ResponseResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  cached?: CachedDirectiveResolver<any, any, ContextType>;
};
