$(function () {
  $(".hamburger__container").click(function () {
    $(this).toggleClass("active");
    $(".gNav").toggleClass("active");
    $("body").toggleClass("active");
  });

  $(function () {
    /* formの個人情報保護方針がチェックされると、「内容を確認する」btnがactive状態になる */
    $("#privacy").click(function () {
      if ($("#privacy").prop("checked")) {
        $(".btn1").prop("disabled", false);
      } else {
        $(".btn1").prop("disabled", true);
      }
    });

    /* ページ読み込み時のボタン制御処理 */
    if ($('input[id="privacypolicy"]:checked').val()) {
      $('[name="btn1"]').prop("disabled", false);
    } else {
      $('[name="btn1"]').prop("disabled", true);
    }
  });
});
