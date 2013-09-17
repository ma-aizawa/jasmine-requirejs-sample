#! /usr/bin/env bash

if type npm >/dev/null 2>&1; then
  echo 'You already installed npm.'
else
  echo 'Please install npm!'
  exit 1
fi

echo 'If you would like to setup this tests.'
echo 'You must install [requirejs] and [jasmine-node] with sudo.'
read -p 'Would you install it? [Y/n]:' ANS

if [ "${ANS}" != 'y' -a "${ANS}" != 'Y' ] ; then
  echo 'Stop to setup'
  exit 1
fi
sudo npm install -g requirejs jasmine-node

