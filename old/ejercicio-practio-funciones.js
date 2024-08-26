// Create powerfullGirl objets.
function PowerFullGirl(name,color,superPower){
    this.name = name
    this.color = color
    this.superPower = superPower
    this.isLeader = false
    
    this.displayInfo = function(){
        console.log(`
        Power Full Girs Information:
            
            -Name: ${this.name}.
            -Color: ${this.color}
            -Super Power: ${this.superPower}
            ${
                this.isLeader ? 'Leader: Yes.' : 'Leader: No.' 
            }
        `)
    }

    this.becomeLeader = function(){
        this.isLeader = true;
        console.log(`The ${this.name} has become the leader of the power full girls.`) 
    }
}

const powerFullGirl1 = new PowerFullGirl("Girl 1","Pink","Ice breath");
const powerfullGirl2 = new  PowerFullGirl("Girl 2","Blue","Super strength");
const powerfullGirl3 = new PowerFullGirl("Girl 3","Ligth blue","super fast");

powerfullGirl3.becomeLeader();

powerFullGirl1.displayInfo();
powerfullGirl2.displayInfo();
powerfullGirl3.displayInfo();


