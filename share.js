let shareButton = document.getElementById("shareBtn");
let shareSuccessMsg = document.getElementById("shareSuccess");
let url = window.document.location.href;

shareButton.addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({
        title: 'Poseidon Solar Calculator',
        text: 'Hey! Checkout this cool app for calculator the amount of solar power needed for your appliances!',
        url: url
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(err => {
        console.log(`Couldn't share because of`, err.message);
      });
    } else {
      shareSuccessMsg.innerHTML = "web share not supported";
    }
  });