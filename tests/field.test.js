import Field from '../src/scripts/field.js';
import Figure from '../src/scripts/figure.js';

describe( 'Checking field creation', () => {
	it( 'should return an array of expected size', () => {
		const field = new Field( 20, 30 );
		expect( field.createField().length ).toBe( 20 );
		expect( field.createField()[0].length ).toBe( 30 );
	} );

	it( 'should render the field when render is called', () => {
		const field = new Field( 3, 3 );
		document.body.innerHTML = `
			<div id="field">
				<div class="flex-cell" id="cell-0-0"></div>
			</div>
		`;
		field.fieldData[0][0] = 1;
		field.renderField();
		expect( document.querySelectorAll( '[id^="cell"]' ).length ).toBe( 9 );
		expect( document.querySelector( '#cell-0-0' ).style.backgroundColor ).toBe( 'red' );
		expect( document.querySelector( '#cell-0-1' ).style.backgroundColor ).toBe( '' );
	} );
} );

describe( 'Checking field and figure merge', () => {
	it( 'should merge a received figure with the field ', () => {
		const field = new Field( 3, 3 );
		const figure = new Figure(
			[
				[0, 0, 1],
				[1, 1, 1],
				[0, 0, 0],

			],
		);
		figure.x = 0;
		field.mergeFieldAndFigure( figure );
		for ( let y = 0; y < figure.type.length; y++ ) {
			for ( let x = 0; x < figure.type[0].length; x++ ) {
				expect( field.fieldData[y][x] ).toBe( figure.type[y][x] );
			}
		}
	} );

	it( 'should cleanup a row when it\'s full', () => {
		document.body.innerHTML = `
			<div id="menu">
					<div id="score">0</div>
			</div>
			<div id="field">
				<div class="flex-cell" id="cell-0-0"></div>
			</div>
		`;
		const field = new Field( 3, 3 );
		field.fieldData[2] = Array( 3 ).fill( 1 );
		expect( field.fieldData[2][0] ).toBe( 1 );
		field.fullRowCleanup();
		expect( field.fieldData[2][0] ).toBe( 0 );
	} );

} );

describe( 'Checking collisions', () => {
	it( 'should merge a received figure with the field ', () => {
		const field = new Field( 3, 3 );
		const figure = new Figure(
			[
				[0, 0, 1],
				[1, 1, 1],
				[0, 0, 0],

			],
		);
		figure.x = 0;
		field.mergeFieldAndFigure( figure );
		for ( let y = 0; y < figure.type.length; y++ ) {
			for ( let x = 0; x < figure.type[0].length; x++ ) {
				expect( field.fieldData[y][x] ).toBe( figure.type[y][x] );
			}
		}
	} );

	it( 'should return a right collision if there is no space left', () => {
		const field = new Field( 4, 4 );
		const figure = new Figure(
			[
				[0, 0, 1],
				[1, 1, 1],
				[0, 0, 0],

			],
		);
		figure.x = 0;
		expect( field.hasRightCollisions( figure ) ).toBe( false );
		figure.x = 1;
		expect( field.hasRightCollisions( figure ) ).toBe( true );
	} );

	it( 'should return a left collision if there is no space left', () => {
		const field = new Field( 4, 4 );
		const figure = new Figure(
			[
				[0, 0, 1],
				[1, 1, 1],
				[0, 0, 0],

			],
		);
		figure.x = 1;
		expect( field.hasLeftCollisions( figure ) ).toBe( false );
		figure.x = 0;
		expect( field.hasLeftCollisions( figure ) ).toBe( true );
	} );

	it( 'should return a down collision if there is no space left', () => {
		const field = new Field( 3, 3 );
		const figure = new Figure(
			[
				[0, 0, 1],
				[1, 1, 1],
				[0, 0, 0],

			],
		);
		figure.x = 0;
		expect( field.hasDownCollisions( figure ) ).toBe( false );
		figure.down();
		expect( field.hasDownCollisions( figure ) ).toBe( true );
	} );

	it( 'should return a rotate collision if there is no space left', () => {
		const field = new Field( 3, 3 );
		const figure = new Figure(
			[
				[0, 0, 1],
				[1, 1, 1],
				[0, 0, 0],

			],
		);
		figure.x = 0;
		expect( field.hasRotateCollisions( figure ) ).toBe( false );
		figure.rotate();
		figure.left();
		expect( field.hasRotateCollisions( figure ) ).toBe( true );
	} );

	it( 'should return a rotate collision if there is another figure', () => {
		const field = new Field( 3, 3 );
		field.fieldData[2][1] = 1;
		const figure = new Figure(
			[
				[0, 0, 1],
				[1, 1, 1],
				[0, 0, 0],

			],
		);
		figure.x = 0;
		expect( field.hasRotateCollisions( figure ) ).toBe( true );
	} );

	it( 'Should end the game when there is no vertical space left', () => {
		document.body.innerHTML = `
		<body>
			<div id="game-over" style="">Game Over</div>
			<div id="main" timerid="1"></div>
		</div>
		</body>`;
		const field = new Field( 3, 3 );
		const figure = new Figure(
			[
				[0, 0, 1],
				[1, 1, 1],
				[0, 0, 0],

			],
		);
		figure.x = 0;
		expect( field.isGameOver( figure ) ).toBe( false );
		field.mergeFieldAndFigure( figure );
		expect( field.isGameOver( figure ) ).toBe( true );
	} );
} );
