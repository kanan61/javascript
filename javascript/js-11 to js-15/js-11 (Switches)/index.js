// switch = statement that examines a value
//          for a match against many clauses.
//          more efficient than many "else if" statements.


let grade = 69;

switch(true){
    case grade >= 75:
        console.log("you did great");
        break;
    case grade >= 75:
        console.log("you did good");  
        break;
    case grade >= 50:
           console.log("you did ok");
        break;
    case grade >= 35:
        console.log("you paassed barely");
        break;
    case grade < 35:
        console.log("you FAILED");
        break;
    default:
        console.log(grade,"is not a letter grade")

}