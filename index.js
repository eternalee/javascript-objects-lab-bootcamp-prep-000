var recipes = {}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]= value
  return object
}

function updateObjectWithKeyAndValue(object, key, value) {
  object
  return object[key]= value
}