// alert('hello!');
// console.log();
$('a').each( (function(index) {
	if ($(this).attr('href').slice(-4) === '.wav') {
		$(this).after(
			$('<a class="inline-audio-play-button-ted" onclick="this.firstChild.play()">').append(
				$('<audio>').append(
					$('<source type="audio/wav">').attr('src', $(this).attr('href'))
				), 'P'
			)
			
		);
	}
})
);