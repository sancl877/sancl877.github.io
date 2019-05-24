function update(e){
  var x = e.clientX || e.touches[0].clientX;
  var y = e.clientY || e.touches[0].clientY;

  document.documentElement.style.setProperty('--cursorX', x + 'px');
  document.documentElement.style.setProperty('--cursorY', y + 'px')
};

document.addEventListener('mousemove',update);
document.addEventListener('touchmove',update);

function menu(){
  $('.lightbox').removeClass("hide");
    };
$('.stay').click(function() {
  $('.lightbox').addClass('hide');
  });

$('.leave').click(function() {
 window.location='homepage.html'
  });


$('.right').click(function() {
 $('.body').addClass('green');
  });

  document.body.className += ' fade-out';
  $(function() {
    $('body').removeClass('fade-out');
});


