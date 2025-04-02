const questions = document.querySelectorAll('.qtn');

// data object
const faqsData = [
    {
        question: "What is the return policy",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nemo natus consequuntur totam optio blanditiis alias sint labore quas recusandae cum, temporibus cupiditate corporis exercitationem nam,soluta culpa fugit deleniti."
    },
    {
        question: "What is the return policy",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nemo natus consequuntur totam optio blanditiis alias sint labore quas recusandae cum, temporibus cupiditate corporis exercitationem nam,soluta culpa fugit deleniti."
    },
    {
        question: "What is the return policy",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nemo natus consequuntur totam optio blanditiis alias sint labore quas recusandae cum, temporibus cupiditate corporis exercitationem nam,soluta culpa fugit deleniti."
    },
];

// loop through the object and dynamically display them
const container = document.querySelector('.accordion-container');
faqsData.forEach(item => {
    // dynamic display of qtn div
    const qtnDiv = document.createElement('div');
    qtnDiv.className = 'qtn';
    qtnDiv.textContent = item.question;
    qtnDiv.setAttribute('data-symbol', '+');

    // dynamic display of answer divv
    const answerDiv = document.createElement('div');
    answerDiv.className = 'answer';

    const paragraph = document.createElement('p');
    paragraph.textContent = item.answer;

    answerDiv.appendChild(paragraph);
    container.appendChild(qtnDiv);
    container.appendChild(answerDiv);

}

)


document.querySelector('.accordion-container').addEventListener('click', (e) => {
    if (e.target.classList.contains('qtn')) {
        const question = e.target;
        const answer = question.nextElementSibling;

        // Your original toggle logic
        question.classList.toggle('active');
        answer.classList.toggle('active');

        // Your original symbol toggle
        question.setAttribute('data-symbol',
            question.classList.contains('active') ? '-' : '+'
        );
    }
});

// questions.forEach(question => {
//     question.addEventListener('click', function () {
//         const answer = this.nextElementSibling; // Get next answer div
//         answer.classList.toggle('active'); // Toggle active class

//         this.classList.toggle('active'); // Toggle active on question

//         // Toggle '+' to '-'
//         if (this.classList.contains('active')) {
//             this.setAttribute("data-symbol", "-");
//         } else {
//             this.setAttribute("data-symbol", "+");
//         }
//     });
// });
