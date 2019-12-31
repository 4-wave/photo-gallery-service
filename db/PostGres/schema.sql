DROP DATABASE IF EXISTS photos;

CREATE DATABASE photos;

\c photos

CREATE TABLE host
(
    host_id serial PRIMARY KEY,
    host_name TEXT
);

CREATE TABLE listing
(
    listing_id serial PRIMARY KEY,
    region TEXT
);

CREATE TABLE photos
(
    photo_id serial PRIMARY KEY,
    photo_caption TEXT,
    photo_url TEXT,
    photo_upload_date TEXT,
    listing_id INT
);


CREATE INDEX photos_listing_id ON photos(listing_id)
