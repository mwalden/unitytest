#pragma strict

public var startInstructionText:GUIText;
public var gameOverText:GUIText;
public var runnerText:GUIText;
public var boostText:GUIText;
//public var distanceText:GUIText;

private var boost:int;
//private var distance:int;

function Start () {
	boost = 0;
	//distance = 0;
	GameEventManager.gameStart.Add(onGameStart);
	GameEventManager.gameEnd.Add(onGameEnd);
	GameEventManager.gotBoost.Add(onGotBoost);
	//GameEventManager.updateDistance.Add(onUpdateDistance);
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

public function onGotBoost():void{
	boost += 1;
	boostText.text = boost.ToString();
}

public function onUpdateDistance(dist:int):void{
	//distance = dist;
	//distanceText.text = distance.ToString();
}