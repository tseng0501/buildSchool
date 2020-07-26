// duetime
function submit(){
    $('#duetime').modal('toggle')
}
//get location
let number = [];
var geolocation = 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAlKWP4uWjQIR3WDAWLAu6rUhBfc3_ppag';

function Get() {
    xhr = new XMLHttpRequest();
    xhr.open('POST', geolocation);
    xhr.onload = function () {
        var t = this;
        var response = JSON.parse(this.responseText);
        number = [response.location.lat , response.location.lng];  //把經緯度放在陣列裡面
        console.log(number);
        // $("#SearchLatLng").html("【您輸入的地址位置】緯度：" + response.location.lat + "經度：" + response.location.lng);
        $("#SearchLatLng").html([number]);
    }
    xhr.send();
};

//btn_go
let Lat;
let Lng;
function GetAddress() {
    address = $("#address_val").val();
    geocoder = new google.maps.Geocoder();
    geocoder.geocode(
        {
            'address': address
        }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                let LatLng = results[0].geometry.location; //LatLng 是一個function
                Lat = LatLng.lat();
                Lng = LatLng.lng();
                // $("#Search").html("【您輸入的地址位置】緯度：" + Lat + "經度：" + Lng);
            }
        }
    );
}
