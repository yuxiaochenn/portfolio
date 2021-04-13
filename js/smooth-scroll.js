$(document).on('click', '#top', function(evt) {
    if(evt.target.hash !== '') {
        $('html, body').animate({
          scrollTop: $( "#wrap").offset().top - 130
        }, 800);
        return false;
    }
});

$(document).on('click', '#demo-button', function(evt) {
    if(evt.target.hash !== '') {
        $('html, body').animate({
          scrollTop: $( "#demo").offset().top
        }, 800);
        return false;
    }
});

$(document).on('click', '#demo-button2', function(evt) {
    if(evt.target.hash !== '') {
        $('html, body').animate({
          scrollTop: $( "#demo").offset().top
        }, 800);
        return false;
    }
});

$(document).on('click', '#prototype-button', function(evt) {
    if(evt.target.hash !== '') {
        $('html, body').animate({
          scrollTop: $( "#prototype").offset().top
        }, 800);
        return false;
    }
});

$(document).on('click', '#prototype-button2', function(evt) {
    if(evt.target.hash !== '') {
        $('html, body').animate({
          scrollTop: $( "#prototype").offset().top
        }, 800);
        return false;
    }
});
