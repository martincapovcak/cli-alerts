const alert = require('./index.js');

// Teting outputs

alert();

alert({type: `success`,msg: `All finished!`, name: `Wohoo`});

alert({type: `warning`,msg: `You didn't to add something!`, name: `Watch out`});

alert({type: `info`,msg: `What a cool day today!`, name: `Ehm`});

alert({type: `error`,msg: `Ooops, something went wrong!`, name: `NOPE`});

