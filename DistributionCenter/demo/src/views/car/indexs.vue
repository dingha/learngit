<!--  -->
<template>
  <div class>
    <form
      name="punchout_form"
      method="post"
      action="https://openapi.alipaydev.com/gateway.do?charset=utf-8&method=alipay.trade.page.pay&sign=RjVPnZ0sSNhUqmsKQr4wj1XMCQ6hsD6YC43ZreqTJyid5kqQmZcYEOq4Pe5DXvHfUKbkFFFxwF8UvK5Gt6GfsRq0XfV%2Bn7mgf9Qlo1aqhRs%2FTpZ5kKo%2B%2BeJ1Oi4qRe2f8VV0ODnl3n9XnpeRLutAP4V9U5V076WZWlzgv0V0yZBcRWRQY4UptoJPPiMqpycClKOMK5G7q2y0Mb%2FfaGTYSaNkx9DZtZJm%2Fpx%2BOK0d4SGdB9wXTCM78hOQACLyxQt84Z0DJMsJcxQ7BnZFFp%2Fq22FHVyLplrxnsPdR5Xzi%2FXZRHyraNPbvlNie2YaSR85GuQbGpyCMe9qFrRNwA0Omsw%3D%3D&return_url=http%3A%2F%2Flocalhost%3A8888%2Falipay.trade.page.pay-JAVA-UTF-8%2Freturn_url.jsp&notify_url=http%3A%2F%2Flocalhost%3A8888%2Falipay.trade.page.pay-JAVA-UTF-8%2Fnotify_url.jsp&version=1.0&app_id=2016102100733321&sign_type=RSA2&timestamp=2020-07-01+11%3A50%3A15&alipay_sdk=alipay-sdk-java-dynamicVersionNo&format=json"
    >
      <input
        type="hidden"
        name="biz_content"
        value="{&quot;out_trade_no&quot;:&quot;20200701114108e27e6&quot;,&quot;total_amount&quot;:&quot;10.0&quot;,&quot;subject&quot;:&quot;总订单&quot;,&quot;product_code&quot;:&quot;FAST_INSTANT_TRADE_PAY&quot;}"
      />
      <input type="submit" value="立即支付" style="display:none" />
    </form>
  </div>
</template>

<script>
export default {
  name: ""
};
</script>
<style lang='scss' scoped>
</style>