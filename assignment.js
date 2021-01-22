function kilometerToMeter(kilometer) {
    var meter = kilometer*1000;
    return meter;
}
var padmaSetu = kilometerToMeter(6.15);
var meghnaSetu = kilometerToMeter(0.9);
var jamunaSetu = kilometerToMeter(4.8);
console.log(padmaSetu);
console.log(meghnaSetu);
console.log(jamunaSetu);


function budgetCalculator(watch, mobile, laptop) {
    var watchCost = watch * 50;
    var mobileCost = mobile * 100;
    var laptopCost = laptop * 500;

    return watchCost + mobileCost + laptopCost;
}
var total = budgetCalculator(15, 10, 4);
console.log(total);



function hotelCost(timeLenght){
    var cost = 0;
    if (timeLenght <= 10) {
        cost = timeLenght * 100;
    } else if (timeLenght <= 20) {
        var firstPartCost = 10 * 100;
        var rmaining = timeLenght - 10;
        var secondPartCost = remaining * 80;
        cost = firstPartCost + secondPartCost;
    }
    else { var firstPartCost = 10 * 100;
           var secondPartCost = 10 * 80;
           var remaining =  timeLenght - 20;
           var thirdPartCost = remaining * 50;
           cost = firstPartCost + secondPartCost + thirdPartCost;
    }       
  return cost;
}
var count = hotelCost(29);
console.log(count);


function megaFriend(friend) {
    var maxWord = friend [0];
    for(var i = 0; i < friend.length; i++) {
        var element = friend[i];
     if(element.length > maxWord.length){
        maxWord =  element;     
         
     }  
    
    }
    return maxWord;
}var result = megaFriend(['sams', 'subol', 'akhmol', 'jamal', 'tami', 'khai']);
console.log(result);



