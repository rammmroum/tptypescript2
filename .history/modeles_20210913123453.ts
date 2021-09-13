export interface cours{
    nom:string,
    volume:number
}

export class Etudiant {
nom:string;
age:number
info(){
    console.log("nom : "+this.nom +" age:"+this.age);
}
    
}

}