'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('angular-gamestore', function () {
    beforeEach(function () {
        browser().navigateTo('../../../angular-gamestore/app/index.html');  //TODO l'url dépend d'où est lancé Node.js
    });

    it('should automatically redirect to /catalog when location hash/fragment is empty', function () {
        expect(browser().location().url()).toBe("/catalog");
    });

    describe('Catalog view', function () {
        beforeEach(function () {
            browser().navigateTo('#/catalog');
        });
        it('should render catalog when user navigates to /catalog', function () {
            expect(element('h1').text()).toMatch(/Game Store/);
            expect(element('#catalog').count()).toBe(1);
        });
    });

    describe('Game view', function () {
        beforeEach(function () {
            browser().navigateTo('#/game/AGOT');
        });
        it('should render game details view when user navigates to #/game/AGOT', function () {
            expect(element('h2').text()).toMatch(/Trône/);  //TODO anglais
        });
    });

    describe('Cart view', function () {
        beforeEach(function () {
            browser().navigateTo('#/cart');
        });
        it('should render empty cart view when user navigates to #/cart', function () {
            expect(element('h2').text()).toMatch(/panier/);  //TODO anglais
            expect(repeater('#cart tr.game').count()).toEqual(0);
        });
    });

    describe('Add to cart ; different ways', function () {
        beforeEach(function () {
            browser().navigateTo('#/cart');
            expect(repeater('#cart tr.game').count()).toEqual(0);
        });
        it('Add to cart from catalog', function () {
            browser().navigateTo('#/catalog');
            expect(element('#catalog li').count()).toBeGreaterThan(1);
            element('#catalog li:nth-child(1) .add').click();
            browser().navigateTo('#/catalog');
            element('#catalog li:nth-child(2) .add').click();
            browser().navigateTo('#/cart');
            expect(repeater('#cart tr.game').count()).toEqual(2);
        });
        it('Add to cart from game pages', function () {
            browser().navigateTo('#/catalog');
            expect(element('#catalog li').count()).toBeGreaterThan(1);
            element('#catalog li:nth-child(1) img').click();
            element('.add').click();
            browser().navigateTo('#/catalog');
            element('#catalog li:nth-child(2) img').click();
            element('.add').click();
            browser().navigateTo('#/cart');
            expect(repeater('#cart tr.game').count()).toEqual(2);
        });
    });


});
