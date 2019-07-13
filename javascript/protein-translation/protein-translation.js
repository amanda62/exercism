/*
Translate RNA sequences into proteins.
RNA can be broken into three nucleotide sequences called codons, 
and then translated to a polypeptide like so:

RNA       ->  codons     -> polypeptide/amino acid/proteins
......... -> ... ... ... -> name name name

"AUGUUUUCU" => "AUG", "UUU", "UCU" => "Methionine", "Phenylalanine", "Serine"
"AUGUUUUCUUAAAUG" => "AUG", "UUU", "UCU", "UAA", "AUG" => "Methionine", "Phenylalanine", "Serine"

There are 64 codons which in turn correspond to 20 amino acids; feel free to expand the list in the test suite to include them all.
RNA is made up of G U A C.
Below are the codons and resulting Amino Acids needed for the exercise.

_Codon_	           _Protein_
AUG	                Methionine
UUU, UUC	          Phenylalanine
UUA, UUG	          Leucine
UCU, UCC, UCA, UCG	Serine
UAU, UAC            Tyrosine
UGU, UGC	          Cysteine
UGG	                Tryptophan
UAA, UAG, UGA	      STOP terminating codons
*/

//dictionary of aminos
const Methionine = ['AUG'];
const Phenylalanine = ['UUU', 'UUC'];
const Leucine = ['UUA', 'UUG'];
const Serine = ['UCU', 'UCC', 'UCA', 'UCG'];
const Tyrosine = ['UAU', 'UAC'];
const Cysteine = ['UGU', 'UGC'];
const Tryptophan = ['UGG'];
const STOP = ['UAA', 'UAG', 'UGA'];

const rnaToCodons = (RNAstring='') => {
  const RNA = RNAstring.split('');
  const codons = [];
  for (let i=0; i<RNA.length; i+=3) {  
    const codon = `${RNA[i]}${RNA[i+1]}${RNA[i+2]}`;
    codons.push(codon);
  }
  return codons;
};

const codonsToProteins = codons => {
  const proteins = [];
  for(let codon of codons) {
    if (STOP.includes(codon)) break;
    else if (Methionine.includes(codon)) proteins.push('Methionine');
    else if (Phenylalanine.includes(codon)) proteins.push('Phenylalanine');
    else if (Leucine.includes(codon)) proteins.push('Leucine');
    else if (Serine.includes(codon)) proteins.push('Serine');
    else if (Tyrosine.includes(codon)) proteins.push('Tyrosine');
    else if (Cysteine.includes(codon)) proteins.push('Cysteine');
    else if (Tryptophan.includes(codon)) proteins.push('Tryptophan');
    else throw new Error("Invalid codon");
  };
  return proteins;
};

//MAIN FUNCTION. RNA string -> array of protein names
export const translate = (RNAString) => {
  const codons = rnaToCodons(RNAString);
  return codonsToProteins(codons);
};



/*
initial ideas:
options:
 insert delimiter every three characters of string, then split
  split, combine array indexes

  array.forEach(function(char, index) {
    if (index/)
  });
  switch?
*/