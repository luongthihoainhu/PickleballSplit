import { applySettlement } from './server/storage';

const balances = { huy: -250000, nam: 250000 };
const tx = { from: 'nam', to: 'huy', amount: 250000 };

console.log(applySettlement(balances, tx));
