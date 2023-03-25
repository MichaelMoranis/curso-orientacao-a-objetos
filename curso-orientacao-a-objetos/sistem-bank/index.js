import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

 const cliente1 = new Cliente("Ricardo", 11122233309);
 const cliente2 = new Cliente("Alice", 44422233309);

 const contaCorrenteRicardo = new ContaCorrente(cliente1, 2000);
 const contaCorrenteAlice = new ContaCorrente(cliente2, 3003); 

contaCorrenteAlice.depositar(25); 
contaCorrenteRicardo.depositar(250);

contaCorrenteRicardo.transferir(200, contaCorrenteAlice);
console.log(contaCorrenteAlice);
console.log(ContaCorrente.numeroDeContas);