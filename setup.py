from __future__ import unicode_literals

import re

from setuptools import find_packages, setup


def get_version(filename):
    content = open(filename).read()
    metadata = dict(re.findall("__([a-z]+)__ = '([^']+)'", content))
    return metadata['version']


setup(
    name='Mopidy-Headspring-Web',
    version=get_version('mopidy_headspring_web/__init__.py'),
    url='https://github.com/bardoloi/Mopidy-Headspring-Web',
    license='Apache License, Version 2.0',
    author='Headspring Labs',
    author_email='labs@headspring.com',
    description='Mopidy Headspring Web extension',
    long_description=open('README.rst').read(),
    packages=find_packages(exclude=['tests', 'tests.*']),
    zip_safe=False,
    include_package_data=True,
    install_requires=[
        'setuptools',
        'Mopidy >= 0.19',
    ],
    entry_points={
        'mopidy.ext': [
            'headspring_web = mopidy_headspring_web:MusicBoxExtension',
        ],
    },
    classifiers=[
        'Environment :: No Input/Output (Daemon)',
        'Intended Audience :: End Users/Desktop',
        'License :: OSI Approved :: Apache Software License',
        'Operating System :: OS Independent',
        'Programming Language :: Python :: 2',
        'Topic :: Multimedia :: Sound/Audio :: Players',
    ],
)
