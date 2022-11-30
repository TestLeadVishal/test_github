// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var suidTime = new Date();
var nsuidTime = suidTime.getTime();
var dbsuiID = nsuidTime+parseInt(10000000000000 * Math.random());

// Do some computation using the methods
// you defined in the JS Library

logger.debug("ComputedValue="+dbsuiID);

// Inject the computed value in a runtime variable
context.variableManager.setValue("regkey","0."+dbsuiID);

