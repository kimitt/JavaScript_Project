let count = 0;

let value = document.querySelector('#value');
let btnAll = document.querySelectorAll('.btn');

btnAll.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('minus')) {
            count--;
        } else if (styles.contains('plus')) {
            count++;
        } else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = "pink";
        }
        if (count < 0) {
            value.style.color = "green";
        }
        if (count === 0) {
            value.style.color = "black";
        }
        value.textContent = count;
    });
});
