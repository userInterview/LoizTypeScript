import {Observable} from 'rxjs'
//import {fetch} from 'node-fetch' ;
import fetch from 'node-fetch'


async function getPromiseFinalResult() : Promise<Response> { 
	//let promiseListeCVEs : Promise<Response> ;
	//const promiseListeCVEs = fetch("https://services.nvd.nist.gov/rest/json/cves/1.0?startIndex=1&resultsPerPage=2&cpeMatchString=cpe:2.3:*:microsoft" 
	const promiseListeCVEs = fetch("https://jsonplaceholder.typicode.com/todos/1" 	
	,{method: "GET"}
	).then((res) => {   const resJson = res.json() ;
						console.log('09/06/2021 - 17h08 : async function getPromiseFinalResult - dans le then : ', resJson ) ; 						
						return resJson ;} 
		  )
	 .catch(function(argError) { console.log("Erreur de recupération des produits pour le vendeur microsoft. L'erreur vaut : ", argError); }) ;
	
	 
	 const result = await promiseListeCVEs ;
	 console.log('async function getPromiseFinalResult - resultat renvoyé : ', result ) ; 
	 return result ;	  
}

function getTypeScriptObservable () : Observable<Promise<Response>> {
const objObserv :  Observable<Promise<Response>> =  new Observable(function(argobserver) {
															const resultat = getPromiseFinalResult() ;
															argobserver.next(resultat)
														}) ; 
	return objObserv ;
}

getTypeScriptObservable().subscribe(
    function(resultObservable) {
    console.log("getTypeScriptObservable - resultat : ", resultObservable) ;
    }
)

const greet =  "Greetings" 
const geeks = "GeeksforGeeks" 
console.log(greet + " from " + geeks)