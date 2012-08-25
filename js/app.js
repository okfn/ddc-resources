$(document).ready(function() {
  var dataset = new recline.Model.Dataset({
    url: 'https://docs.google.com/spreadsheet/ccc?key=0Aon3JiuouxLUdFRBbUYxR3B6UDhLZEplN0VPQzNqN0E#gid=0',
    backend: 'gdocs'
  });
  dataset.fetch().done(function(data) {
    var template = $('#booktpl').html();
    var html = Mustache.to_html(template, {
      resources: dataset.records.toJSON()
    });
    $('#issueswrap').html(html);
  });
  $('#helpinfo').hide();
  $('a.#infos').on('click', function(){
      $('#helpinfo').slideToggle();
  });
});

