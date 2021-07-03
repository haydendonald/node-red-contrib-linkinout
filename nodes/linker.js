module.exports = function(RED)
{
    //Main node definition
    function Linker(config)
    {
        RED.nodes.createNode(this, config);
        var node = this;
        var globalMsgCallbacks = [];

        //Send a msg object to all subscribed nodes
        node.sendMsg = function(msg) {
            for(var i = 0; i < globalMsgCallbacks.length; i++) {
                globalMsgCallbacks[i](msg);
            }
        }

        node.addMsgCallback = function(func) {globalMsgCallbacks.push(func);}
    }

    //Add the node
    RED.nodes.registerType("linker", Linker);
}
