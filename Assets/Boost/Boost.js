#pragma strict
public class Boost extends MonoBehaviour{
	public var spawnChance:int;
	public var offset:Vector3;
	public var recycleOffset:float;
	
	function Start() {
		GameEventManager.gameEnd.Add(onGameOver);
		gameObject.active = false;
		
	}
	
	function Update(){
		if (transform.localPosition.x + recycleOffset < Runner.distanceTraveled){                 
			gameObject.active = false;
		}
	}
	
	function check(position:Vector3):boolean{
		if (gameObject.active || Random.Range(0,5) > spawnChance ){
			return;
		}
		offset.x = position.x + 5;
		transform.localPosition = position + offset;
		gameObject.active = true;
	}
	
	public function onGameOver():void{
		gameObject.active = false;
	}
	
	public function OnTriggerEnter(other:Collider):void{
		gameObject.active=false;
		GameEventManager.triggerGotBoost();
	}
}

