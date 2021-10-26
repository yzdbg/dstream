
<p align="center"><img width="100" src="favicon.svg" alt="Vue logo"></p>

<h2 align="center">dStream</h2>

Stream your music from anywhere.
![](dScreen.gif)
This project was inspired by and based on the original work by DusteDdk that can be found at [DusteDdk/dstream](https://github.com/DusteDdk/dstream). This project has thus used the same name in its respect.

## Features

* User friendly interface
* Improved UX
* Simple access to your music collection from the web browser
* Fast fuzzy search
* Sqlite database
* Single active process (node)
* Vuejs and Vuetify front-end
  

## Infrastructure

* Music collection available on the server
* Listens on port 3000
* Consider not exposing it to the internet without some authentication in front

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

## Environment

For loading environment variables for development
[direnv](https://github.com/direnv/direnv) is used.

## Scanning music

In order to add music to the database simply copy the files into the /music folder and press the scan button in the top right of the interface.

## Usage 
Left click any track to play immediately

### Add track to queue

Right click any track to add to queue.

### Remove track from queue

Right click the track in the queue panel

## License

MIT
