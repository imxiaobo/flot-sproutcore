// ==========================================================================
// Project:   Demo - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Demo */

// This page describes the main user interface for your application.  
Demo.mainPage = SC.Page.design({

    // The main pane is made visible on screen as soon as your app is loaded.
    // Add childViews to this pane for views to display immediately on page 
    // load.
    mainPane: SC.MainPane.design({
        childViews: 'tab'.w(),
        tab: SC.TabView.design({
            layout: { top: 5, right: 5, bottom: 5, left: 5 } ,
            items: [
				{ title: 'Welcome', value: 'welcomeView' },
            	{ title: 'Graph', value: 'graphView' }
            ] ,
            itemTitleKey: 'title' ,
            itemValueKey: 'value' ,
			nowShowing: 'welcomeView' ,
            value: 'welcomeView'
        })
    }),

    welcomeView: SC.LabelView.design({
        escapeHTML:NO,
		layout: { centerX:0, centerY:0, width: 500, height:400 } ,
		value: "<p>Flot integration provides framework for integrating Flot into Sproutcore framework.</p>"
    }),

    graphView: SC.View.design({
        layout: { top: 5,right: 5,bottom: 5, left: 5 },
        childViews: 'add graph'.w(),
        add: SC.ButtonView.design({
            layout: { top: 20, right: 40, height: 24, width: 100 } ,
            title: 'AddData',
            action: 'addRandomData',
            target: 'Demo.graphController'
        }),

        graph: Flot.GraphView.design({
            layout: { top: 100, right: 40, bottom: 100, left: 40 } ,
            dataBinding: 'Demo.graphController.arrangedObjects',
            optionsBinding: 'Demo.graphController.options',
            debugInConsole: NO
        })
    })

});
