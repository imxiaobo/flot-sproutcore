// ==========================================================================
// Project:   GridDemo.graphController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals GridDemo */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
GridDemo.graphController = SC.ArrayController.create(
/** @scope GridDemo.graphController.prototype */ {

	content: [],
	addRandomData: function() {
		var content = this.get('content'),
			options = this.get('options'),
			data = [];
		
		for (var i=0; i<100; i++) {
			data.pushObject([i, Math.random()*10]);
		}
		content.pushObject(
			SC.Object.create({
				data: data,
				options: null
			})
		);
	}
}) ;
