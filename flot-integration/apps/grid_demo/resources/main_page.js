// ==========================================================================
// Project:   GridDemo - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals GridDemo */

// This page describes the main user interface for your application.  
GridDemo.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
	mainPane: SC.MainPane.design({
		childViews: 'add backDrop'.w(),
		add: SC.ButtonView.design({
			layout: { top: 20, right: 40, height: 24, width: 100 },
			title: 'AddData',
			action: 'addRandomData',
			target: 'GridDemo.graphController'
		}),
		backDrop: SC.View.design({
			classNames: 'backdrop rounded'.w(),
			backgroundColor: "#dedede",
			borderStyle: SC.BORDER_GRAY,
			layout: {left: 40, top: 50, bottom: 50, right: 40, minWidth: 615},
			childViews: 'widgetView'.w(),
			widgetView: SC.ScrollView.design({
				classNames: 'rounded'.w(),
				backgroundColor: 'white',
				layout: {top: 20, bottom: 20, left: 20, right: 20, minWidth: 300},
				hasHorizontalScroller: NO,
				contentView: SC.GridView.design({
					layout: {left: 10, right: 10, top: 10, bottom: 10},
					classNames: 'rounded'.w(),
					rowHeight: 200,
					columnWidth: 300,
					contentBinding: 'GridDemo.graphController',
					isSelectable: NO,
					exampleView: GridDemo.GridFlot
				})
			})
		})
	})
});
