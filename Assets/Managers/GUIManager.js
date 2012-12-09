#pragma strict

public var startInstructionText:GUIText;
public var gameOverText:GUIText;
public var runnerText:GUIText;


function Start () {
	GameEventManager.gameStart.Add(onGameStart);
	GameEventManager.gameEnd.Add(onGameEnd);
	gameOverText.enabled=false;
}

function Update () {
	if (Input.GetButtonDown("Jump") == true){
		GameEventManager.TriggerGameStart();
	}
}


public function onGameStart():void{
	Debug.Log('start');
	runnerText.enabled = false;
	startInstructionText.enabled = false;
	gameOverText.enabled = false;
	enabled=false;
}

public function onGameEnd():void{
	runnerText.enabled=true;
	gameOverText.enabled=true;
	startInstructionText.enabled=true;
	enabled=true;
	
}