$(document).ready(function() {
    //* LOAD MAP *//
    function initmap(){
        var contact_map;
        function start_contact_map(){
            contact_map = new GMaps({
                div: '#contact_map',
                lat: '39.3552916',
                lng: '3.1280862',
                scrollwheel: false,
                zoom: 17,
            });
            contact_map.drawOverlay({
                lat: '39.3552916',
                lng: '3.1280862',
                content: '<div class="map-marker"></div>'
            });
        }

        if( $('#contact_map').is(':visible') ){
            start_contact_map();
        };
    };
    initmap();
});