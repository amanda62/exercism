/*
RNA Transcription
Given a DNA strand, return its RNA complement (per RNA transcription).
        NUCLEOTIDES
    DNA           RNA       
    Guanine  <-> Cytosine
    Thymine   -> Adenine
    Adenine   -> Uracil
*/

//DNA: RNA
const RNA = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

export const toRna = DNA => {
  return DNA.split('')
    .map(nucleotide => RNA[nucleotide])
    .join('');
};
