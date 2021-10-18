# dStream sirodoht fork

* simple access to your music collection from the web browser
* fast fuzzy search
* for semi-organized music collections
* sqlite database
* single active process (node)
* halfhearted hack

## Infrastructure

* music collection available on the server
* listens on port 3000
* consider not exposing it to the internet without some authentication in front

## Running

```sh
mkdir db
npm start
```

## Scanning music

Adds any music files in the music directory to the searchable database

1. log into the website
1. press h
1. click link "/scan to control music scanning"
1. click "Scan" and wait.. press refresh if you're impatient,
1. it's done with "Scan" appears again, go back, you're done.

## Using

1. press J or click text-box
1. search
1. press enter to play top result or add from results

### Add track to queue

1. press song-name / file name to add to queue
1. click row left of it to autoplay from there if song is last in queue.
1. click row right of it to remove currently playing song and play this instead.

### Remove track from queue

1. click on file name to remove a song from queue
1. pressing the "insert" key removes the current song from queue

### Misc

1. press the H key to show or hide the instructions

## License

MIT
