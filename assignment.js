function kilometerToMeter(kilometer){
    var result = kilometer * 1000;
    if(kilometer < 0){
        return("Distance can not be negative")
    }
    else{
        return result;
    }
}
var distance = kilometerToMeter(2);
// console.log(distance);

function budgetCalculator(watch,clock,laptop){
    totalCost = watch *50 + clock * 100 + laptop * 500; 
    if(watch< 0){
        return("can not negative");
    }
    else if (clock < 0){
        return("can not negative");
    }
    else if(laptop < 0){
        return ("can not negative");
    }
    else{
        return totalCost;
    }
}
var cost = budgetCalculator(3,1,1);
// console.log(cost);

function hotelCost (totalDays){
    if (totalDays < 0){
        return("Days can not be negative")
    }
    
     else if(totalDays > 0 && totalDays <= 10){
        totalCost = totalDays * 100;
        return totalCost;
    }
    else if(totalDays > 10 && totalDays <= 20){
        var firstPart = 10 * 100;
        var remaining = totalDays - 10;
        var secondPart = remaining * 80;
        var totalCost = firstPart + secondPart;
        return totalCost; 
    }
    else if(totalDays > 20){
        var firstPart = 10 * 100;
        var secondPart = 10* 80;
        var remaining = totalDays - 20;
        var thirdPart = remaining * 50;
        var totalCost = firstPart + secondPart + thirdPart;
        return totalCost;
        }
        else{
            return("Enter valid Number");
        }
        
        
}
var days = hotelCost(2530);
// console.log(days);

function megaFriend(friendsName){
    var max.length = friendsName[0];
    for(var i = 0; i < friendsName.length; i++);{
        var element.length = friendsName[i];
        if(element.length > max.length){
            max.length = element.length;
            return("highest value is:",max);
        }
    }
}
var name1 = megaFriend(['Sakhawat,Ayman,Alvi,None']);
console.log(name1);