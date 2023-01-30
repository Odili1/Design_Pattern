class Telephone {
    constructor(){
        this.observers = new Set()
    }

    addPhoneNumber(observer){
        this.observers.add(observer) 
    }

    removePhoneNumber(observer){
        this.observers.delete(observer)
    }

    dailPhoneNumber(num){
        if (this.observers.has(num)){

        }
    }
}

class Observer{
    constructor(){

    }

    call(num){

    }
}

const telephone = new Telephone();
const raymond = new Observer('09034067594');
const lucky = new Observer('09045797345');
const frank = new Observer('09097689087');
telephone.addPhoneNumber(raymond);
telephone.addPhoneNumber(lucky);
telephone.addPhoneNumber(frank);
telephone.removePhoneNumber(raymond);




console.log(telephone.observers);


console.log(telephone);