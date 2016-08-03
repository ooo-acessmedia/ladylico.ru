miniShop2.plugin.pluginname = {
    getFields: function (config) {
        return {
            curve: {
                xtype: 'minishop2-combo-options',
                description: '<b>[[+curve]]</b><br />' + _('ms2_product_curve_help')
            },
            width: {
                xtype: 'minishop2-combo-options',
                description: '<b>[[+width]]</b><br />' + _('ms2_product_width_help')
            },

            length: {
                xtype: 'minishop2-combo-options',
                description: '<b>[[+length]]</b><br />' + _('ms2_product_length_help')
            }
        }
    },

    getColumns: function () {
        return {
            curve: {width: 50, sortable: false, editor: {xtype: 'minishop2-combo-options', name: 'curve'}},
            width: {width: 50, sortable: false, editor: {xtype: 'minishop2-combo-options', name: 'width'}},
            length: {width: 50, sortable: false, editor: {xtype: 'minishop2-combo-options', name: 'length'}}
        }
    }
};