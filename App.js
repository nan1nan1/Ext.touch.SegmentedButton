Ext.application({
  launch: function() {
    Ext.create("Ext.Panel", {
      fullscreen: true,
      items: [
        {xtype: "toolbar", title: "vertical segmented button", docked: "top"},
        { 
          xtype: "segmentedbutton-v", 
          items: [
            {text: "Option 1"},
            {text: "Option 2"},
            {text: "Option 3"}
          ]
        }
      ]
    });
  }
});
