*************************
Mopidy-Headspring-Web
*************************

.. image:: https://img.shields.io/travis/HeadspringLabs/Mopidy-Headspring-Web/master.svg?style=flat
    :target: https://travis-ci.org/HeadspringLabs/Mopidy-Headspring-Web
    :alt: Travis-CI build status

.. image:: https://img.shields.io/coveralls/HeadspringLabs/Mopidy-Headspring-Web/master.svg?style=flat
   :target: https://coveralls.io/r/HeadspringLabs/Mopidy-Headspring-Web?branch=master
   :alt: Test coverage


We love the `Mopidy MusicBox Webclient <https://github.com/woutervanwijk/Mopidy-MusicBox-Webclient>`_ by `woutervanwijk <https://github.com/woutervanwijk/>`_, and use it all the time to play music in our office.

Our goal with this project is to make specific improvements to the UI that our users have asked for.

This is a responsive webclient especially written for Mopidy, a music server. Responsive, so it works on desktop and mobile browsers. You can browse, search and play albums, artists, playlists, and it has cover art from Last.fm.

`Mopidy <http://www.mopidy.com/>`_ is a music server which can play music from Spotify, Google Music, SoundCloud, etc or from your hard drive.


Installation
============

Run ``sudo python setup.py install`` from within the project directory. e.g. ::

    $ pip install Mopidy-Headspring-Web


Usage
=====

Point your (modern) browser at Mopidy-Headspring-Web running on your Mopidy server e.g. http://localhost:6680/headspring_web.


Project resources
=================

- `Source code <https://github.com/HeadspringLabs/mopidy-headspring-web>`_
- `Issue tracker <https://github.com/HeadspringLabs/mopidy-headspring-web/issues>`_


Changelog
=========

v0.1.0 (5-6-2015)
----------------
- Mirrorred the repo from https://github.com/woutervanwijk/Mopidy-MusicBox-Webclient
- New instructions in the read me
