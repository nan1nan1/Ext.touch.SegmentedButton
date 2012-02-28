Ext.define("Ext.touch.SegmentedButton", {
  extend: "Ext.SegmentedButton",
  xtype: "segmentedbutton-v",
  config: {
    cls: "x-segmentedbutton-v",
    layout: {
      type: "vbox",
      align: "stretch"
    }
  },

  initialize:function(){
    this.callParent(arguments);
    this.element.removeCls("x-segmentedbutton")
  }
});
