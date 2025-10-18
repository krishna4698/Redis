import  {createClient} from 'redis'

main();
 async function main(){
    const client= createClient();
    client.connect();
    while(1){
        const response= await client.brPop("submissions", 0);
     console.log(response);
    console.log("processed user submissions")   
    }
       
}