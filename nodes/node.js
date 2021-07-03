module.exports = function(RED)
{
    //Main Function
    function LinkNode(config)
    {
        RED.nodes.createNode(this, config);
        var name = config.name;
        var linker = RED.nodes.getNode(config.linker);
        var node = this;
        
        //Msg callback
        linker.addMsgCallback(function(msg) {
            node.status({fill:"green",shape:"dot",text:"Incoming!"});
            node.send(msg);
        });

        //When a request is received on the input
        this.on("input", function(msg) {
            linker.sendMsg(msg);
        });
    }

    RED.nodes.registerType("link-node", LinkNode);
}
