var FormApi = "http://mimas.businessvalue.com.cn/api";

function isEmail(strEmail) {
  if (strEmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1) {
    return true;
  } else {
    return false;
  }
}

function isMobile(strMobile) {
  if (strMobile.search(/^[0-9]{11}$/) != -1) {
    return true;
  } else {
    return false
  }
}


function activeSector(sel, options) {
  var url = FormApi + "?jsoncallback=?";
  var parms = {
    api_key: "098f6bcd4621d373cade4e832627b4f6",
    api_sig: "8c09546e4fe6f8311964536c60a3067e"
  }
  var new_options = $.extend(parms, options);
  $.getJSON(url, new_options, function(data) {
    var opts = '';
    $.each(data, function(i, item) {
      opts += "<option value=" + item.id + ">" + item.value + "</option>";
    });
    $(sel).append(opts);
  });
}

function init() {
console.log('ccc')



gender = $('input:checked[name="gender"]').val()

degree = $('input:checked[name="degree"]').val()
age = $('input:checked[name="age"]').val()


sector = $('select[name="sector"] option:checked').val()

zhiwei = $('input:checked[name="zhiwei"]').val()
xitong = $('input:checked[name="xitong"]').val();
if(xitong == 0)
  xitong = $('input[name="xitong1"]').val();


download = $('input:checked[name="download"]').val();
if(download == 0)
  download = $('input[name="download1"]').val();

evaluate = $('input:checked[name="evaluate"]').val()



jianyi = '';
$('input:checked[name="jianyi[]"]').each(
                function(key, value) {
                  if(key != 0){
                    if($(value).val() == '')
                      jianyi = jianyi+"|"+$('input[name="jianyi1"]').val(); 
                    else
                    jianyi=jianyi+"|"+$(value).val(); 
                  }
                  else
                    jianyi = $(value).val();
                }
            );

lottery = $('input:checked[name="lottery"]').val()







}




$(".lottery").click(function(){

 lottery = $("input[name='lottery']:checked").val()
if(lottery == 'yes')
$(".hover").show();
else{
$(".hover").hide();
name = $('input:checked[name="name"]').val()
mobile = $('input:checked[name="mobile"]').val()
email = $('input:checked[name="email"]').val()
address = $('input:checked[name="address"]').val()
postcode = $('input:checked[name="postcode"]').val()
}
})


$('input[name="download"]').click(function(){
  if($('input:checked[name="download"]').val() == 0)
    $(".download1").show();
  else
    $(".download1").hide();
})



$(".jianyi").click(function(){
$(".jianyi1").toggle();
})

$('input[name="xitong"]').click(function(){
  if($('input:checked[name="xitong"]').val() == 0)
    $(".xitong1").show();
  else
    $(".xitong1").hide();
})

init();
$("#submit_button").live('click',function(){
  console.log('xxxxxxxcc')
  

  console.log(lottery)
  if (lottery == 'no') {
url = '&gender='+gender+'&degree='+degree+'&age='+age+'&sector='+sector+'&zhiwei='+zhiwei+
      '&xitong='+xitong+'&download='+download+'&evaluate='+evaluate+'&jianyi='+jianyi
   $.post("diaoc.php", url,
   function(data){
     alert("Data Loaded: " + data);
   });

  } else{
    url = '&gender='+gender+'&degree='+degree+'&age='+age+'&sector='+sector+'&zhiwei='+zhiwei+
      '&xitong='+xitong+'&download='+download+'&evaluate='+evaluate+'&jianyi='+jianyi+
      '&name='+name+'&mobile='+mobile+'&email='+email+'&address='+address+'&postcode='+postcode;
       $.post("diaoc.php", url,
   function(data){
     alert("Data Loaded: " + data);
   });
  };





    console.log('333')
   $.post("diaoc.php", url,
   function(data){
     alert("Data Loaded: " + data);
   });

})




