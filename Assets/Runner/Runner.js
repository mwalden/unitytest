#pragma strict
public static var distanceTraveled:float; 
public var acceleration:float;
public var jumpForce:Vector3;

private var allowDoubleJump:boolean;
private var isTouching:boolean;
function Start () {

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
}
function OnCollisionEnter (collision : Collision):void{
	isTouching = true;
	
	allowDoubleJump = true;
}

function OnCollisionExit ():void{
	isTouching = false;
}