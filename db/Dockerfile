FROM mongo

RUN mkdir -p /src/app

WORKDIR /src/app

COPY seed.js /src/app

CMD [ "npm", "run", "seed" ]

#I can try running this on its own and see if seeding the file works.
#since this would build an image for seeding, I would first build and then 
# run or spin it up, and it shoudld run these instructions

# In order to test this I would need to need to get pull mongo:latest and the
# and then spin that container up
# and then tie in the seed script to this network
# they have to both be in the bringe network