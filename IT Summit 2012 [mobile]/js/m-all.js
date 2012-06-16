// link click function #
jQuery(function() {
  jQuery('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var $target = jQuery(this.hash);
      var $url = this.hash.slice(1);
      var $scrollTime = 500;

      function updateUrl() {
        window.location.hash = encodeURIComponent($url);
      }
      $target = $target.length && $target || jQuery('[name=' + $url + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        jQuery('html,body').animate({
          scrollTop: targetOffset
        }, $scrollTime);
        setTimeout(updateUrl, $scrollTime + 100)
        return false;
      }
    }
  });
});


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
var FormApi = "http://mimas.businessvalue.com.cn/api";

function validateForm() {
  var $form = $("#register_meet_form2012").find(".baoMingBox3Content"),
    $input_list = $form.find(".item").find("input"),
    input_length = $input_list.length,
    isSubmit = true,
    mobile = $.trim($form.find("input[name='mobile']").val()),
    email = $.trim($form.find("input[name='email']").val()),
    $country = $form.find("select[name='country']"),
    $province = $form.find("select[name='province']"),
    $city = $form.find("select[name='city']"),
    $sector = $form.find("select[name='sector']"),
    $duty = $form.find("select[name='duty']");
  parms = "";
  for (var i = 0; i < input_length; i++) {
    var txt = $.trim($input_list.eq(i).val()),
      name = $.trim($input_list.eq(i).attr("name"));
    if (!txt) {
      isSubmit = false;
      break;
    } else {
      parms += name + "=" + txt + "&";
    }
  }
  parms = parms.substring(0, parms.length - 1);
  if (!isSubmit) {
    alert("请把必填项填写完整!");
    return false;
  }
  if (!isMobile(mobile)) {
    alert("您的手机格式填写有误！");
    return false;
  }
  if (!isEmail(email)) {
    alert("您的邮箱格式填写有误！");
    return false;
  }
  if ($country.find("option:selected").html() !== "请选择" && $province.find("option:selected").html() === "请选择") {
    alert("请选择地区完整！");
    return false;
  }
  if ($country.find("option:selected").html() !== "请选择" && $province.find("option:selected").html() !== "请选择") {
    var c_id = $country.find("option:selected").attr("value");
    var p_id = $province.find("option:selected").attr("value");
    var city_id = $city.find("option:selected").attr("value");
    parms += "&country=" + c_id + "&province=" + p_id + "&city=" + city_id;
  }
  if ($sector.find("option:selected").html() !== "请选择") {
    var sector_id = $sector.find("option:selected").attr("value");
    parms += "&sector=" + sector_id;
  }
  if ($duty.find("option:selected").html() !== "请选择") {
    var duty_id = $duty.find("option:selected").attr("value");
    parms += "&duty=" + duty_id;
  }
  var api_info = "&api_key=cc8c62879d34d166787ec074e98f73a8&api_sig=4f13afcc38aa3e3215e215e11978049d&method=user.register&event_key=d184991c82c04b834cea32cde7801716";
  parms += api_info;
  $.getJSON(FormApi + "?jsoncallback=?", parms, function(data) {
    if (!data['error']) {
      $('.alert').removeClass('alert-error').addClass('alert-success').html('<div class="success-title"><i class="icons success-icon"></i><span>提交成功</span></div>'+data['info']).slideUp().slideDown();
      $('#name,#mobile,#email,#company,#title,#department').val('');
    } else {
      if(data['error_code'] == 10103)
        $('.alert').removeClass('alert-success').addClass('alert-error').html('您已使用该邮箱进行过报名').slideUp().slideDown();
      else
        $('.alert').removeClass('alert-success').addClass('alert-error').html('提交失败').slideUp().slideDown();
    }
  })
}

function activeSelect() {
  var $form = $("#register_meet_form2012").find(".baoMingBox3Content"),
    $country = $form.find("select[name='country']"),
    $province = $form.find("select[name='province']"),
    $city = $form.find("select[name='city']");
  $country.change(function() {
    var v = $.trim($(this).val());
    if (v == "please") {
      var option = "<option>请选择</option>";
      $province.empty().append(option).attr("disabled", true);
      $city.empty().append(option).attr("disabled", true);
      return false;
    }
    $province.attr("disabled", false);
    getList($province, {
      api_sig: "f5ac92322a92a517f45f31702045c74f",
      method: "user.province",
      "region_id": v
    }, function(sign) {
      if (sign) {
        var option = "<option>请选择</option>";
        $province.empty().append(option).attr("disabled", true);
        $city.empty().append(option).attr("disabled", true);
      }
    });
  });
  $province.change(function() {
    var v = $.trim($(this).val());
    if ($province.find("option").eq(0).html() == "请选择") {
      $province.find("option").eq(0).remove();
    }
    $province.find("options").eq(1).remove();
    $city.empty();
    getList($city, {
      api_sig: "175a28bc955a135f4de51fd52149a0dd",
      method: "user.city",
      "region_id": v
    });
    $city.attr("disabled", false);
  })
  var getList = function($sel, options, callback) {
      var url = FormApi + "?jsoncallback=?",
        sign = false;
      var parms = {
        api_key: "cc8c62879d34d166787ec074e98f73a8",
        api_sig: "9f1b757dbbcac9c02dba1a4d094a6133"
      }
      var new_options = $.extend(parms, options);
      $.getJSON(url, new_options, function(data) {
        var opts = '';
        $.each(data, function(i, item) {
          opts += "<option value=" + item.id + ">" + item.region_cn + "</option>";
        });
        if (opts.length == 0) {
          sign = true;
        }
        if (callback) {
          callback(sign);
        }
        $sel.append(opts);
      });
    }
  getList($country, {
    method: "user.country",
    "region_id": 0
  });
};

function activeSector(sel, options) {
  var url = FormApi + "?jsoncallback=?";
  var parms = {
    api_key: "cc8c62879d34d166787ec074e98f73a8",
    api_sig: "9f1b757dbbcac9c02dba1a4d094a6133"
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
if ($("#register_meet_form2012").length > 0) {
  activeSelect();
  activeSector(".baoMingBox3 select[name='sector']", {
    method: "user.sector",
    api_sig: "edb8fdbead39bb283375d76d6d44ecab"
  });
  activeSector(".baoMingBox3 select[name='duty']", {
    method: "user.duty",
    api_sig: "312d4b0501334cdee8490dd081c003f1"
  });
  $(".baoMingBox4 input[type='submit']").click(function() {
    validateForm();
    return false;
  });
}