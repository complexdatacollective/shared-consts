import assets from './assets';
import network from './network';
import exportProcess from './exportProcess';
import protocol from './protocol';
import session from './session';
import stages from './stages';
import variables from './variables/variables';
export default {
    ...assets,
    ...exportProcess,
    ...network,
    ...protocol,
    ...session,
    ...stages,
    ...variables,
};
