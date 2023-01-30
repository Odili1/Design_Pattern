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

    dailPhoneNumber(observer){
        if ([...this.observers][0].num === observer.num){
            return observer.notify(observer.num)
        }
        return observer.notify(`Now dailing ${observer.num}`)
    }
}

class Observer{
    constructor(num){
        this.num = num
    }

    notify(context){
        return context
    }
}

// Instantiation of classes
const telephone = new Telephone();
const raymond = new Observer('09034067594');
const lucky = new Observer('09045797345');
const frank = new Observer('09097689087');
telephone.addPhoneNumber(raymond);
telephone.addPhoneNumber(frank);
telephone.addPhoneNumber(lucky);
telephone.removePhoneNumber(raymond);

// This prints the phone number
console.log(telephone.dailPhoneNumber(frank));

// Thisi prints 'Now dailing <number>'
console.log(telephone.dailPhoneNumber(lucky));
