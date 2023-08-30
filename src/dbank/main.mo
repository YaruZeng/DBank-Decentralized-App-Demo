import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank { // create a class
  stable var currentValue: Float = 300.0; // create a variable with default as a natural number on base that a positive number is assigned to it
  // currentValue := 300;
  // Debug.print(debug_show(currentValue));

  stable var startTime = Time.now();
  // startTime := Time.now();

  public func topUp(amount: Float) { // create a update function; public: make the function can be called outside this canister
    currentValue += amount;
    // Debug.print(debug_show(currentValue));
  };
  
  public func withDraw(amount: Float) {
    let tempValue: Float = currentValue - amount; // create a constant whose type is int
    if (tempValue >= 0) { // substract the amount only when the final value >= 0
      currentValue -= amount;
      // Debug.print(debug_show(currentValue));
    } else {
      Debug.print("Amount too large, currentValue less than zero. ");
    }
  };

  public query func checkBalance(): async Float { // create a query function (whose speed is faster than update function goes into blockchain)
    return currentValue;
  };

  public func compound() {
    let currentTime = Time.now();
    let timeElapsedNS = currentTime - startTime;
    let timeElapsedS = timeElapsedNS / 1000000000; // convert nanosecond to second
    currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedS)); // keep all elements float
    startTime := currentTime;
  }
}

