// Import the necessary modules
const Scene = require('Scene');
export const Diagnostics = require('Diagnostics');
const Reactive = require('Reactive');

const Patches = require('Patches');


;(async function () {  // Enables async/await in JS [part 1]

  // Find the camera object in the scene
  const camera = await Scene.root.findFirst("Camera");

  // Get the camera's rotation
  const cameraRotation = camera.transform.rotation;

  // Calculate the forward vector from the rotation
  
  /*
  const forwardVector = Reactive.vector(
      -Reactive.sin(cameraRotation.z),
      Reactive.cos(cameraRotation.z),
      0
  );
  */

  // Log the forward vector for debugging
  //Diagnostics.log('Camera Forward Vector: ' + forwardVector.toString())

  // Declare variable to send 3 values
  var pointSignal = Reactive.point(10, 20, 30);

  // Set the vector 3
  //Patches.inputs.setPoint('cameraRot', pointSignal)

})(); // Enables async/await in JS [part 2]
