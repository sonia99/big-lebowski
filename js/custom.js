$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab-pane('show')
})

$('#myTabs a[href="#profile"]').tab-pane('show') // Select tab by name
$('#myTabs a:first').tab-pane('show') // Select first tab
$('#myTabs a:last').tab-pane('show') // Select last tab
$('#myTabs li:eq(2) a').tab-pane('show') // Select third tab (0-indexed)

