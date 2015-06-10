from __future__ import unicode_literals

import os

from mopidy import ext

__version__ = '2.0.0'


class MusicBoxExtension(ext.Extension):
    dist_name = 'Mopidy-Headspring-Web'
    ext_name = 'headspring_web'
    version = __version__

    def setup(self, registry):
        registry.add('http:static', {
            'name': self.ext_name, 
            'path': os.path.join(os.path.dirname(__file__), 'static')
        })