#pragma strict
public static class GameEventManager{
	var gameStart:JSDelegate = new JSDelegate();
	var gameEnd:JSDelegate = new JSDelegate();
	var gotBoost:JSDelegate = new JSDelegate();
	var updateDistance:JSDelegate = new JSDelegate();
	
	public function TriggerGameStart():void{
		if(gameStart != null){
			gameStart.Invoke();
		}
	}
	
	public function TriggerGameEnd():void{
		if(gameEnd != null){
			gameEnd.Invoke();
		}
	}
	
	public function triggerGotBoost():void{
		if (gotBoost != null){
			gotBoost.Invoke();
		}
	}
	
	public function triggerUpdateDistance(distance:int):void{
		if (updateDistance != null){
			updateDistance.Invoke();
		}
	}
}