
const poem = document.getElementById("poem");
const words = document.querySelectorAll(".line span");

let scattered = false;

poem.addEventListener("click", function () {

    scattered = !scattered;

    words.forEach(function (word) {

        if (scattered) {

            const x = (Math.random() - 0.5) * window.innerWidth * 0.8;
            const y = (Math.random() - 0.5) * window.innerHeight * 0.7;
            const rotation = (Math.random() - 0.5) * 90;
            const scale = 0.8 + Math.random() * 0.8;

            word.style.transform =
                `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`;

            word.style.color = "#c5d8ff";
            word.style.textShadow = "0 0 20px #8caeff";

        } else {

            word.style.transform = "translate(0, 0) rotate(0deg) scale(1)";

            word.style.color = "#e0e6f5";
            word.style.textShadow = "0 0 15px rgba(170, 195, 255, 0.45)";

        }

    });

});
