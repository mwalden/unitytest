#pragma strict

class PlatformManager extends SkylineManager{
	public var minGap:float;
	public var maxGap:float;
	public var minY:float;
	public var maxY:float;
	public var physicMaterials: PhysicMaterial[];
	public var materials: Material[];
	
	function Start () :void{
		super.Start();
	}
	
	function recycle():void{
		super.recycle();
		nextPosition += new Vector3(Random.Range(minGap,maxGap) +5.0f,
									Random.Range(minGap,maxGap),
									nextPosition.z);
		if (nextPosition.y < minY){
			nextPosition.y = minY + maxGap;
		}
		if (nextPosition.y > maxY){
			nextPosition.y = minY + maxGap;
		}
		var o:Transform = array.Pop() as Transform;
		var idx:int = Random.Range(0,materials.Length);
		var mat:Material = materials[idx] as Material;
		var phyMat:PhysicMaterial = physicMaterials[idx] as PhysicMaterial;
		o.renderer.material = mat;
		o.collider.material = phyMat;
		array.Push(o);
		
	}
	
	function Update ():void{
		super.Update();
		
		
	}

}