class KeyValuePair<K, V>{
    private key: K;
    private value: V;
  
    public setKeyValue(key: K, value: V) {
        this.key = key;
        this.value = value;
    }

    public display(): void{
        console.log(`key = ${this.key}, value = ${this.value}`);        
    }
}

export default KeyValuePair;

let kvp = new KeyValuePair<number, string>();
kvp.setKeyValue(1, 'Steve');
kvp.display();


