var idoAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.cbp-af-header' ),
		quote = document.querySelector( '.ido-quote' ),
		quoteCode = document.querySelector( '.ido-code-body' ),
		didScroll = false,
		changeHeaderOn = 300,
		halfHeader = 150,
		lastScrollTop = 0;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 200 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		var delta = sy - lastScrollTop;
		if ( delta > 0 && sy < halfHeader ) {
			sy = halfHeader;
			window.scrollTo(0, halfHeader);
			classie.add( header, 'cbp-af-header-shrink' );
			classie.add( quoteCode, 'hidden' );
			classie.remove( quote, 'hidden' );
		}
		else if (sy >= halfHeader) {
			classie.add( header, 'cbp-af-header-shrink' );
			classie.add( quoteCode, 'hidden' );
			classie.remove( quote, 'hidden' );
		}
		else if ( sy < halfHeader ) {
			classie.remove( header, 'cbp-af-header-shrink' );
			classie.remove( quoteCode, 'hidden' );
			classie.add( quote, 'hidden' );
		}
		didScroll = false;
		lastScrollTop = sy;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();