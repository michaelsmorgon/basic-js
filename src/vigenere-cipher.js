const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor (directType = true) {
    this.directType = !!directType;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error ('Incorrect arguments!');
    }

    key = (key.match(/[a-zA-Z]+/gui)).join('');
    
    let encryptMessage = [];
    let shift = 0;
    let shiftKey = 0;
    message.split('').forEach((val, ind) => {
      let indexMessageSymbol = this.string.indexOf(val.toUpperCase());
      if (indexMessageSymbol === -1) {
        encryptMessage.push(val.toUpperCase());
        shift++;
        return;
      }
      let indexKeySymbol = this.string.indexOf(key.toUpperCase()[(ind - shift) % key.length]);
      while(indexKeySymbol === -1) {
        shiftKey++;
        indexKeySymbol = this.string.indexOf(key.toUpperCase()[(ind - shift) % key.length + shiftKey]);
      }
      let encryptIndex = indexKeySymbol + indexMessageSymbol;

      if ( encryptIndex > 25) {
        encryptIndex -= 26;
      }
      encryptMessage.push(this.string[encryptIndex]);
    });

    if (!this.directType) {
      encryptMessage = encryptMessage.reverse();
    }

    return encryptMessage.join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error ('Incorrect arguments!');
    }

    key = (key.match(/[a-zA-Z]+/gui)).join('');
    
    let decryptedMessage = [];
    let shift = 0;

    encryptedMessage.split('').forEach((val, ind) => {
      let indexMessageSymbol = this.string.indexOf(val.toUpperCase());
      if (indexMessageSymbol === -1) {
        decryptedMessage.push(val.toUpperCase());
        shift++;
        return;
      }

      let indexKeySymbol = this.string.indexOf(key.toUpperCase()[(ind - shift) % key.length]);
      while(indexKeySymbol === -1) {
        shiftKey++;
        indexKeySymbol = this.string.indexOf(key.toUpperCase()[(ind - shift) % key.length + shiftKey]);
      }
      let decryptIndex = indexMessageSymbol - indexKeySymbol;

      if ( decryptIndex < 0) {
        decryptIndex += 26;
      }
      decryptedMessage.push(this.string[decryptIndex]);
    });

    if (!this.directType) {
      decryptedMessage = decryptedMessage.reverse();
    }

    return decryptedMessage.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
