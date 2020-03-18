var snowball = require('node-snowball');
var crypto = require('crypto')

module.exports = class Document {
    constructor(text){
        this.docId = this.generateDocHash()
        this.originalText = text
        this.tokenTextArray = null
        this.tokenStemTextArray = null
        
        this.tokenizeAndStemText(text)
    }

    generateDocHash(){
        var current_date = (new Date()).valueOf().toString()
        var random = Math.random().toString()
        return crypto.createHash('sha1').update(current_date + random).digest('hex')
    }

    tokenizeAndStemText(text){
        this.tokenTextArray = text.split(" ")
        this.tokenStemTextArray = []
        this.tokenTextArray.forEach(token => {
            this.tokenStemTextArray.push( snowball.stemword(token) )
        })
    }
}