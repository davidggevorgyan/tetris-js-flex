import Figure from '../src/scripts/figure.js';

describe( 'Checking figure functionality', () => {
	it( 'should return a figure', () => {
		const figure = Figure.create();
		expect( Array.isArray( figure.type ) ).toBe( true );
		expect( figure.x ).toBe( 4 );
		expect( figure.y ).toBe( 0 );
	} );

	it( 'should increase y on move down call', () => {
		const figure = Figure.create();
		figure.eraseFigure = jest.fn();
		figure.renderFigure = jest.fn();
		figure.down();
		expect( figure.x ).toBe( 4 );
		expect( figure.y ).toBe( 1 );
	} );

	it( 'should increase x on move right call', () => {
		const figure = Figure.create();
		figure.eraseFigure = jest.fn();
		figure.renderFigure = jest.fn();
		figure.right();
		expect( figure.x ).toBe( 5 );
		expect( figure.y ).toBe( 0 );
	} );

	it( 'should decrease x on move left call', () => {
		const figure = Figure.create();
		figure.eraseFigure = jest.fn();
		figure.renderFigure = jest.fn();
		figure.left();
		expect( figure.x ).toBe( 3 );
		expect( figure.y ).toBe( 0 );
	} );

	it( 'should rotate array on rotate call', () => {
		const figure = new Figure( [
			[0, 0, 1],
			[1, 1, 1],
			[0, 0, 0],
		] );
		figure.eraseFigure = jest.fn();
		figure.renderFigure = jest.fn();
		figure.rotate();
		expect( figure.type ).toEqual( [
			[0, 1, 0],
			[0, 1, 0],
			[0, 1, 1],
		] );
	} );

	it( 'should render figure and erase', () => {
		const figure = new Figure( [
			[0, 0, 1],
			[1, 1, 1],
			[0, 0, 0],
		] );
		figure.x = 0;
		document.body.innerHTML = `
		<div class="flex-cell" id="cell-0-0"></div>
		<div class="flex-cell" id="cell-0-1"></div>
		<div class="flex-cell" id="cell-0-2"></div>
		<div class="flex-cell" id="cell-1-0"></div>
		<div class="flex-cell" id="cell-1-1"></div>
		<div class="flex-cell" id="cell-1-2"></div>
		<div class="flex-cell" id="cell-2-0"></div>
		<div class="flex-cell" id="cell-2-1"></div>
		<div class="flex-cell" id="cell-2-2"></div>`;
		figure.renderFigure();
		expect( document.querySelector( '#cell-0-0' ).style.backgroundColor ).toBe( '' );
		expect( document.querySelector( '#cell-1-1' ).style.backgroundColor ).toBe( 'red' );
		figure.eraseFigure();
		expect( document.querySelector( '#cell-0-0' ).style.backgroundColor ).toBe( '' );
		expect( document.querySelector( '#cell-1-1' ).style.backgroundColor ).toBe( '' );
	} );
} );
