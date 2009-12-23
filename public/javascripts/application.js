// KVC Object Constructor Function
function KVCObject() {
  // register observers of a key of this object
  this.registerObserver = function(observer, key) {
    if(this.observers == null)
      this.observers = {};
    if(this.observers[key] == null)
      this.observers[key] = [observer];
    else
      this.observers[key].push(observer);
  };
  
  // set a value of this object, and inform observers of the assignment
  this.set = function(key, value) {
    if(this.observers != null && this.observers[key] != null) {
      currentValue = this[key];
      for(var i = 0; i < this.observers[key].length; i++)
        this.observers[key][i].keyWillUpdate(this, key, currentValue, value);
    }
    this[key] = value;
  };
  
  // simple function to help with consistency
  this.get = function(key) {
    return this[key];
  };
};


;(function($) {
	$(function() {
		
		$checkbox = $('#checkbox');
		$ping = $('#ping');
		$pong = $('#pong');
		$hmmm = $('.hmmm');

		// create a new KVC object
		var kvc = new KVCObject();

		// register the p tag to observe the checked key of the object
		kvc.registerObserver($pong, 'checked');
		kvc.registerObserver($ping, 'checked');
		kvc.registerObserver($hmmm, 'checked');

		// define what happens when the p tag is informed of an assignment
		$ping.keyWillUpdate = function(object, key, currentValue, newValue) {
			console.log(object, key, currentValue, newValue);
			if(newValue) {
				$(this).html("On");
			} else {
				$(this).html("Off");
			};
		};
		
		$pong.keyWillUpdate = function(object, key, currentValue, newValue) {
			if(newValue) {
				$(this).html("On");
			} else {
				$(this).html("Off");
			};
		};
		
		$hmmm.keyWillUpdate = function(object, key, currentValue, newValue) {
			if(newValue) {
				$(this).html("XXXXXXXXXXXXXX");
			} else {
				$(this).html("yyyyyyyyyyyyyyy");
			};
		};

		// when the button is clicked, set the checked key of the kvc object to true
		$checkbox.click(function(e) {
			// Act on the event; can use (event.target)
			kvc.set('checked', this.checked);
		});

	});
})(jQuery);
