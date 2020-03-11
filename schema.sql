drop table if exists "grades";

create table "grades" (
  "gradeId"   serial,
  "name"      text    not null,
  "course"    text    not null,
  "grade"     integer not null,
  "createdAt" timestamptz(6) not null default now(),
  primary key ("gradeId")
);
