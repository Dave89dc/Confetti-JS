
function firstTest(){
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
}

function secondTest(){
    const defaults = {
        spread: 360,
        ticks: 50,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ['star'],
        colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
      };
      
      function shoot() {
        confetti({
          ...defaults,
          particleCount: 40,
          scalar: 1.2,
          shapes: ['star']
        });
      
        confetti({
          ...defaults,
          particleCount: 10,
          scalar: 0.75,
          shapes: ['circle']
        });
      }
      
      setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);
}

function thirdTest(){
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var skew = 1;

    function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
    }

    (function frame() {
        var timeLeft = animationEnd - Date.now();
        var ticks = Math.max(200, 500 * (timeLeft / duration));
        skew = Math.max(0.8, skew - 0.001);

        confetti({
            particleCount: 1,
            startVelocity: 0,
            ticks: ticks,
            origin: {
                x: Math.random(),
                // since particles fall down, skew start toward the top
                y: (Math.random() * skew) - 0.2
            },
        colors: ['#000000'],
        shapes: ['circle'],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4)
        });

        if (timeLeft > 0) {
            requestAnimationFrame(frame);
        }
    }());
}

const pippo = document.getElementById('pippo');
const p = document.createElement('p');
const text = document.createTextNode('Ciao');
p.appendChild(text);
pippo.appendChild(p);

// Applicando jquery:

$('#pippo').append($('<p>').text('Ciao Jquery'));

const plutoCollection = document.getElementsByClassName('pluto');
const firstPluto = plutoCollection[0];
console.log(firstPluto);
const pluto2 = $('.pluto')[0];
console.log(pluto2);