// Define the qinfo file
var totalCount = 3;
const lines = [
  'Posti liberi senza priorità [int]',
  totalCount-MondayGetItemCount('1462254747'),
  'Posti liberi con priorità [int]',
  0,
  'Posti occupati senza priorità [int]',
  MondayGetItemCount('1462254747'),
  'Posti occupati con priorità [int]',
  3,
  'Posti totali [int]',
  totalCount,
  'Stato coda [dropdown] (full "full" / tbfl "to be full" / avlb "available" / prio "available only for priority)',
  'full',
  'Stato piazzamento nuovi ordini [dropdown] (full "full" / avlb "available")',
  'full',
  'Fine documento informazioni',
];


var queueinfo = 'Caricamento dello stato della coda... <a href="/peek/queue">[ Vedi la coda ]</a>';
queueinfo = 'Coda: ' + lines[5] + '/' + lines[9] + ' <color class="priority">[ ' + lines[7] + '/' + lines[9] + ' con <a href="/priority">priorità</a> ]</color> <a href="/peek/queue">[ Vedi la coda ]</a>';

document.getElementById('queueinfo').innerHTML = queueinfo;
try {
  document.getElementById('queuestate-'+lines[11]).removeAttribute('hidden');
  document.getElementById('queuestate-err0').setAttribute('hidden', true);
} catch (error) {
  console.error(error);
};
try {
  document.getElementById('buy-'+lines[13]).removeAttribute('hidden');
  document.getElementById('buy-err0').setAttribute('hidden', true);
} catch (error) {
  console.error(error);
}