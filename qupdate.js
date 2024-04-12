// Define the qinfo file
const lines = [
  'Posti liberi senza priorità [int]',
  '0',
  'Posti liberi con priorità [int]',
  '0',
  'Posti occupati senza priorità [int]',
  '3',
  'Posti occupati con priorità [int]',
  '3',
  'Posti totali [int]',
  '3',
  'Stato coda [dropdown] (full "full" / tbfl "to be full" / avlb "available" / prio "available only for priority)',
  'full',
  'Fine documento informazioni',
];


var queueinfo = '';
// Split the text into lines
queueinfo = 'Coda: ' + lines[5] + '/' + lines[9] + ' [ ' + lines[7] + '/' + lines[9] + ' con <a href="/priority">priorità</a> ]';

document.getElementById('queueinfo').innerHTML = queueinfo;
document.getElementById('queuestate-'+lines[11]).removeAttribute('hidden');
