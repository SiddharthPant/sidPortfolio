$( document )
	.ready( function () {
		$( '.btn-primary' ).on( 'click', function () {
			whichtab = $( this ).data( 'opentab' );
			$( '#TaskListDialog' ).modal( 'show' );
			$( '.nav-tabs li:eq(' + whichtab + ') a' )
				.tab( 'show' );
		} );
	} );
