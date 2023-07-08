// Alyssa was asked to write an implementation of a rolling buffer. You can add and remove elements from a rolling buffer.
// However, once the buffer becomes full, any new elements will displace the oldest elements in the buffer.

// She said "Take your pick. Do you prefer push() or concat() for modifying the buffer?".

// Is there a difference between these implementations, other than the method she used to add an element to the buffer?
//You may assume that newElement will always be a primitive value.

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// push() will  mutate the array while concat() will not. In the first implementation, the caller will see that the buffer array is different when the function returns.