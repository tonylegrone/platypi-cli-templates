﻿/// <reference path="../../_references.d.ts" />

import plat = require('platypus');
%import%
class %name%Factory %extends% { }

plat.register.injectable('%registername%Factory', %name%Factory, null, plat.register.injectable.FACTORY);

export = %name%Factory;
