// ==========================================================================
// Project:   GridDemo.GridFlot
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals GridDemo */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
GridDemo.GridFlot = Flot.GraphView.extend(SC.Control,
/** @scope GridDemo.GridFlot.prototype */ {

	contentDidChange: function() {
		var content = this.get('content');
		this.set('data', [content.get('data')]);
		this.set('options', content.get('options'));
	},
	init: function() {
		sc_super();
		this.contentDidChange();
	}

});
