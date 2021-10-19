#!/usr/local/bin/bash

set -e
set -x

# push origin
git push origin master

# pull and reload on server
ssh $DSTREAM_USER@$DSTREAM_HOST 'cd /home/srv-dstream/dstream \
    && git pull \
    && sudo -u srv-dstream npm install \
    && systemctl restart dstream.service'
