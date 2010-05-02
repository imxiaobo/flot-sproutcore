// ==========================================================================
// Project:   Demo.graphController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Demo */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Demo.graphController = SC.ArrayController.create(
/** @scope Demo.graphController.prototype */ {
	
	content: [
		SC.Object.create({label: 'set1', data:[[0,0]]}) ,
		SC.Object.create({label: 'set2', data:[[0,0]]})	
	] ,
	options: SC.Object.create({}) ,
	

  // TODO: Add your own code here.
	
	addRandomData: function() {
		var data = this.get('content').copy() ;
		data.objectAt(0).get('data').pushObject([data.objectAt(0).getPath('data.length') + 1, Math.random()*10]);
		data.objectAt(1).get('data').pushObject([data.objectAt(1).getPath('data.length') + 1, Math.random()*10]);
		this.set('content', data) ;
	}

}) ;
