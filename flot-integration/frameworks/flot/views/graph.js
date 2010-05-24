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

  // TODO: Add your own code here.
	
	data: null ,	
	
	options: null , 
	
	concatenatedProperties: ['options'] ,
	
	render: function(context, firstTime) {
		sc_super() ;
		if(this.get('layer') && this.get('isVisibleInWindow')) {
			if((this.get('frame').width > 0) && (this.get('frame').height > 0)) {
				if(this.get('data')) {
					Flot.plot(this.get('layer'),
			    	  	  	  this.get('data').toArray(),
				  	  	  	  this.get('options')) ;
				//	console.log('render');
				}
			}
		}				
	} ,
				
	viewDidResize: function() {
		sc_super() ;
		this.setLayerNeedsUpdate() ;
	} ,	
	
	plotDataDidChange: function() {
		this.setLayerNeedsUpdate() ;
		//console.log('data changed');
	}.observes('.data','.data.[]'),
	
	plotOptionsDidChange: function() {
		this.setLayerNeedsUpdate() ;
		//console.log('options changed');	
	}.observes('.options'),
	
	visibilityDidChange: function() {
		if(this.get('isVisibleInWindow') && this.get('isVisible')) {
			console.log('visibility changed');
			this.setLayerNeedsUpdate() ;
		}		
	}.observes('isVisibleInWindow','isVisible'),
	
	layerDidChange: function() {
		//console.log('layerchanged');
		this.setLayerNeedsUpdate() ;	
	}.observes('layer'),

	layoutDidChange: function() {
		sc_super() ;
		//console.log('layout changed');
		this.setLayerNeedsUpdate() ;
	} ,
	
	updateLayerLocationIfNeeded: function() {
		sc_super() ;
		//console.log('layer location update');
		this.setLayerNeedsUpdate() ;
	} ,
	
	setLayerNeedsUpdate: function() {
		this.invokeOnce(function() {
			this.set('layerNeedsUpdate', YES);
		//	console.log('need update') ;
		}) ;
		
	}
	

});
