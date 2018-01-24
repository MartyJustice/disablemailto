Ext.namespace('Zarafa.plugins.disablemailto');

/**
* @class Zarafa.plugins.disablemailto.DisableMailToPlugin
* @extends Zarafa.core.Plugin
*
*/
Zarafa.plugins.disablemailto.DisableMailToPlugin = Ext.extend(Zarafa.core.Plugin, {

	initPlugin : function()
	{
		Zarafa.registerMailto = Ext.emptyFn;
	}

});

Zarafa.onReady(function() {
	container.registerPlugin(new Zarafa.core.PluginMetaData({
		name : 'disablemailto',
		displayName : _('Disable mailto'),
		pluginConstructor : Zarafa.plugins.disablemailto.DisableMailToPlugin
	}));
});
