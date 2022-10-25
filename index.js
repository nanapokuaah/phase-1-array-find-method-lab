// code your solution here
function superbowlWin(array){
    let record = array.find(element => element.result ==="W")
        if (record){
           return record.year
        } else {
            return undefined
            
        }    
    }

