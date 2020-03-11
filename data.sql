truncate table "grades" restart identity;

insert into "grades" ("name", "course", "grade")
values ('Simon Peyton Jones', 'Haskell', 100),
       ('Barbara Liskov', 'CLU', 100),
       ('Rasmus Lerdorf', 'PHP', 100);
