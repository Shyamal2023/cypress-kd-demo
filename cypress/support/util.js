export class Util{
    randomEmail(){
        let char='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxvz1234567890';
        let results = '';
        for(let i=0; i<10; i++){
            results += char.charAt(Math.floor(Math.random() * char.length));
        }
        return results + '@gmail.com'; 
    }
}
  export const util = new Util();