export interface cours{
    nom:string,
    volume:number
}

export class Etudiant {

info(){
    console.log("nom : "+this.nom +" age:"+this.age);
}

constructor (private nom?:string, private age?:number){
this.nom=nom;
this.age=age;
}
    
}