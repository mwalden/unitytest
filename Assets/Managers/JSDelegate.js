class JSDelegate
{
    // Can't use List.<T> - Compile error: 
    // BCE0015: Node 'callable()' has not been correctly processed.
    // private var callbacks : List.<function()> = new List.<function()>();
    // So we have to use an ArrayList instead.

    private var callbacks : ArrayList = new ArrayList();

    function Add(callback : function())
    {
        callbacks.Add(callback);
    }

    function Remove(callback : function())
    {
        callbacks.Remove(callback);
    }

    function Invoke()
    {
        for (var callback : function() in callbacks)
            callback();
    }
}