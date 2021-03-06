/// <reference path="../../../_references.d.ts" />

import plat = require('platypus');
%import%
class %name% %extends% { }

/**
 * This is how you register an injectable with the framework.
 * Injectables can have dependencies too!
 */
plat.register.injectable('%registername%', %name%);

export = %name%;
