class Comment {


    constructor(text){
        this.text = text
        this.likesQuantity = 0 
    }

    addLike(){
        this.likesQuantity += 1 //this.likesQuantity = this.likeQuantity + 1
    }


static mergeComments(first, second){ //статический метод НЕ наследуется экземплярами класса
    return `${first} + ${second}`
    }
}

const firstComment = new Comment('Text 1')
const secondComment = new Comment('Text 2')

let mergedText = Comment.mergeComments(firstComment.text, secondComment.text)
console.log(mergedText)