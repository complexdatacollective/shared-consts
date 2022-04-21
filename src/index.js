import * as assets from './assets';
import * as network from './network';
import * as exportProcess from './exportProcess';
import * as protocol from './protocol';
import * as session from './session';
import * as stages from './stages';
import * as variables from './variables/variables';

export default {
  ...assets,
  ...network,
  ...exportProcess,
  ...protocol,
  ...session,
  ...stages,
  ...variables,
};