ULTIMATE GOAL:

1. Generate 10M records and load the data in less than 1 hour

- wrote seeding scripts for POSTgres and CouchDB
- learn promises to seed all tables at once; should I promisify my seeding functions?
- generate unique records for Postgres
- indexing my database
- write better queries
- include execution stats in my couchdb VIEWS 

2. Performance tuning and optimize my DBMS

- queries should execute in less than 50ms
- use the queries from your API
- ensure I'm querying by name and dish_id

3. deployment and devops
4. Stress testing my proxy

## ERRORS:

POSTGRES

1. ERROR: relation "listing" already exists
   - When I tried to load my schema, I got this error.
2. ERROR: column "betty" does not exist
   - I tried this when I was manually inserting data into db. It only works when I use single quotes.
3. ERROR: Build fails with JavaScript heap out of memory
   - I'm trying to write data to CSV for 1M rows of data, and I'm getting an error saying I'm out of memory
4. ERROR photos=# COPY photos ( photo_caption,photo_url,photo_upload_date) FROM '/Users/lillytang/Documents/airbnb-photogallery/db/PostGres/photoTable.csv';
   ERROR: missing data for column "photo_url"
   CONTEXT: COPY photos, line 1: "'Ive stayed in many air bnb homes & this is one of my favorites!','https://airbnbphotogallery.s3-us-..."

- When I was trying to copy data into db, I ran into this error.
- I fixed it by removing comma from the photo_caption because it was mistaking it for new rows of data

5. FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory

- too much memory used when creating 100 millions rows of my JSON objects
- solved it by allocating 6gb memory to node --max_old_space_size=6000 db/PostGres/seed.js
