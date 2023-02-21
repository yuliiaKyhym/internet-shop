class Comment {


    constructor(text){
        this.text = text
        this.likesQuantity = 0 
    }

    addLike(){
        this.likesQuantity += 1 //this.likesQuantity = this.likeQuantity + 1
    }
}


const firstComment = new Comment('This is comment 1 text') //создали экземпляр класса


// console.log(firstComment)
// console.log(firstComment.likesQuantity)

firstComment.addLike()

// console.log(firstComment)
// console.log(firstComment.likesQuantity)


const secondComment = new Comment('This is comment 2 text')
const thirdComment = new Comment('This is comment 3 text')

console.log(firstComment)
console.log(secondComment)
console.log(thirdComment)


secondComment.addLike()
console.log(firstComment)
console.log(secondComment)
console.log(thirdComment)