// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block9")
                .setDock("width")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("25.166666666666668em")
                .setHeight("66.66666666666667em")
                .setPosition("relative")
            );
            
            host.xui_ui_block9.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput5")
                .setDirtyMark(false)
                .setLeft("-0.9166666666666666em")
                .setTop("26.583333333333332em")
                .setWidth("25.5em")
                .setHeight("3.5em")
                .setLabelSize("8em")
                .setLabelCaption("           1.4")
                .setType("number")
            );
            
            host.xui_ui_block9.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput11")
                .setDirtyMark(false)
                .setLeft("-0.9166666666666666em")
                .setTop("31.583333333333332em")
                .setWidth("25.5em")
                .setHeight("3.5em")
                .setLabelSize("8em")
                .setLabelCaption("0.8")
                .setType("number")
            );
            
            host.xui_ui_block9.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput12")
                .setDirtyMark(false)
                .setLeft("-0.9166666666666666em")
                .setTop("36.583333333333336em")
                .setWidth("25.5em")
                .setHeight("3.5em")
                .setLabelSize("8em")
                .setLabelCaption("0.22")
                .setType("number")
            );
            
            host.xui_ui_block9.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput13")
                .setDirtyMark(false)
                .setLeft("-0.9166666666666666em")
                .setTop("41.583333333333336em")
                .setWidth("25.5em")
                .setHeight("3.5em")
                .setLabelSize("8em")
                .setLabelCaption("sel3a")
                .setType("number")
            );
            
            host.xui_ui_block9.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput14")
                .setDirtyMark(false)
                .setLeft("-0.9166666666666666em")
                .setTop("46.583333333333336em")
                .setWidth("25.5em")
                .setHeight("3.5em")
                .setLabelSize("8em")
                .setLabelCaption("kamyoun")
                .setType("number")
            );
            
            host.xui_ui_block9.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput15")
                .setDirtyMark(false)
                .setLeft("-0.9166666666666666em")
                .setTop("51.583333333333336em")
                .setWidth("25.5em")
                .setHeight("3.5em")
                .setLabelSize("8em")
                .setLabelCaption("avoir")
                .setType("number")
            );
            
            host.xui_ui_block9.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput16")
                .setDirtyMark(false)
                .setLeft("-0.9166666666666666em")
                .setTop("56.583333333333336em")
                .setWidth("25.5em")
                .setHeight("3.5em")
                .setLabelSize("8em")
                .setLabelCaption("moudhakra")
                .setType("number")
            );
            
            host.xui_ui_block9.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput17")
                .setDirtyMark(false)
                .setLeft("-0.9166666666666666em")
                .setTop("61.583333333333336em")
                .setWidth("25.5em")
                .setHeight("3.5em")
                .setLabelSize("8em")
                .setLabelCaption("0.6")
                .setType("number")
            );
            
            host.xui_ui_block9.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input6")
                .setDirtyMark(false)
                .setLeft("2.4166666666666665em")
                .setTop("-0.08333333333333333em")
                .setWidth("22.166666666666668em")
                .setHeight("3.3333333333333335em")
                .setLabelSize("8em")
                .setLabelCaption("Text Area")
                .setMultiLines(true)
            );
            
            host.xui_ui_block9.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7")
                .setDirtyMark(false)
                .setLeft("2.4166666666666665em")
                .setTop("4.083333333333333em")
                .setWidth("22.166666666666668em")
                .setHeight("3.4166666666666665em")
                .setZIndex(1004)
                .setLabelSize("8em")
                .setLabelCaption("Text Area")
                .setMultiLines(true)
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});