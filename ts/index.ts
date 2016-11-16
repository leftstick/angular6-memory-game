require.ensure(['splash-screen/dist/splash.min.css', 'splash-screen'], function(require) {

    (<any>require('splash-screen/dist/splash.min.css')).use();
    (<any>require('splash-screen')).Splash.enable('circular');
});

require.ensure(['splash-screen', './launcher'], function(require) {

    const Launcher = (<any>require('./launcher')).default;
    (new Launcher()).run();
});