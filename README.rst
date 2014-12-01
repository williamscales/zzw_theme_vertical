zzw_theme_vertical
==================

A custom theme for Mezzanine.

Quick Start
-----------

#. Add `zzw_theme_vertical` to your `INSTALLED_APPS` setting like this::

    INSTALLED_APPS = (
        ...
        'zzw_theme_vertical',
    )

Editing the LESS files
----------------------
This theme uses the `bootstrap framework`_. To compile the custom bootstrap less
files into css, you must install `grunt` and its dependencies. To do so, run the
following (in the directory containing this file)::

$ npm install

which will pull in the dependencies. Then you can run::

$ node_modules/grunt/bin/grunt.js bootstrap:compileLess

which will put the resulting css, js, and font files for bootstrap in
`zzw_theme_vertical/static/bootstrap/dist`. You can also run::

$ node_modules/grunt/bin/grunt.js watch

to recompile the less files whenever any file in the directory
`zzw_theme_vertical/less` changes.

.. _`bootstrap framework`: http://getbootstrap.com/

License
-------
Copyright 2014 Ze Fu and William Scales

Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License.  You may obtain a copy of the
License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed
under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied.  See the License for the
specific language governing permissions and limitations under the License.
