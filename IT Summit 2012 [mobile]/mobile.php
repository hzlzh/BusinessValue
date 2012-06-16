<?php
    $name       = urldecode(@$_GET['name']);
    $mobile     = urldecode(@$_GET['mobile']);
    $email      = urldecode(@$_GET['email']);
    $company    = urldecode(@$_GET['company']);
    $position   = urldecode(@$_GET['position']);
?>
<!DOCTYPE HTML>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <title>中国IT价值峰会</title>
  <meta name="viewport" content="width=device-width, user-scalable=no, maximum-scale=1">
  <meta name="keywords" content="2012,中国IT价值峰会,移动版,summit.itvalue.com.cn">
  <meta name="description" content="2012,中国IT价值峰会,summit.itvalue.com.cn,主办机构：IT价值联盟">
  <meta name="robots" content="index, follow">
  <link rel="shortcut icon" href="favicon.ico">
  <link rel="apple-touch-icon" href="apple-touch-icon-iphone.png"/>
  <link rel="apple-touch-icon" sizes="72x72" href="apple-touch-icon-ipad.png" />
  <link rel="apple-touch-icon" sizes="114x114" href="apple-touch-icon-iphone4.png" />
  <link rel="stylesheet" href="css/bootstrap.css">
  <link rel="stylesheet" href="css/mobile-style.css">
  <script src="js/jquery-1.7.2.min.js" type="text/javascript"></script>
  <script src="js/modernizr-2.5.3.min.js" type="text/javascript"></script>
  <script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-31833303-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
  </script>
</head>
<body>
  <a href="#submit-box"><span class="icons jump-to"></span></a>
  <img style="display:none;" src="css/images/sprites.png" alt="load">
  <header class="header">
    <img src="images/m-banner.png" alt="中国IT价值峰会"></header>
  <div class="content">
    <h2>会议详情</h2>
    <article class="m-feature">
      <ul>
        <li>
          <p>时间：2012年8月16-18日</p>
          <p>地点：三亚万丽度假酒店</p>
          <p>规模：200人</p>
        </li>
      </ul>
    </article>
    <h2>您将在会议中参与探讨</h2>
    <article class="event-time">
      <ul>
        <li>最新技术趋势的最新思考</li>
        <li>互联网的发展对于商业的深刻影响</li>
        <li>云计算评估方式及实践成果分享</li>
        <li>大数据整合最新思路与技术实现路径</li>
        <li>从企业级应用角度看移动化与社交网络的下一步发展</li>
        <li>如何面向业务需求选择技术和服务厂商</li>
        <li>各行业如何选择和应用IT核心技术</li>
        <li>新环境下的领导力和职业生涯</li>
      </ul>
    </article>
    <h2>您将在会议中收获</h2>
    <article class="event-time">
      <ul>
        <li>《2012中国IT新战略路线图》</li>
        <li>聆听60多位嘉宾的精彩演讲及论坛对话</li>
        <li>参与3场以CIO和业务需求导向的技术专业研讨</li>
        <li>与200位同行在一起</li>
        <li>更多您自己的发现……</li>
      </ul>
    </article>
    <h2>现在报名</h2>
    <article id="submit-box">
      <ul>
        <li>大会报名仅面向企业CEO、COO、CIO及IT主管、总监；不包含IT软硬件厂商从业人士。</li>
        <li>ITValue社区CIO会员： 免费参会，自付机票及酒店住宿费用，其他项目（会议期间用餐、资料、服装、休闲活动等）均为免费；</li>
        <li>非ITValue社区的CIO：参会费8000元 （包含3晚五星级酒店住宿、会议期间用餐、资料、服装、休闲活动等），机票自理。</li>
      </ul>
      <form class="form-inline">
        <div class="submit-box">
          <div class="item">
            姓名 <i>*</i>
            <input id="name" type="text" class="input-small" value="<?php echo $name; ?>"></div>
          <div class="item">
            手机 <i>*</i>
            <input id="mobile" type="text" class="input-small" value="<?php echo $mobile; ?>"></div>
          <div class="item">
            邮箱
            <i>*</i>
            <input id="email" type="text" class="input-small" value="<?php echo $email; ?>"></div>
          <div class="item">
            公司
            <i>*</i>
            <input id="company" type="text" class="input-small" value="<?php echo $company; ?>"></div>
          <div class="item">
            职位
            <i>*</i>
            <input id="title" type="text" class="input-small" value="<?php echo $position; ?>"></div>
          <div class="alert"></div>
          <div class="item submit b-bottom">
            <img src="css/images/loading.gif" alt="loading">
            <button id="submit_button" type="button" class="button submit">提交</button>
          </div>
        </div>
      </form>
    </article>
  </div>
  <footer class="footer">
    <div class="copyright">Copyright © 2012 《商业价值》杂志社</div>
  </footer>
  <script src="js/m-all.js" type="text/javascript"></script>
</body>
</html>