function theBeatlesPlay(musicians, instruments){
  var total = [];
  var i = 0;
  for (i = 0; i < musicians.length; i++){
    var musician = musicians[i]
    var instrument = instruments[i]
    var combo = `${musician} plays ${instrument}`;
    total.push(combo);
  }
  return total;
}

function johnLennonFacts(facts){
  var total = [];
  var i = 0;
  for (i = 0; i < facts.length; i++){
    mainFact = facts[i]
    newFact = `${mainFact}!!!`
    total.push(newFact)
  }
  return total;
}
