class Mobx{
    constructor(){
        this.name = "mobx";
        this.events = ["cli_end", "cli_start"];
    }
    apply(runtime){
        console.log("mobx plugin apply");
    }
    on(event, runtime){
        console.log("mobx plugin",event)
    }
}
module.exports=new Mobx();
