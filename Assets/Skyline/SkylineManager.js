#pragma strict

public var prefab:Transform;
public var numOfObjects:int;
public var minSize:Vector3;
public var maxSize:Vector3; 
public var recycleOffset:int;

protected var nextPosition:Vector3;
protected var array:Array;


function Start ():void {
	array = new Array();
	nextPosition = transform.localPosition;
	var height:float = Random.Range(minSize.y,maxSize.y);
	for (var i:int = 0;i<numOfObjects;i++){
		var o:Transform = Instantiate(prefab);
		//o.tag = x.ToString();
		array.push(o);
	}
	
	for (var x:int = 0;x<numOfObjects;x++){
		recycle();
	}
	
	
	
	
}

function recycle():void{
	var scale:Vector3 = new Vector3(Random.Range(minSize.x, maxSize.x),
									Random.Range(minSize.y, maxSize.y),
									Random.Range(minSize.z, maxSize.z));
									
	var position:Vector3 = nextPosition;
	position.x += scale.x  * 0.5f;
	position.y += scale.y  * 0.5f;
	
	var o:Transform = array.Shift() as Transform;
	o.localScale = scale;
	o.localPosition = position;
	nextPosition.x += scale.x;
	array.Push(o);
	
}

function Update ():void{
	var o:Transform = array[0] as Transform;
	if (o.localPosition.x + recycleOffset < Runner.distanceTraveled){
		recycle();
	}
}