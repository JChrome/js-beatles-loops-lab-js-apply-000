function theBeatlesPlay(musicians, instruments){
  var total = [];
  for (i = 0; i < musicians.length; i++){
    var musician = musicians[i]
    var instruments = instruments[i]
    var combo = `${musician} plays ${instruments}`
    total.push(combo);
  }
  return total;
}
