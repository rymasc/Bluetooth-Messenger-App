 
var bluetoothle;
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
		window.alert("This is working");
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


function enableBluetooth() {
bluetoothle.initialize(initializeSuccessCallback, initializeErrorCallback);
document.getElementById("scan").disabled=false;
}


function scanForDevices() {
	alert('Make sure devices are in discoverable mode');
	//change to real devices when bt discovery is enabled
	document.getElementById("opt0").innerHTML="BT Device 1";
	document.getElementById("opt1").innerHTML="BT Device 2";
	document.getElementById("connect").disabled=false;
}

function connect() {
	var ddl = document.getElementById("device-list");
	var sel_device = ddl.options[ddl.selectedIndex].text;
	var conn_notif = 'Connected to ' + sel_device;
	document.getElementById("connection_status").innerHTML = conn_notif;
	document.getElementById("sendmsg").disabled=false;
}

function sendmsg() {
	var ddl = document.getElementById("device-list");
	var sel_device = ddl.options[ddl.selectedIndex].text;
	var msg = document.getElementById("msgbox").value;
	var msg_notif = 'Message \''+ msg +  '\' sent to ' + sel_device;
	document.getElementById("message_status").innerHTML = msg_notif;
}


