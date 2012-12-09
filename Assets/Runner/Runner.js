#pragma strict
public static var distanceTraveled:float; 
public var acceleration:float;
public var jumpForce:Vector3;
public var gameOverDistance:float;


private var allowDoubleJump:boolean;
private var isTouching:boolean;
private var startPosition:Vector3;

function Start () {
	GameEventManager.gameStart.Add(onGameStart);
	GameEventManager.gameEnd.Add(onGameOver);
	gameObject.active = false;
	startPosition = transform.localPosition;
}
function FixedUpdate():void{
	if (isTouching){
		rigidbody.AddForce(acceleration,0.0f,0.0f,ForceMode.Acceleration);
	}
}
function Update ():void{
	//transform.Translate(5f*Time.deltaTime,0,0);
	distanceTraveled = transform.localPosition.x;
	if ((isTouching || allowDoubleJump) && Input.GetButtonDown("Jump")){
		rigidbody.AddForce(jumpForce,ForceMode.VelocityChange);		
	}
	if (!isTouching && allowDoubleJump && Input.GetButtonDown("Jump")){
		allowDoubleJump = false;
	}
	if (transform.localPosition.y <= gameOverDistance){
		Debug.Log("calling game over");
		GameEventManager.TriggerGameEnd();
	}
}
function OnCollisionEnter (collision : Collision):void{
	isTouching = true;
	allowDoubleJump = true;
	//Debug.Log("collided");
}

function OnCollisionExit ():void{
	isTouching = false;
}

function onGameStart():void{	
	this.distanceTraveled = 0;
	transform.localPosition = startPosition;
	Debug.Log("starting runner");
	enabled=true;
	gameObject.active=true;
}

function onGameOver():void{
	enabled=false;
	gameObject.active=false;
	
}