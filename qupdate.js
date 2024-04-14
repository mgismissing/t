// Define the qinfo file
const totalCount = 3;
const occupiedTotal = 3;
const occupiedPrio = 0;
const occupiedFixed = 2;
const linesRaw = [
  totalCount-occupiedTotal,
  totalCount-occupiedPrio-occupiedFixed,
  occupiedTotal,
  occupiedPrio+occupiedFixed,
  totalCount
];
var linesCond1 = 'err0';
if (linesRaw[2] == linesRaw[4]) {
  if (linesRaw[3] == linesRaw[4]) {
    linesCond1 = 'full';
  } else {
    linesCond1 = 'prio';
  }
} else if (linesRaw[2] == linesRaw[4]-1) {
  linesCond1 = 'tbfl';
} else if (linesRaw[2] < linesRaw[4]-1) {
  linesCond1 = 'avlb';
};
var linesCond2 = 'err0';
if (linesRaw[2] == linesRaw[4]) {
  if (linesRaw[3] == linesRaw[4]) {
    linesCond2 = 'full';
  } else {
    linesCond2 = 'prio';
  }
} else if (linesRaw[2] < linesRaw[4]-1) {
  linesCond2 = 'avlb';
}
const lines = [
  'Posti liberi senza priorità [int]',
  linesRaw[0],
  'Posti liberi con priorità [int]',
  linesRaw[1],
  'Posti occupati senza priorità [int]',
  linesRaw[2],
  'Posti occupati con priorità [int]',
  linesRaw[3],
  'Posti totali [int]',
  linesRaw[4],
  'Stato coda [dropdown] (full "full" / tbfl "to be full" / avlb "available" / prio "available only for priority")',
  linesCond1,
  'Stato piazzamento nuovi ordini [dropdown] (full "full" / avlb "available" / prio "available only for priority")',
  linesCond2,
  'Fine documento informazioni',
];


var queueinfo = 'Caricamento dello stato della coda... <a href="/peek/queue">[ Vedi la coda ]</a>';
queueinfo = 'Coda: ' + lines[5] + '/' + lines[9] + ' <color class="priority">[ ' + lines[7] + '/' + lines[9] + ' con <a href="/priority">priorità</a> ]</color> <a href="/peek/queue">[ Vedi la coda ]</a>';

document.getElementById('queueinfo').innerHTML = queueinfo;
try {
  document.getElementById('queuestate-'+lines[11]).removeAttribute('hidden');
  document.getElementById('queuestate-err0').setAttribute('hidden', true);
} catch (error) {
  console.error('Value "queuestate-'+lines[11]+'" is not valid.');
  console.error(error);
};
try {
  document.getElementById('buy-'+lines[13]).removeAttribute('hidden');
  document.getElementById('buy-err0').setAttribute('hidden', true);
} catch (error) {
  console.error('Value "buy-'+lines[13]+'" is not valid.');
  console.error(error);
}