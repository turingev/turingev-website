### generate static site
FROM denoland/deno:alpine as builder

# chache lume builder for future builds
WORKDIR /app
ADD deno.json ./\
    deno.lock ./\
    build.ts ./
RUN deno cache build.ts

# build site
ADD . .
RUN deno task build



### build oak webserver with ony the files needed
FROM denoland/deno:alpine

WORKDIR /app/backend

## TODO: chache deps for future builds
# ADD ./backend/deno.json ./\
#     ./backend/deno.lock ./\
#     ./backend/import_map.json ./\
#     ./backend/server.ts ./
# RUN deno cache server.ts

# add files
ADD ./backend ./
RUN deno cache server.ts

COPY --from=builder /app/_site ../_site

EXPOSE 9000
CMD ["deno", "task", "start"]
