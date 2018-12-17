$(document).ready(function(){
	$('#body').fadeIn();

	$('.btnEN1').click(function(){
		$('.EN').toggleClass('ENshow')
	});

	$('.btnEN2').click(function(){
		$('.EN2').toggleClass('ENshow2')
	});

	$('.btnEN3').click(function(){
		$('.EN3').toggleClass('ENshow3')
	});



	// page 4. 
var slideIndex = 1; 
	showSlides(slideIndex);

	
	// n represents which slides to show, in this case it's 0 
	function showSlides(n){
		// setting var slides - with the class name .mySlides
		var slides = $(".Slidess");
		var dots = $(".dot");


		// if user click next, went on last image, we're gonna set the slideIndex to 1 
		if (n > slides.length){
			slideIndex = 1; 
		}

		// if user click previous when on 1 image, we're gonna send them to the last image
		if (n < 1){
			slideIndex = slides.length; 
		}

		//looping through my slides and get rid of them 
		for (var i=0; i < slides.length; i++){
			slides[i].style.display="none";
		}


		// replaceing class name for dotsonce it's active 
		for (var i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace("active","")
		}

		slides[slideIndex-1].style.display = "block";
		dots[slideIndex-1].className += " active";
		// the space before active is needed. 
	};
	


	$(".dot").click(function(){
		// gotta look at var of index for .dots, and select in this index
		//index will be 0,1,2 or 3; but for make it logically more simpler we do it 1,2,3,4; so slideIndex = index + 1 
		var index = $(".dot").index(this);
		slideIndex = index + 1;
		showSlides(slideIndex) ;
	});


 	$(".Slidess").fadeout();
});
















































// $(document).ready(function(){
// 	var $body=$('html, body'),
// 	var content = $('#body').smoothState({
// 		onStart:{
// 			duration:250;
// 			render:function(){
// 				content.toggleAnimationClass('is-exiting');


// 				$body.animate({
// 					'scrollTop':0
// 				});
// 			}
// 		}
// 	}).data('smoothState');

// })


// $(document).ready(function(){
// 	$('.memberinfo1').hover(function(){
// 		$('.description').toggleClass('descriptionshow');
// 	});
// })



// $(document).ready(function(){

// 	$('#aboutbutton').click(function(){
// 		$('.dropdown-content').toggleClass('.is-open');
// 	});
// });



// $(document).ready(function(){
	
// 	//when the user scroll- do something 
// 	var initialScrollPos = 0; //call it intitial scroll positoin for starting

// 	//height gives us height in pixels; over here /5 because 500vh 
// 	var heightOfViewport = $('body').height()/5; 

// 	var colors =["#c9cfd8","#445f87","#d8ddd7","#83967e","#323d2f"];
// 	var bannerText= ["Le jokes are funny", "pain", "soreness","life" ,"ded"]
// 	var sectionIndex=0; //how many times passed the height of the viewport have we scrolled? 


// 	$(window).on('scroll', function(){
// 		var currentScrollPos = $(this).scrollTop();
// 		console.log(currentScrollPos);
		

// 		//my initialScrollPos - how far up/down have you scrolled? 
// 		//my currentScrollPos - how far up/down have you currently scrolled 


// 		//if numbers are going up = im scrolling down 
// 			// if i enter this statement, user is entering a new section 
// 		if(currentScrollPos > initialScrollPos){
// 			console.log("yae scrolling down");
// 			if($(window).scrollTop()>(heightOfViewport)*(sectionIndex+1)){
// 				sectionIndex += 1; //add one for the index
// 				$(".banner").html(bannerText[sectionIndex]);
// 				// $(".banner").html("Now youre in the new section!");
// 				$("body").css("background", colors[sectionIndex]);

// 			} 

// 			//else statement is going into a old section 
// 		}else{
// 			if($(window).scrollTop()<= heightOfViewport*(sectionIndex)){
// 				sectionIndex -=1; //minus one 
// 				$(".banner").html(bannerText[sectionIndex]);
// 				// $(".banner").html("My jokes are funny");
// 				$("body").css("background", colors[sectionIndex]);

// 			}
// 			console.log("up!");
// 		}

// 		// intitialScrollPos = currentScrollPos

// 	});
// });