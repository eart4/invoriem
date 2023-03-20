$(document).ready(function(){
    $(".owl-carousel").owlCarousel({

		responsive: {
			// breakpoint from 0 up
			loop: true,
			0: {
				items: 2,
				margin: 32,
				loop: true,
				dots: false,
			},
			// breakpoint from 480 up
			601: {
				items: 2,
				margin: 32,
				loop: true,
				dots: false,
			},
			// breakpoint from 768 up
			1001: {
				items: 2,
				margin: 48,
				dots: false,
				loop: true,
			},
            1835: {
                items: 3,
            }

        }
    });
  });


  const videoBtn = document.querySelector('#video-btn');
  const videoPicture = document.querySelector('.video__picture');
  const videoWrapper = document.querySelector('.video');
  const video = document.querySelector('#video-file');


  videoWrapper.addEventListener('click', function (){
    if(video.paused) {

    videoPicture.classList.add('hidden');
    videoWrapper.classList.remove('video-overlay')
    videoBtn.classList.add('none');


        video.play()
    }else{
        videoPicture.classList.remove('hidden');
        videoWrapper.classList.add('video-overlay')
        videoBtn.classList.remove('none');
        video.pause()
    }
  });

  const mobileNav = document.querySelector('#mobileNav')
  const openNavbtn = document.querySelector('#openMobileNav');
  const closeNavbtn = document.querySelector('#closeMobileNav');
 
  openMobileNav.onclick = function(){
    mobileNav.classList.remove('none')
    document.body.classList.add('no-scroll')
  }

  closeMobileNav.onclick = function(){
    document.body.classList.remove('no-scroll')
    mobileNav.classList.add('none')
  }