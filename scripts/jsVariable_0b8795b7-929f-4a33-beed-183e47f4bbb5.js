// Javascript variable skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// This function evaluates the variable value.
// Use either the syntax ${<variable name>.col_<field number>} or ${<variable name>.<field name>} to access the value of the variable field. 
function evaluate() {
	return new function() {
                      var suidTime = new Date();
                      var nsuidTime = suidTime.getTime();
                      min = Math.ceil(1111111111111111);
                      max = Math.floor(99999999999999999);
                      this.dbsuiID= nsuidTime + parseInt(Math.random() * (max - min) + min);
                      this.dbsuiID="0."+this.dbsuiID;
                     // logger.debug("ComputedValue="+dbsuiID);
                     // this.dbsuiID="0."+suiID.toString();
	};
}