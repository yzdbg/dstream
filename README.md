# dStream sirodoht fork

## Differences from [DusteDdk/dstream](https://github.com/DusteDdk/dstream)

* docker free

## Features

* simple access to your music collection from the web browser
* fast fuzzy search
* for semi-organized music collections
* sqlite database
* single active process (node)
* halfhearted hack
* pure vanilla js with old-school innerHTML mangling

## Infrastructure

* music collection available on the server
* listens on port 3000
* consider not exposing it to the internet without some authentication in front

## Setup

```sh
npm install
mkdir db  # this is for the music metadata
mkdir music  # this is for the music files / collection
npm start
```

## systemd

```sh
cp dstream.service /etc/systemd/system/
```

## Scanning music

Add music files from the /music directory to the searchable database

1. go to /scan
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

### Help

1. press the H key to show or hide the instructions

## License

MIT
