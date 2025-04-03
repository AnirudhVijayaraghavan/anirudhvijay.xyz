// src/matrix.js

export function runMatrix() {
  const c = document.getElementById("c");
  if (!c) return; // if canvas not found, do nothing
  const ctx = c.getContext("2d");

  // Set canvas to full screen
  c.height = window.innerHeight;
  c.width = window.innerWidth;

  // Define matrix characters (modify as needed)
  const matrixStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
  // Using a different set of characters (example Unicode characters)
  const matrixUnicode = "\u0B85\u0B86\u0B87\u0B88\u0B89\u0B8A\u0B8E\u0B8F\u0B90\u0B92\u0B93\u0B94\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8\u0BA9\u0BAA\u0BAE\u0BAF\u0BB0\u0BB1\u0BB2\u0BB3\u0BB4\u0BB5\u0BB6\u0BB7\u0BB8\u0BB9\u0BD0";
  const matrixArr = matrixUnicode.split("");

  const fontSize = 15;
  const columns = Math.floor(c.width / fontSize);
  const drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "crimson";
    ctx.font = `${fontSize}px arial`;

    for (let i = 0; i < drops.length; i++) {
      const text = matrixArr[Math.floor(Math.random() * matrixArr.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      // Reset drop randomly when it goes off screen
      if (drops[i] * fontSize > c.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 50);
}
