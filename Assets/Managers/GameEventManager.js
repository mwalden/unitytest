#pragma strict
public static class GameEventManager{
	var gameStart:JSDelegate = new JSDelegate();
	var gameEnd:JSDelegate = new JSDelegate();
	
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