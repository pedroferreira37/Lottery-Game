function moveCursorAfterEndTyping() {
  if(this.value.length === this.maxLength) {
    
      if(this.parentElement.nextElementSibling.children[0] !== null ) {
        this.parentElement.nextElementSibling.children[0].focus()
        

      }  else {
        console.log(this.parentElement.parentElement.nextElementSibling)
      }
  }
}

export {moveCursorAfterEndTyping }