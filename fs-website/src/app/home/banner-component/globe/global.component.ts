import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
    selector: 'app-globe',
    templateUrl: './globe.component.html',
    styleUrls: ['./globe.component.css']
})

export class GlobeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        $(document).ready(function () {

            /* VARIABLES SETUP */
            /*  Time to wait before intro animation after Globe is visible (ms)  */
            const globe_intro_delay = 1;
            /*  Globe intro animation duration (ms)  */
            const globe_intro_duration = 1;
            /*  Globe intro animation easing  */
            const globe_intro_easing = 'swing';
            /*  Globe continents' animation loop interval (ms) */
            const continents_loop_interval = 8000;
            /* VARIABLES SETUP: END */
            const $globe_fr = $('.globe__worldmap__front'),
                $globe_bk = $('.globe__worldmap__back'),
                $globe = $('.globe');
            const globe_el_x = [0, -473];
            const globe_played = false;
            /*  Set the Globe  */
            // function set_globe() {
                console.log('is globe');
                $.Velocity.hook($globe, 'visibility', 'hidden');
                $.Velocity.hook($globe_fr, 'translateX', globe_el_x[1] + 'px');
                $.Velocity.hook($globe_bk, 'translateX', globe_el_x[0] + 'px');
           // }
            /*  Run Globe intro animation  */
           // function globe_intro() {
                $globe.velocity({ scale: [1, 0], opacity: 1 },
                    { visibility: 'visible', duration: globe_intro_duration, easing: globe_intro_easing });
                continents_loop();
            // }
            /*  Run Globe animation  */
            let i: number;
            function continents_loop() {
                // Note: 'for' loop needed to fix some lag in iOS browsers

                for ( i = 0; i < 99; i++) {
                    $globe_fr.velocity({ translateX: [globe_el_x[0], globe_el_x[1]] },
                         { duration: continents_loop_interval, easing: 'linear' });
                    $globe_bk.velocity({ translateX: [globe_el_x[1], globe_el_x[0]] },
                        { duration: continents_loop_interval, easing: 'linear' });
                }
                $globe_fr.velocity({ translateX: [globe_el_x[0], globe_el_x[1]] },
                    { duration: continents_loop_interval, easing: 'linear' });
                $globe_bk.velocity({ translateX: [globe_el_x[1], globe_el_x[0]] },
                    { duration: continents_loop_interval, easing: 'linear', complete: continents_loop });
            }

            for ( i = 0; i < 99; i++) {
                $globe_fr.velocity({ translateX: [globe_el_x[0], globe_el_x[1]] },
                    { duration: continents_loop_interval, easing: 'linear' });
                $globe_bk.velocity({ translateX: [globe_el_x[1], globe_el_x[0]] },
                    { duration: continents_loop_interval, easing: 'linear' });
            }
            $globe_fr.velocity({ translateX: [globe_el_x[0], globe_el_x[1]] },
                { duration: continents_loop_interval, easing: 'linear' });
            $globe_bk.velocity({ translateX: [globe_el_x[1], globe_el_x[0]] },
                { duration: continents_loop_interval, easing: 'linear', complete: continents_loop });
        });

    }
}
