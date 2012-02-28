Ext.define("Ext.touch.SegmentedButton", {
  override: "Ext.SegmentedButton",

  config: {
    clsVert: "x-segmentedbutton-v",
    layout: {
      type: "vbox",
      align: "stretch"
    },
    direction: "horizontal"
  },
  
  constructor: function(config){
    if(config.direction === "vertical"){
      config.layout = {
        type: "vbox",
        align: "stretch"
      }
      config.baseCls = this.config.clsVert;
      Ext.Array.each(config.items, function(item){
        item.flex = item.flex || 1;
      });
    }
    this.callParent(arguments);
  }
});
