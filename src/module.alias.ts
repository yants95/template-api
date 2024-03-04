import { resolve } from 'node:path';

import { addAlias } from 'module-alias';

addAlias('@', resolve(process.env.TS_NODE_DEV === undefined ? 'dist' : 'src'));
