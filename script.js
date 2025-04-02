const questions = document.querySelectorAll('.qtn');

accordion = {
    qtn : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nemo natus consequuntur totam optio blanditiis alias sint labore quas recusandae cum, temporibus cupiditate corporis exercitationem nam,soluta culpa fugit deleniti.",
    qtn : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nemo natus consequuntur totam optio blanditiis alias sint labore quas recusandae cum, temporibus cupiditate corporis exercitationem nam,soluta culpa fugit deleniti.",
    qtn : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nemo natus consequuntur totam optio blanditiis alias sint labore quas recusandae cum, temporibus cupiditate corporis exercitationem nam,soluta culpa fugit deleniti."
}

questions.forEach(question => {
    question.addEventListener('click', function(){
        const answer = this.nextElementSibling; // Get next answer div
        answer.classList.toggle('active'); // Toggle active class

        this.classList.toggle('active'); // Toggle active on question

        // Toggle '+' to '-'
        if (this.classList.contains('active')) {
            this.setAttribute("data-symbol", "-");
        } else {
            this.setAttribute("data-symbol", "+");
        }
    });
});
