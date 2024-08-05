//Facade Pattern 
//creates a unified interface and hides the complex internal implementation details within a facade class
//separation of client code with internal implementation

class ComplexModule {
    initialize() {

    }

    operation1(){

    }

    operation2(){

    }

}

//here we have to initialize the module and then use the internal functions one by one
const interaction = new ComplexModule()
interaction.operation1()

//creating a facade class to hide the details of the ComplexModule Class

class ModuleFacade {


    constructor(){
        this.ComplexModule = new ComplexModule()
    }

    operationHandler(){
        this.ComplexModule.initialize()
        this.ComplexModule.operation1()
        this.ComplexModule.operation2()
    }

}
//facade module hides the internal implementations of the complex module
const newInteraction = new ModuleFacade()
newInteraction.operationHandler()
