import * as CryptoJS from "crypto-js";

class Block {
   public index:number;
   public hash:string;
   public previousHash:string;
   public data:string;
   public timestamp:number;

   constructor(index:number, hash:string, previousHash:string, data:string, timestamp:number) {
      this.index = index;
      this.hash = hash;
      this.previousHash = previousHash;
      this.data = data;
      this.timestamp = timestamp;
   }

   static calculateBlockHash = (
       index: number,
       previousHash: string,
       timestamp: number,
       data: string,
   ): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString()
}

const genesisBlock:Block = new Block(0,"1234","","Hello",20200801);
let blockChain: Block[] = [genesisBlock];

const getBlockchain = ():Block[] => blockChain;
const getLatestBlock = ():Block => blockChain[blockChain.length -1];
const getNewTimeStamp = ():number => Math.round(new Date().getTime() / 1000)

console.log(blockChain)
export {}