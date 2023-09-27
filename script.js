
let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let i = 1;

let squares = document.querySelectorAll('.square');
let hasWinner = false;
let winner = 0;
for (const element of squares) {
    element.addEventListener('click', () => {
        if (hasWinner) {
            return;
        }
        let id = element.getAttribute('id');

        if (i % 2 != 0 && arr[id - 1] == 0) {

            element.innerHTML = `<img src="/src/cross.png">`;

            i++;
            console.log(i);
            arr[id - 1] = 1;
            if ((arr[0] === 1 && arr[3] === 1 && arr[6] === 1) ||
                (arr[0] === 1 && arr[1] === 1 && arr[2] === 1) ||
                (arr[3] === 1 && arr[4] === 1 && arr[5] === 1) ||
                (arr[6] === 1 && arr[7] === 1 && arr[8] === 1) ||
                (arr[0] === 1 && arr[4] === 1 && arr[8] === 1) ||
                (arr[2] === 1 && arr[4] === 1 && arr[6] === 1) ||
                (arr[1] === 1 && arr[4] === 1 && arr[7] === 1) ||
                (arr[2] === 1 && arr[5] === 1 && arr[8] === 1)
            ) {
                winner = 1;
                hasWinner = true;
                document.querySelector(".p1").classList.add("p11");
            }
            if ((arr[0] === 2 && arr[3] === 2 && arr[6] === 2) ||
                (arr[0] === 2 && arr[1] === 2 && arr[2] === 2) ||
                (arr[3] === 2 && arr[4] === 2 && arr[5] === 2) ||
                (arr[6] === 2 && arr[7] === 2 && arr[8] === 2) ||
                (arr[0] === 2 && arr[4] === 2 && arr[8] === 2) ||
                (arr[2] === 2 && arr[4] === 2 && arr[6] === 2) ||
                (arr[1] === 2 && arr[4] === 2 && arr[7] === 2) ||
                (arr[2] === 2 && arr[5] === 2 && arr[8] === 2)
            ) {
                winner = 2;
                hasWinner = true;
                document.querySelector(".p2").classList.add("p22");
            }


        }
        else if (i % 2 == 0 && arr[id - 1] == 0) {

            element.innerHTML = `<img src="/src/circle.png">`;

            i++;
            console.log(i);
            arr[id - 1] = 2;
            if ((arr[0] === 1 && arr[3] === 1 && arr[6] === 1) ||
                (arr[0] === 1 && arr[1] === 1 && arr[2] === 1) ||
                (arr[3] === 1 && arr[4] === 1 && arr[5] === 1) ||
                (arr[6] === 1 && arr[7] === 1 && arr[8] === 1) ||
                (arr[0] === 1 && arr[4] === 1 && arr[8] === 1) ||
                (arr[2] === 1 && arr[4] === 1 && arr[6] === 1) ||
                (arr[1] === 1 && arr[4] === 1 && arr[7] === 1) ||
                (arr[2] === 1 && arr[5] === 1 && arr[8] === 1)
            ) {
                winner = 1;
                hasWinner = true;
                document.querySelector(".p1").classList.add("p11");
            }
            if ((arr[0] === 2 && arr[3] === 2 && arr[6] === 2) ||
                (arr[0] === 2 && arr[1] === 2 && arr[2] === 2) ||
                (arr[3] === 2 && arr[4] === 2 && arr[5] === 2) ||
                (arr[6] === 2 && arr[7] === 2 && arr[8] === 2) ||
                (arr[0] === 2 && arr[4] === 2 && arr[8] === 2) ||
                (arr[2] === 2 && arr[4] === 2 && arr[6] === 2) ||
                (arr[1] === 2 && arr[4] === 2 && arr[7] === 2) ||
                (arr[2] === 2 && arr[5] === 2 && arr[8] === 2)
            ) {
                winner = 2;
                hasWinner = true;
                document.querySelector(".p2").classList.add("p22");
            }


        }
        if (i > 9 && hasWinner == false) {
            document.querySelector(".p3").classList.add("p33");
        }

    })
};

let button = document.querySelector("button");
button.addEventListener("click", function reset() {
    window.location.reload();
});






// function reset() {
//     arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//     const element1 = document.getElementBySrc("/src/cross.png");
//     element1.remove();
//     const element2 = document.getElementBySrc("/src/circle.png");
//     element2.remove();
// }
// // if (winner === 1) {
// //     document.querySelector(".square").classList.add("winner");
// // }
// if (winner === 2) {
//     document.querySelector(".square").classList.add("win");
// }









