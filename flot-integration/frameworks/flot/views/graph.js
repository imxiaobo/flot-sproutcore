// ==========================================================================
// Project:   Flot.GraphView
// Copyright: ©2010 Bo Xiao <mail.xiaobo@gmail.com>, Inc.
// ==========================================================================
/*globals Flot */

/** @class

  (Document Your View Here)

  @extends SC.View
*/

sc_require('core.js');
Flot.GraphView = SC.View.extend(
/** @scope Flot.GraphView.prototype */ {
	
	data: null ,
	options: null ,
	debugInConsole: true ,
	concatenatedProperties: ['options'] ,
	render: function(context, firstTime) {
		sc_super();
		if(this.get('layer') && this.get('isVisibleInWindow')) {
			if((this.get('frame').width > 0) && (this.get('frame').height > 0)) {
				if(this.get('data')) {
					Flot.plot(this.get('layer'),
			    	  	  	  this.get('data').toArray(),
				  	  	  	  this.get('options')) ;
					if (this.debugInConsole) console.log('render');
				}
			}
		}
	},
	plotDataDidChange: function() {
		this.setLayerNeedsUpdate() ;
		if (this.debugInConsole) console.log('data changed');
	}.observes('.data','.data.[]'),
	plotOptionsDidChange: function() {
		this.setLayerNeedsUpdate() ;
		if (this.debugInConsole) console.log('options changed');	
	}.observes('.options'),
	visibilityDidChange: function() {
		if(this.get('isVisibleInWindow') && this.get('isVisible')) {
			if (this.debugInConsole) console.log('visibility changed');
			this.setLayerNeedsUpdate() ;
		}		
	}.observes('isVisibleInWindow','isVisible'),
	layerDidChange: function() {
		if (this.debugInConsole) console.log('layerchanged');
		this.setLayerNeedsUpdate() ;	
	}.observes('layer'),
	layoutDidChange: function() {
		sc_super();
		if (this.debugInConsole) console.log('layout changed');
		this.setLayerNeedsUpdate() ;
	},
	updateLayerLocationIfNeeded: function() {
		sc_super() ;
		if (this.debugInConsole) console.log('layer location update');
		this.setLayerNeedsUpdate() ;
	},
	setLayerNeedsUpdate: function() {
		this.invokeOnce(function() {
			this.set('layerNeedsUpdate', YES);
			if (this.debugInConsole) console.log('need update') ;
		});
		
	},
	viewDidResize: function() {
		sc_super();
		this.setLayerNeedsUpdate() ;
		//if (this.debugInConsole) 
		console.log('view did resize');
	}.observes('layout'),
	parentViewDidResize : function() {
		sc_super();
		this.setLayerNeedsUpdate();
		//if (this.debugInConsole) 
		console.log('parent did resize');
	}

});
