function changeWidgetMode() {
	var widget = document.getElementById('widget');
	var select = document.getElementById('mode');

	widget.className = select.value;
}

document.addEventListener("DOMContentLoaded", function() {
	var select = document.getElementById('mode');

	select.addEventListener('change', changeWidgetMode);

	changeWidgetMode();
});
