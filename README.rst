*************************
Mopidy-MusicBox-Webclient
*************************

With Mopidy MusicBox Webclient, you can play your music on your computer (`Rapsberry Pi <http://www.raspberrypi.org/>`_) and remotely control it using your computer, tablet or phone.

This is a responsive webclient especially written for Mopidy, a music server. Responsive, so it works on desktop and mobile browsers. You can browse, search and play albums, artists, playlists, and it has cover art from Last.fm.

`Mopidy <http://www.mopidy.com/>`_ is a music server which can play music from Spotify, Google Music, SoundCloud, etc or from your hard drive. 

If you want to run Mopidy with this webclient on a Raspberry Pi, do yourself a favor and use my custom built SD-image: `Pi MusicBox <http://www.woutervanwijk.nl/pimusicbox/>`_.


Installation
============

Install by running::

    pip install Mopidy-Headspring-Web


Alternatively, clone the repository and run ``sudo python setup.py install`` from within the project directory. e.g. ::

    $ git clone https://github.com/bardoloi/Mopidy-Headspring-Web
    $ cd Mopidy-Headspring-Web
    $ sudo python setup.py install


Usage
=====

Point your (modern) browser at Mopidy-Headspring-Web running on your Mopidy server e.g. http://localhost:6680/headspring_web.


Project resources
=================

- `Source code <https://github.com/bardoloi/mopidy-headspring-web>`_
- `Issue tracker <https://github.com/bardoloi/mopidy-headspring-web/issues>`_


Changelog
=========

v0.1.0 (5-6-2015)
----------------
- Duplicated code from https://github.com/woutervanwijk/Mopidy-MusicBox-Webclient
- New instructions in the read me
