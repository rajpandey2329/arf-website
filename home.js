/* =======================================================
   CHIP ANIMATION — PREMIUM BLUEPRINT MOTION BACKGROUND
======================================================= */
const canvas = document.getElementById("chipBoard");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let lines = [];
for (let i = 0; i < 70; i++) {
    lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.7 + Math.random() * 0.7,
        length: 60 + Math.random() * 100
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(0, 185, 255, 0.65)";

    lines.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x + line.length, line.y);
        ctx.stroke();

        line.x += line.speed;
        if (line.x > canvas.width) {
            line.x = -line.length;
            line.y = Math.random() * canvas.height;
        }
    });

    requestAnimationFrame(animate);
}
animate();
