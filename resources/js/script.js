/*jslint indent: 4 */
/*global ClassFoo, ClassBar, someFunction */

$(document).ready(function() {
   
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        
        nav.slideToggle(200);
    });
    
});