#pragma strict
public class Boost extends MonoBehaviour{
	public var spawnChance:int;
	public var offset:Vector3;
	
	function Start() {
		GameEventManager.gameEnd.Add(onGameOver);
		gameObject.active = false;
		
	}
	function check(position:Vector3):boolean{
		if (gameObject.active || Random.Range(0,5) > spawnChance ){
			return;
		}
		transform.localPosition = position + offset;
		gameObject.active = true;
	}
	
	public function onGameOver():void{
		gameObject.active = false;
	}
}

