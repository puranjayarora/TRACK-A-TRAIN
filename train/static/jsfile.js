var availableTags = ["hello","yese"
                          ];
    // JQuery for autocomplete in search box
    $( function() {
      $( "#q" ).autocomplete({
        source: availableTags
      });
    } );

var m = [];
m = [ {% for i in train %}

{{ i.0.dep_hr }},
{{ i.0.dep_min }},
{{ i.1.arr_hr }},
{{ i.1.arr_min }},
     
{% endfor %}
]
        
var i;
var t = 0;
var time = [];
for(i = 0; i < m.length;i = i+4 )
{
    if(m[i] == m[i+2])
    {
        time[t++] = m[i+3]-m[i+1];
    }
    else if(m[i+2] > m[i] )
    {
        time[t++] = (m[i+2]-m[i]-1)*60 + (60 - m[i+1]) + (m[i+3]);
    }
}

function myMap() {
  var mapCanvas = document.getElementById("map");
  var myCenter = new google.maps.LatLng(31.223811802305526, 75.76635360717773);
  var mapOptions = {
                    center: myCenter,
                    zoom: 8,
                    maxZoom: 12,
                    styles: [

                    { featureType: "administrative",
                     elementType: "labels",
                     stylers: [ { visibility: "off" } ]
                    },

                    { featureType: "poi",
                     elementType: "labels",
                     stylers: [ { visibility: "off" } ]
                    },
                    { featureType: "water",
                     elementType: "labels",
                     stylers: [ { visibility: "off" } ]
                    },
                    { featureType: "road",
                     elementType: "labels",
                     stylers: [ { visibility: "off" } ]
                    }
                        ]};
    var map = new google.maps.Map(mapCanvas,mapOptions);
    
//creating markers and infowindows
    
  {% for x in locations %}
  
    var coord = new google.maps.LatLng( {{ x.lat }} , {{ x.lng }} );
    var marker = new google.maps.Marker({
        position:coord,
        icon:"{% static 'images/circle.png' %}"
    });
    marker.setMap(map);
   var info = new google.maps.InfoWindow({ content: "{{x.name}}" }); 
   google.maps.event.addListener(marker, 'mouseover', (function(marker,info) { 
       return function() {
           info.open(map, marker);
       }; 
   })(marker,info));
   google.maps.event.addListener(marker, 'mouseout', (function(marker,info) { 
       return function() {
           info.close();
       }; 
   })(marker,info));
   
   //JQuery styling infowindows
   google.maps.event.addListener(info, 'domready', function () {
            var iwOuter = $('.gm-style-iw');
            var iwBackground = iwOuter.prev();
            var iwCloseBtn = iwOuter.next();
            iwBackground.children(':nth-child(2)').css({
                'display': 'none'
            });
            iwBackground.children(':nth-child(4)').css({
                'display': 'none'
            });
            iwCloseBtn.css({
              'display': 'none'
            });
        });
   
  {% endfor %}

var lineSymbol = { path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW, 
                              scale: 3, 
                              strokeColor: 'blue' 
                             };
    
var time_travelled = [];
   for(var z=0; z < time.length; z++)
    {
        time_travelled.push(0);
    }
var d = new Date();
var cur_hr = d.getHours();
var cur_min = d.getMinutes();
var flag = false;

  var mypolyline = new google.maps.Polyline({
    map: map,
    strokeColor: "#ff0000",
    strokeOpacity: 1,
    strokeWeight: 2,
    path: [
      {% for path in path1 %}
        new google.maps.LatLng({{ path.lat }},{{ path.lng }}),
      {% endfor %}
      {% for path in path4 %}
        new google.maps.LatLng({{ path.lat }},{{ path.lng }}),
      {% endfor %}
      /*{% for path in path2 %}
        new google.maps.LatLng({{ path.lat }},{{ path.lng }}),
      {% endfor %}*/
      {% for path in path3 %}
        new google.maps.LatLng({{ path.lat }},{{ path.lng }}),
      {% endfor %}
      {% for path in path7 %}
        new google.maps.LatLng({{ path.lat }},{{ path.lng }}),
      {% endfor %}
      /*{% for path in path6 %}
        new google.maps.LatLng({{ path.lat }},{{ path.lng }}),
      {% endfor %}
      {% for path in path5 %}
        new google.maps.LatLng({{ path.lat }},{{ path.lng }}) {% if not forloop.last %},{% endif %}
      {% endfor %} */
    ],
      icons: [
                    {
                        icon: lineSymbol,
                        offset: ((time_travelled[0]/time[0])*100) + '%'
                    }
                ],
})
  
 var mypolyline2 = new google.maps.Polyline({
    map: map,
    strokeColor: "#ff0000",
    strokeOpacity: 1,
    strokeWeight: 2,
    path: [
      {% for path in path3 %}
        new google.maps.LatLng({{ path.lat }},{{ path.lng }}),
      {% endfor %}
      {% for path in path7 %}
        new google.maps.LatLng({{ path.lat }},{{ path.lng }}),
      {% endfor %}
    ],
      icons: [
                    {
                        icon: lineSymbol,
                        offset: ((time_travelled[1]/time[1])*100) + '%'
                    }
                ],
}) 
 
 /* 
var mypolyline3 = new google.maps.Polyline({
    map: map,
    strokeColor: "#ff0000",
    strokeOpacity: 1,
    strokeWeight: 2,
    path: [
      {% for path in path8 %}
        new google.maps.LatLng({{ path.lat }},{{ path.lng }}),
      {% endfor %}
    ],
      icons: [
                    {
                        icon: lineSymbol,
                        offset: ((time_travelled[2]/time[2])*100) + '%'
                    }
                ],
})*/ 
  
  var ptk_gsp = new google.maps.Polyline({
    map: map,
    strokeColor: "#ff0000",
    strokeOpacity: 0,
    strokeWeight: 2,
    path: [
        {% for path in path1 %}
        new google.maps.LatLng({{ path.lat }},{{ path.lng }}),
        {% endfor %}
        ]
  });
   var gsp_asr = new google.maps.Polyline({
    map: map,
    strokeColor: "#ff0000",
    strokeOpacity: 0,
    strokeWeight: 2,
    path: [
        {% for path in path4 %}
        new google.maps.LatLng({{ path.lat }},{{ path.lng }}),
        {% endfor %}
        ]
  });
   var asr_juc = new google.maps.Polyline({
    map: map,
    strokeColor: "#ff0000",
    strokeOpacity: 0,
    strokeWeight: 2,
    path: [
        {% for path in path3 %}
        new google.maps.LatLng({{ path.lat }},{{ path.lng }}),
        {% endfor %}
        ]
  });
   
var lines = [mypolyline,mypolyline2];
var small_lines = [ptk_gsp,gsp_asr,asr_juc];
var length = [];
var small_length = [];

function calculateLength()
   {
       for(var i = 0; i<lines.length; i++)
           {
               length[i] = google.maps.geometry.spherical.computeLength((lines[i].getPath()).getArray());
           }
       for(var i = 0; i<small_lines.length; i++)
           {
               small_length[i] = google.maps.geometry.spherical.computeLength((small_lines[i].getPath()).getArray());
           }
   }
   
   calculateLength();
   
var stoppage = [
    [(small_length[0]/length[0]*100).toFixed(2),((small_length[0]+small_length[1])/length[0]*100).toFixed(2),((small_length[0]+small_length[1]+small_length[2])/length[0]*100).toFixed(2)]
    ,
    [(small_length[2]/length[1]*100).toFixed(2)]
];

function sleep(miliseconds, interval, offset, id) {
        time_travelled[id-1] = (offset*time[id-1])/100;
        clearInterval(interval);
        window.setTimeout(function() {
            animateCircle(lines[id-1],time[id-1],time_travelled[id-1],id);
        },miliseconds);
}
   
   
function checkStoppage(offset,interval,id) 
   {
       for(var i=0;i<stoppage.length;i++)
           {
               for(var j= 0; j< stoppage[i].length; j++)
               {
                    if(parseFloat(offset) == parseFloat(stoppage[i][j]) && id == i+1|| 
                       parseFloat(offset) == (parseFloat((parseFloat(stoppage[i][j])+0.011).toFixed(2))) && id == i+1)
                    {
                        sleep(4000,interval,offset,id);
                    }
               }
           }
   }
   
function animateCircle(line,time,tt,id) {
        var count = 0;
        var offsetValue = 0;
        var interval = window.setInterval(function() {
            count++;
            var icons = line.get('icons');
            icons[0].offset = ((tt/time)*100) + (count / 50) + '%';
            offsetValue = ((tt/time)*100) + (count / 50);
            line.set('icons', icons);
            checkStoppage(offsetValue.toFixed(2),interval,id);
            //centerOnMarker(line);
        }, (time * 12)/100);
}
    
    setInterval(function() {
            var d = new Date();
            var t = 0;
            cur_hr = d.getHours();
            cur_min = d.getMinutes();
            for(var i = 0;i < m.length; i = i+4)
                {
                    if (cur_hr == m[i] && cur_min == m[i+1])
                    {
                        animateCircle(lines[t],time[t],time_travelled[t],t+1);
                    }
                    t++;
                }
            },60000);
var v = 0;
    function calculateOffset() {
        
        for(i=0;i<m.length;i = i+4)
        {
            if(cur_hr == m[i]  && cur_min > m[i+1] && ((cur_hr < m[i+2]) || (cur_hr == m[i+2] && cur_min < m[i+3])))
                    {
                        time_travelled[v++] = cur_min - m[i+1] ;
                        flag = true;
                        
                    }
                else if(cur_hr > m[i] && cur_hr <= m[i+2])
                    {
                        time_travelled[v++] = (cur_hr - m[i] - 1) * 60 + (60 - m[i+1]) + cur_min;
                        flag = true;
                    }
                if(flag)
                    {
                        animateCircle(lines[v-1],time[v-1],time_travelled[v-1],v);
                    }
        }
                
            }
   
   function centerOnMarker(line){
    var getOffset = parseInt(line.get('icons')[0].offset);
    var length=google.maps.geometry.spherical.computeLength(line.getPath());
    var markerDistFromStart = getOffset * length / 100;
                
    var heading = google.maps.geometry.spherical.computeHeading(line.getPath().getAt(0), line.getPath().getAt(1))
    
    var markerLatLng = google.maps.geometry.spherical.computeOffset(line.getPath().getAt(0), markerDistFromStart, heading)
    var markernew = new google.maps.Marker({
                position: markerLatLng,
        icon: "{% static 'images/small circle.png' %}"
            });
           var info = new google.maps.InfoWindow({ content: "Pathankot-Amritsar Express" });
            markernew.setMap(map);
            google.maps.event.addListener(markernew, 'mouseover', function() { info.open(map, markernew); }); 
            google.maps.event.addListener(markernew, 'mouseout', function() { info.close(); });
            setTimeout(function() {
            markernew.setMap(null);
            },2000);
}
    
    calculateOffset();
}