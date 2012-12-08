#pragma strict
public static class GameEventManager{
	var gameStart:JSDelegate;
	var gameEnd:JSDelegate;
	
	//public var instance:EventManager;
	public function Start():void{
		gameStart = new JSDelegate();
		gameEnd = new JSDelegate();
	}
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
}