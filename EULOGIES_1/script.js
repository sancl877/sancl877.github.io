document.body.className += ' fade-out';

 $(function() {
    $('body').removeClass('fade-out');
	});

$(".memory").click(function(){
		$('.button').removeClass('selected');
    	$(this).addClass('selected');
		document.getElementById('box2').innerHTML = "";
		document.getElementById('box2').innerHTML = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
	});
$(".description").click(function(){
		$('.button').removeClass('selected');
    	$(this).addClass('selected');
		document.getElementById('box2').innerHTML = "";
		document.getElementById('box2').innerHTML = "An 8.5' x 11' piece of computer paper placed inside a wooden frame. The content of the letter is: </br> 1. You shall not let your love for God grow cold (Rev: 2:3-5 TEV) <br> 2. You shall not forsake your duty to worship (Rev: 2:3-5 TEV) <br> 3. You shall not abandon the Church of Christ" ;
	});
