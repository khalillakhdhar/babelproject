class Produit
{
    constructor(id,titre,prix,quantite)
    {
        this.id=id;
        this.titre=titre;
        this.prix=prix;
        this.quantite=quantite;
    }
    get productdet()
    {
        return this.titre+" prix unitaire "+this.prix+" "+this.quantite;
    }
}
var pr=new Produit(1,"laptop gamer",2000,20);
var proddet=pr.productdet;
console.log("produit", proddet)